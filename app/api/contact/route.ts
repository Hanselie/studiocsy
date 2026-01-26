import { NextResponse } from "next/server";
import { contactSchema } from "@/types/contact";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(req: Request) {
  console.log("=== Contact API called ===");

  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      "unknown";

    // Anti-spam
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment." },
        { status: 429 }
      );
    }

    const body = await req.json();
    console.log("Received contact form data:", { ...body, message: body.message?.substring(0, 50) + "..." });

    // Server-side validation (ANTI TAMPER)
    let data;
    try {
      data = contactSchema.parse(body);
    } catch (validationError: any) {
      console.error("Validation error:", validationError);
      return NextResponse.json(
        { error: validationError.errors?.[0]?.message || "Invalid form data. Please check your inputs." },
        { status: 400 }
      );
    }

    // ============================================
    // CONTACT FORM SUBMISSION - LOGGED TO CONSOLE
    // ============================================
    // TODO: Integrate with email service (SendGrid, Resend, etc.) 
    // or send to external CRM/webhook
    console.log("\n📧 === NEW CONTACT FORM SUBMISSION ===");
    console.log("Name:", data.name);
    console.log("Email:", data.email);
    console.log("Brand:", data.brand);
    console.log("Website:", data.website || "(not provided)");
    console.log("Ad Spend:", data.adSpend);
    console.log("Message:", data.message);
    console.log("Timestamp:", new Date().toISOString());
    console.log("IP Address:", ip);
    console.log("=== END SUBMISSION ===\n");

    // Mock successful response
    const mockResponse = {
      id: Date.now(), // Use timestamp as mock ID
      name: data.name,
      email: data.email,
      brand: data.brand,
      website: data.website,
      ad_spend: data.adSpend,
      message: data.message,
      created_at: new Date().toISOString(),
    };

    console.log("✅ Contact form processed successfully (logged to console)");
    return NextResponse.json({ success: true, data: mockResponse });
  } catch (err: any) {
    console.error("Unexpected error in contact API:", err);
    console.error("Error name:", err.name);
    console.error("Error message:", err.message);
    console.error("Error stack:", err.stack);
    return NextResponse.json(
      { error: err.message || "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

