"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Send,
    CheckCircle2,
    Clock,
    Sparkles,
    Zap,
    TrendingUp,
    MessageSquare,
    User,
    Mail,
    Building,
    Globe,
    ChevronDown,
    MapPin
} from "lucide-react";
import Link from "next/link";

// Form Schema with validation
const contactSchema = z.object({
    name: z.string().min(2, "Name is too short").max(50),
    email: z.string().email("Invalid email address"),
    brand: z.string().min(2, "Brand name is required"),
    website: z.string().url("Please enter a valid URL (e.g., https://example.com)").optional().or(z.literal("")),
    adSpend: z.string().min(1, "Please select your monthly ad spend"),
    message: z.string().min(10, "Tell us a bit more about your needs"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormValues) => {
        setIsSubmitting(true);

        // Google Apps Script Web App URL - connects directly to Google Sheets
        // IMPORTANT: Replace this with your deployed Google Apps Script URL
        const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwud2C-tqvXNAgTzRtsItitonW3C7TcZ511VZyd8Za-YhNE4ngTHgpBOsvD7IWqtyZjuQ/exec";

        try {
            const res = await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors", // Required for Google Apps Script
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    brand: data.brand,
                    website: data.website || "",
                    adSpend: data.adSpend,
                    message: data.message,
                }),
            });

            // With no-cors mode, we can't read the response
            // So we assume success if no error was thrown
            console.log("Form submitted to Google Sheets");

            // Success!
            reset();
            setIsSubmitted(true);
        } catch (error) {
            console.error("Form submission error:", error);
            alert("Failed to submit form. Please try again or contact us directly at csymediaofficial@gmail.com");
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <main className="bg-black pt-32 min-h-screen relative overflow-hidden">
            {/* BACKGROUND ELEMENTS */}
            <div className="fixed -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />
            <div className="fixed bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-[160px] pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* LEFT CONTENT */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400 backdrop-blur mb-6">
                                <Sparkles size={14} />
                                Let&apos;s Create Something Amazing
                            </span>
                            <h1 className="font-heading text-[32px] sm:text-[40px] md:text-[48px] lg:text-[72px] font-extrabold text-white leading-tight tracking-tight lg:text-7xl">
                                Ready to <br />
                                <span className="bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent italic pr-[0.1em] -mr-[0.1em] clip-fix inline-block">
                                    Scale Up?
                                </span>
                            </h1>
                            <p className="mt-8 max-w-lg font-body text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-zinc-400 leading-relaxed">
                                Fill out the form and we&apos;ll get back to you within <strong className="text-white font-bold">24 hours</strong> with a custom strategy proposal.
                            </p>

                            {/* WHAT HAPPENS NEXT */}
                            <div className="mt-12 space-y-8">
                                <h3 className="font-heading text-white font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] flex items-center gap-2">
                                    What Happens Next?
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="h-10 w-10 flex-shrink-0 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                                            1
                                        </div>
                                        <div>
                                            <h3 className="text-white font-medium">Review</h3>
                                            <p className="text-zinc-500 text-sm mt-1">We review your submission and brand details.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="h-10 w-10 flex-shrink-0 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                                            2
                                        </div>
                                        <div>
                                            <h3 className="text-white font-medium">Strategy Call</h3>
                                            <p className="text-zinc-500 text-sm mt-1">Schedule a 30-min strategy call if needed.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="h-10 w-10 flex-shrink-0 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                                            3
                                        </div>
                                        <div>
                                            <h3 className="text-white font-medium">Proposal</h3>
                                            <p className="text-zinc-500 text-sm mt-1">Receive a custom proposal within <strong className="text-blue-400">48 hours</strong>.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </div>

                    {/* RIGHT CONTENT - FORM */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="p-5 sm:p-10 rounded-2xl sm:rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden">
                            {/* INNER GLOW */}
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-40 w-40 bg-blue-500/20 blur-[80px]" />

                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit(onSubmit)}
                                        className="space-y-6 relative z-10"
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                    >
                                        <div className="grid sm:grid-cols-2 gap-6">
                                            {/* Name */}
                                            <div className="space-y-2">
                                                <label className="font-ui text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                                                    <User size={12} /> Full Name
                                                </label>
                                                <input
                                                    {...register("name")}
                                                    type="text"
                                                    className={`w-full font-body bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-600 autofill:bg-white/5 autofill:text-white`}
                                                    placeholder="John Doe"
                                                    style={{ color: 'white' }}
                                                />
                                                {errors.name && <p className="font-ui text-red-400 text-xs mt-1">{errors.name.message}</p>}
                                            </div>

                                            {/* Email */}
                                            <div className="space-y-2">
                                                <label className="font-ui text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                                                    <Mail size={12} /> Work Email
                                                </label>
                                                <input
                                                    {...register("email")}
                                                    type="email"
                                                    className={`w-full font-body bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-600 autofill:bg-white/5 autofill:text-white`}
                                                    placeholder="john@brand.com"
                                                    style={{ color: 'white' }}
                                                />
                                                {errors.email && <p className="font-ui text-red-400 text-xs mt-1">{errors.email.message}</p>}
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-6">
                                            {/* Brand Name */}
                                            <div className="space-y-2">
                                                <label className="font-ui text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                                                    <Building size={12} /> Brand Name
                                                </label>
                                                <input
                                                    {...register("brand")}
                                                    type="text"
                                                    className={`w-full font-body bg-white/5 border ${errors.brand ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-600 autofill:bg-white/5 autofill:text-white`}
                                                    placeholder="Awesome Ecom"
                                                    style={{ color: 'white' }}
                                                />
                                                {errors.brand && <p className="font-ui text-red-400 text-xs mt-1">{errors.brand.message}</p>}
                                            </div>

                                            {/* Website */}
                                            <div className="space-y-2">
                                                <label className="font-ui text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                                                    <Globe size={12} /> Website (Optional)
                                                </label>
                                                <input
                                                    {...register("website")}
                                                    type="url"
                                                    className={`w-full font-body bg-white/5 border ${errors.website ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-600 autofill:bg-white/5 autofill:text-white`}
                                                    placeholder="https://..."
                                                    style={{ color: 'white' }}
                                                />
                                                {errors.website && <p className="font-ui text-red-400 text-xs mt-1">{errors.website.message}</p>}
                                            </div>
                                        </div>

                                        {/* Monthly Ad Spend */}
                                        <div className="space-y-2">
                                            <label className="font-ui text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                                                <TrendingUp size={12} /> Monthly Ad Spend
                                            </label>
                                            <div className="relative">
                                                <select
                                                    {...register("adSpend")}
                                                    className={`w-full font-body appearance-none bg-white/5 border ${errors.adSpend ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors cursor-pointer`}
                                                >
                                                    <option value="" className="bg-zinc-900">Select Range...</option>
                                                    <option value="$0 - $5,000" className="bg-zinc-900">$0 - $5,000</option>
                                                    <option value="$5,000 - $15,000" className="bg-zinc-900">$5,000 - $15,000</option>
                                                    <option value="$15,000 - $50,000" className="bg-zinc-900">$15,000 - $50,000</option>
                                                    <option value="$50,000+" className="bg-zinc-900">$50,000+</option>
                                                </select>
                                                <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
                                            </div>
                                            {errors.adSpend && <p className="font-ui text-red-400 text-xs mt-1">{errors.adSpend.message}</p>}
                                        </div>

                                        {/* Message */}
                                        <div className="space-y-2">
                                            <label className="font-ui text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                                                <MessageSquare size={12} /> Your Message
                                            </label>
                                            <textarea
                                                {...register("message")}
                                                rows={4}
                                                className={`w-full font-body bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-600 resize-none`}
                                                placeholder="Tell us about your current challenges and goals..."
                                                style={{ color: 'white' }}
                                            />
                                            {errors.message && <p className="font-ui text-red-400 text-xs mt-1">{errors.message.message}</p>}
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full font-ui flex items-center justify-center gap-2 sm:gap-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 py-3 sm:py-5 text-sm sm:text-lg font-bold text-white transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-xl shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <div className="h-5 w-5 sm:h-6 sm:w-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            ) : (
                                                <>
                                                    Let's Connect With Us
                                                    <Send size={14} className="sm:w-[18px] sm:h-[18px]" />
                                                </>
                                            )}
                                        </button>
                                        <p className="text-center font-ui text-xs text-zinc-500 mt-4">
                                            By submitting, you agree to our <a href="#" className="underline hover:text-white transition-colors decoration-blue-500/50 underline-offset-4">Privacy Policy</a>
                                        </p>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12 relative z-10"
                                    >
                                        <div className="h-20 w-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 text-green-400 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                                            <CheckCircle2 size={40} />
                                        </div>
                                        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold text-white mb-4">Request Received!</h2>
                                        <p className="text-zinc-400 text-lg mb-10 max-w-sm mx-auto">
                                            Our strategists are already looking into your brand. We&apos;ll be in touch within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => {
                                                setIsSubmitted(false);
                                                reset();
                                            }}
                                            className="text-zinc-500 hover:text-white transition-colors text-sm font-medium"
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>

                {/* CONTACT INFO MICRO-TEXTS - HORIZONTAL & CENTERED */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-24 pt-16 border-t border-white/10 flex flex-wrap justify-center gap-y-10 gap-x-12 sm:gap-x-24 mb-20"
                >
                    <div className="flex items-center gap-4 group">
                        <div className="h-10 w-10 flex-shrink-0 rounded-xl bg-blue-500/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                            <Mail size={18} />
                        </div>
                        <div>
                            <h4 className="font-heading italic text-white font-bold text-base leading-tight">Email Us</h4>
                            <p className="text-zinc-500 font-body text-sm mt-1">csymediaofficial@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                        <div className="h-10 w-10 flex-shrink-0 rounded-xl bg-blue-500/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                            <MessageSquare size={18} />
                        </div>
                        <div>
                            <h4 className="font-heading italic text-white font-bold text-base leading-tight">Live Chat</h4>
                            <p className="text-zinc-500 font-body text-sm mt-1">Mon-Fri, 9am-6pm EST</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                        <div className="h-10 w-10 flex-shrink-0 rounded-xl bg-blue-500/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                            <MapPin size={18} />
                        </div>
                        <div>
                            <h4 className="font-heading italic text-white font-bold text-base leading-tight">Location</h4>
                            <p className="text-zinc-500 font-body text-sm mt-1">Remote-first, worldwide</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
