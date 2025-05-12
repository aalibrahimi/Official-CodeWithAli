"use client";
import { motion } from "motion/react";
import { Loader2, Send } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormDataStore } from "./serviceform";
import { useLocale, useTranslations } from "next-intl";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { isRtlLang } from "rtl-detect";

interface Props {
  scrollToTop?: boolean | false;
  badge?: string;
  header?: string;
  desc?: string;
  btnText?: string;
}

export default function ContactForm({
  scrollToTop,
  badge,
  header,
  desc,
  btnText,
}: Props) {
  const t = useTranslations("Contact");
  const locale = useLocale();
  const isRTL = isRtlLang(locale);

  const {
    name,
    setName,
    email,
    setEmail,
    service,
    setService,
    projectDetails,
    setProjectDetails,
  } = useFormDataStore();
  const formData = {
    name,
    email,
    service,
    projectDetails,
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  useEffect(() => {
    if (scrollToTop) {
      scrollTo({ top: 0 });
    }

    setIsMounted(true);

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleMediaChange = () => {
      setIsReducedMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  // Apply conditional animation based on device capability and user preference
  const getAnimationProps = (delay = 0) => {
    if (!isMounted || isReducedMotion) {
      return {}; // No animation on SSR or when reduced motion is preferred
    }

    return {
      initial: { opacity: 0, y: 10 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.3, delay },
    };
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_KEY}`,
          "Content-Type": "application/json",
        },
        // Need to send content to API
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setName("");
      setEmail("");
      setService("");
      setProjectDetails("");

      setStatus({
        type: "success",
        message: t("status.success"),
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({
        type: "error",
        message: t("status.error"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-24 bg-gradient-to-b from-red-500/80 to-red-600/80 dark:from-black dark:to-black"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* HEADER */}
          {/* <motion.div className="text-center mb-12 " {...getAnimationProps()}> */}
          <div className="text-center mb-12">
            <Badge className="bg-red-700 dark:bg-red-900/30 dark:text-red-400 border-transparent mb-4 px-3 py-1">
              {badge ? `${badge.toUpperCase()}` : `${t("badge")}`}
            </Badge>
            <h2 className="text-3xl text-white md:text-4xl font-bold mt-2 mb-4">
              {header ? `${header}` : `${t("header")}`}
            </h2>
            <p className="text-white/80 dark:text-red-200/60 max-w-2xl mx-auto">
              {desc ? `${desc}` : `${t("desc")}`}
            </p>
          </div>
          {/* </motion.div> */}

          {/* FORM */}
          {/* <motion.div
            className="bg-black border-2 border-red-800/40 rounded-xl p-8 md:p-10 shadow-xl shadow-red-950/10"
            {...getAnimationProps(0.1)}
          > */}
          <div className="bg-red-950/80 dark:bg-black border-2 border-red-800/40 rounded-xl p-8 md:p-10 shadow-xl shadow-red-950/10">
            <div className="grid grid-cols-1 gap-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white dark:text-red-200 font-medium mb-2"
                  >
                    {t("field.name.label")}
                  </label>
                  <Input
                    type="text"
                    id="name"
                    value={formData.name}
                    placeholder={`${t("field.name.placeholder")}`}
                    onChange={(e) => setName(e.target.value)}
                    className=" bg-white/90 placeholder:text-black/80 dark:placeholder:text-gray-500 dark:bg-red-950/20 border-red-800/40 text-black dark:text-white focus:border-red-600 h-12 text-base w-full"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white dark:text-red-200 font-medium mb-2"
                    >
                      {t("field.email.label")}
                    </label>
                    <Input
                      type="email"
                      id="email"
                      value={formData.email}
                      placeholder={`${t("field.email.placeholder")}`}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/90 placeholder:text-black/80 dark:placeholder:text-gray-500 dark:bg-red-950/20 border-red-800/40 text-black dark:text-white focus:border-red-600 h-12 text-base w-full"
                      required
                    />
                  </div>

                  {/* Services */}
                  <div>
                    <Select onValueChange={(value) => setService(value)}>
                      <label
                        htmlFor="email"
                        className="block text-white dark:text-red-200 font-medium mb-2"
                      >
                        {t("field.service.label")}
                      </label>
                      <SelectTrigger
                        id="service"
                        className="w-full bg-white/90 dark:bg-red-950/20 border border-red-800 text-black dark:text-white focus:border-red-600 rounded-md h-12 text-base px-3 focus:bg-red-800"
                      >
                        <SelectValue
                          placeholder={t("field.service.placeholder")}
                        />
                      </SelectTrigger>
                      <SelectContent className="bg-white  dark:bg-black text-black dark:text-white">
                        <SelectItem
                          value="website"
                          className="hover:bg-red-600 hover:text-white cursor-pointer"
                        >
                          {t("field.service.option.1")}
                        </SelectItem>
                        <SelectItem
                          value="app"
                          className="hover:bg-red-600 hover:text-white cursor-pointer"
                        >
                          {t("field.service.option.2")}
                        </SelectItem>
                        <SelectItem
                          value="design"
                          className="hover:bg-red-600 hover:text-white cursor-pointer"
                        >
                          {t("field.service.option.3")}
                        </SelectItem>
                        <SelectItem
                          value="ecommerce"
                          className="hover:bg-red-600 hover:text-white cursor-pointer"
                        >
                          {t("field.service.option.4")}
                        </SelectItem>
                        <SelectItem
                          value="seo"
                          className="hover:bg-red-600 hover:text-white cursor-pointer"
                        >
                          {t("field.service.option.5")}
                        </SelectItem>
                        <SelectItem
                          value="hosting"
                          className="hover:bg-red-600 hover:text-white cursor-pointer"
                        >
                          {t("field.service.option.6")}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-white dark:text-red-200 font-medium mb-2"
                  >
                    {t("field.details.label")}
                  </label>
                  <Textarea
                    id="message"
                    className="bg-white/90 placeholder:text-black/80 dark:placeholder:text-gray-500 dark:bg-red-950/20 border-red-800/40 text-black dark:text-white focus:border-red-600 h-40 text-base w-full resize-none"
                    required
                    value={formData.projectDetails}
                    onChange={(e) => setProjectDetails(e.target.value)}
                    placeholder={`${t("field.details.placeholder")}`}
                  />
                </div>

                {/* Status Messages */}
                {status.type && (
                  <div
                    className={`p-4 rounded-lg ${
                      status.type === "success"
                        ? "bg-green-50 text-green-800"
                        : "bg-red-50 text-red-800"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex justify-center md:justify-end">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-red-700 to-red-800 dark:from-red-700 dark:to-red-900 hover:from-red-800 hover:to-red-800/80 
                     dark:hover:from-red-600 dark:hover:to-red-800 text-white border border-red-700/40 shadow-lg shadow-red-950/20 px-10 py-6 text-lg font-medium hover:cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        {t("submitLoad")}
                      </>
                    ) : (
                      <>
                        {isRTL ? (
                          <Send className="mr-2 h-5 w-5 rotate-270" />
                        ) : (
                          <Send className="mr-2 h-5 w-5" />
                        )}
                        {btnText ? `${btnText}` : `${t("submitbtn")}`}
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
          {/* </motion.div> */}
        </div>
      </div>
    </section>
  );
}
