"use client";

import { useState } from "react";
import { motion as m, AnimatePresence } from "motion/react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import ContactDialog from "@/components/contact/ContactDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { AnimationState } from "@/components/animation/envelope/types";

import SubmitAnimation from "@/components/animation/SubmitAnimation";
import { resolve } from "path";

type ContactForm = z.infer<typeof contactSchema>;

type AnimationState = "idle" | "loading" | "success" | "error";

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

export default function Contact() {
  // const [showDialog, setShowDialog] = useState(false);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [animationState, setAnimationState] = useState<AnimationState>("idle");

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),

    mode: "onTouched",

    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactForm) => {
    setDialogOpen(true);

    setAnimationState("loading");

    await new Promise((resolve) => setTimeout(resolve, 1800));

    const success = Math.random() > 0.25;

    if (success) {
      setAnimationState("success");

      reset();
    } else {
      setAnimationState("error");
    }

    await new Promise((resolve) => setTimeout(resolve, 1800));

    setDialogOpen(false);

    setAnimationState("idle");

    console.log(data);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-28">
      <ContactDialog open={dialogOpen} state={animationState} />

      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#D1D5DB 1.4px,transparent 1.4px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="custom-container relative z-10">
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
            bg-white px-5 py-2
            text-xs
            font-semibold
            tracking-[0.2em]
            text-neutral-500
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
          
          "
          >
            Get in Touch
          </h2>
        </m.div>
        {/* CARD */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mx-auto max-w-170
            rounded-[32px]
            border border-neutral-100
            bg-white p-8
            shadow-[0_28px_60px_rgba(0,0,0,.08)]
            md:p-12
          "
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* ================= Name ================= */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-neutral-800"
              >
                Name
              </label>

              <Input
                id="name"
                placeholder="Your full name"
                autoComplete="name"
                {...register("name")}
                className={`
                h-13 rounded-xl bg-neutral-50
                transition-all
                ${
                  form.formState.errors.name
                    ? "border-red-500 focus-visible:ring-red-500"
                    : "border-neutral-200 focus-visible:border-violet-500"
                }
              `}
              />

              {errors.name && (
                <p className="text-sm font-medium text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>
            {/* ================= Email ================= */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-neutral-800"
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
                h-13 rounded-xl bg-neutral-50
                transition-all
                ${
                  errors.email
                    ? "border-red-500 focus-visible:ring-red-500"
                    : "border-neutral-200 focus-visible:border-violet-500"
                }
              `}
              />

              {errors.email && (
                <p className="text-sm font-medium text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
            {/* ================= Message ================= */}
            <div className="space-y-2">
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
                resize-none rounded-2xl
                bg-neutral-50
                transition-all
                ${
                  errors.message
                    ? "border-red-500 focus-visible:ring-red-500"
                    : "border-neutral-200 focus-visible:border-violet-500"
                }
              `}
              />

              {errors.message && (
                <p className="text-sm font-medium text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            <m.div
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
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
                "
              >
                {/* {animationState === "loading" ? ( */}
                <>
                  <span
                    className="
                          h-5
                          w-5
                          animate-spin
                          rounded-full
                          border-2
                          border-white
                          border-t-transparent
                        "
                  />
                  Sending...
                  {/* </> */}
                  {/* ) : ( */}
                  {/* <> */}
                  <Send className="mr-2 h-4 w-4" />
                  Submit
                </>
                {/* )} */}
              </Button>
            </m.div>
          </form>
        </m.div>

        {/* <ContactDialog open={showDialog} state={animationState} /> */}
      </div>
    </section>
  );
}
