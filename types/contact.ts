import * as z from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().email("Invalid email address"),
  brand: z.string().min(2, "Brand name must be at least 2 characters"),
  website: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  adSpend: z.enum(
    [
      "$0 - $5,000",
      "$5,000 - $15,000",
      "$15,000 - $50,000",
      "$50,000+",
    ],
    { message: "Please select a valid ad spend range" }
  ),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});
