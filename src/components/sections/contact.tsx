"use client";

import { useState } from "react";
import { motion as m } from "motion/react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import ContactDialog from "@/components/contact/ContactDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { AnimationState } from "@/components/animation/envelope/types";
import Image from "next/image";

// Definisikan schema validasi menggunakan Zod
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name, at least 2 characters."),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Message must contain at least 10 characters."),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [animationState, setAnimationState] = useState<AnimationState>("idle");

  // Perbaikan: Hanya panggil useForm SATU kali saja agar state tidak bertabrakan
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactForm) => {
    // 1. Buka dialog dan set langsung ke status LOADING
    setDialogOpen(true);
    setAnimationState("loading");

    // Kertas akan melayang & teks "Sending Message" ditahan selama 3 detik agar user sempat melihat
    await new Promise((res) => setTimeout(res, 3000));

    // Anggap saja respons server berhasil (ubah false jika mau tes silang merah)
    const success = true;

    if (success) {
      setAnimationState("success");
      // Di dalam SubmitAnimation, status success memakan waktu ~1.5 detik
      // untuk proses: kertas masuk -> amplop nutup -> badge nempel.
      reset();
    } else {
      setAnimationState("error");
    }

    console.log("Form Submitted Data:", data);
  };

  return (
    <section
      id="contact"
      className="relative max-w-360 mx-auto overflow-hidden bg-white dark:bg-gray-900 py-10"
    >
      {/* Komponen dialog animasi amplop */}
      <ContactDialog
        open={dialogOpen}
        state={animationState}
        onClose={() => {
          setDialogOpen(false);
          setAnimationState("idle");
        }}
      />

      {/* Background Dots Pattern */}
      {/* <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#D1D5DB 1.4px,transparent 1.4px)",
          backgroundSize: "24px 24px",
        }}
      /> */}

      <Image
        src="/images/Pattern.png"
        alt="pattern"
        width={632}
        height={616}
        className="absolute right-1/2 inset-0 top-40 "
      />

      <Image
        src="/images/Pattern.png"
        alt="pattern"
        width={632}
        height={616}
        className="absolute  inset-0 top-40 left-1/2 "
      />

      <div className="custom-container max-w-360 mx-auto relative z-50">
        {/* HEADER SECTION */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col items-center"
        >
          <span
            className="
            rounded-full
            border border-neutral-200
            bg-white dark:bg-neutral-800 px-5 py-2
            text-xs
            font-semibold
            tracking-[0.2em]
            text-neutral-500 dark:text-white
            "
          >
            CONTACT
          </span>
          <h2
            className="
            mt-5 text-center
            text-4xl font-black
            tracking-tight
            md:text-5xl
            text-black dark:text-white
            "
          >
            Get in Touch
          </h2>
        </m.div>

        {/* FORM CARD CONTAINER */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mx-auto max-w-150
            rounded-[32px]
            border border-neutral-100 dark:border-neutral-500
            bg-white dark:bg-neutral-800 p-8
            shadow-[0_28px_60px_rgba(0,0,0,.08)]
            md:p-12
          "
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 z-50">
            {/* ================= Field: Name ================= */}
            <div className="space-y-2 z-50">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-neutral-800 dark:text-neutral-200"
              >
                Name
              </label>
              <Input
                id="name"
                placeholder="Your full name"
                autoComplete="name"
                {...register("name")}
                className={`
                  h-13 rounded-xl bg-neutral-50 dark:bg-neutral-800  text-black dark:text-white
                  transition-all
                  ${
                    errors.name
                      ? "border-red-500 focus-visible:ring-red-500"
                      : "border-neutral-200 dark:border-neutral-500  focus-visible:border-violet-500"
                  }
                `}
              />
              {errors.name && (
                <p className="text-sm font-medium text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* ================= Field: Email ================= */}
            <div className="space-y-2 z-50">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-neutral-800 dark:text-neutral-200"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="your@email.com"
                {...register("email")}
                className={`
                  h-13 rounded-xl bg-neutral-50 text-black dark:text-white
                  transition-all
                  ${
                    errors.email
                      ? "border-red-500 focus-visible:ring-red-500"
                      : "border-neutral-200 dark:border-neutral-500 focus-visible:border-violet-500"
                  }
                `}
              />
              {errors.email && (
                <p className="text-sm font-medium text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* ================= Field: Message ================= */}
            <div className="space-y-2 z-50">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-neutral-800"
              >
                Message
              </label>
              <Textarea
                id="message"
                rows={6}
                placeholder="Tell me about your project..."
                {...register("message")}
                className={`
                  resize-none rounded-2xl bg-neutral-50 text-black dark:text-white
                  transition-all
                  ${
                    errors.message
                      ? "border-red-500 focus-visible:ring-red-500"
                      : "border-neutral-200 dark:border-neutral-500 focus-visible:border-violet-500"
                  }
                `}
              />
              {errors.message && (
                <p className="text-sm font-medium text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* ================= Submit Button ================= */}
            <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="
                  h-14
                  w-full
                  rounded-full
                  bg-linear-to-r
                  from-[#9747FF]
                  to-[#4F5DFF]
                  text-base
                  font-semibold
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:opacity-95
                  disabled:pointer-events-none
                  disabled:opacity-70
                  Z-50
                "
              >
                <Send className="mr-2 h-4 w-4 z-50" />
                Submit
              </Button>
            </m.div>
          </form>
        </m.div>
      </div>
    </section>
  );
}
