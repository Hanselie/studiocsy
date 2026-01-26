import type { Metadata } from "next";
import ContactForm from "@/components/sections/Contact/ContactForm";

// Contact Page SEO - Bottom-of-funnel conversion page
export const metadata: Metadata = {
    title: "Book a Strategy Call | Free ROAS Audit for Health Brands",
    description: "Get a free performance audit for your wellness brand. Book a strategy call with our UGC & VSL experts. 24-hour response guaranteed for qualified health & supplement brands.",
    keywords: [
        "book strategy call",
        "free ROAS audit",
        "UGC agency consultation",
        "wellness brand consultation",
    ],
};

export default function ContactPage() {
    return <ContactForm />;
}
