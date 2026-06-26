"use client";

import { useState } from "react";
import { motion as m, AnimatePresence } from "motion/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import SubmitAnimation from "@/components/animation/SubmitAnimation";

type ContactForm = z.infer<typeof contactSchema>;

type AnimationState = "idle" | "loading" | "success" | "error";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter at least 2 characters."),

  email: z.string().trim().email("Please enter a valid email address."),

  message: z
    .string()
    .trim()
    .min(10, "Message must contain at least 10 characters."),
});

export default function Contact() {
  const [animationState, setAnimationState] = useState<AnimationState>("idle");

  const [showDialog, setShowDialog] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),

    mode: "onTouched",

    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactForm) => {
    setShowDialog(true);

    setAnimationState("loading");

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(data);

    setAnimationState("success");

    form.reset();

    setTimeout(() => {
      setShowDialog(false);

      setAnimationState("idle");
    }, 1800);
  };

  const onError = () => {
    setShowDialog(true);

    setAnimationState("error");

    setTimeout(() => {
      setShowDialog(false);

      setAnimationState("idle");
    }, 1800);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-28">
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
          <form
            noValidate
            onSubmit={form.handleSubmit(onSubmit, onError)}
            className="space-y-7"
          >
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
                {...form.register("name")}
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

              {form.formState.errors.name && (
                <p className="text-sm font-medium text-red-500">
                  {form.formState.errors.name.message}
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
                {...form.register("email")}
                className={`
                h-13 rounded-xl bg-neutral-50
                transition-all
                ${
                  form.formState.errors.email
                    ? "border-red-500 focus-visible:ring-red-500"
                    : "border-neutral-200 focus-visible:border-violet-500"
                }
              `}
              />

              {form.formState.errors.email && (
                <p className="text-sm font-medium text-red-500">
                  {form.formState.errors.email.message}
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
                {...form.register("message")}
                className={`
                resize-none rounded-2xl
                bg-neutral-50
                transition-all
                ${
                  form.formState.errors.message
                    ? "border-red-500 focus-visible:ring-red-500"
                    : "border-neutral-200 focus-visible:border-violet-500"
                }
              `}
              />

              {form.formState.errors.message && (
                <p className="text-sm font-medium text-red-500">
                  {form.formState.errors.message.message}
                </p>
              )}
            </div>

            <m.div
              whileHover={{
                scale: 1.01,
              }}
              whileTap={{
                scale: 0.99,
              }}
            >
              <Button
                type="submit"
                disabled={animationState === "loading"}
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
                {animationState === "loading" ? (
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
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Submit
                  </>
                )}
              </Button>
            </m.div>
          </form>
        </m.div>
        <AnimatePresence>
          {showDialog && (
            <m.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="
                fixed
                inset-0
                z-100
                flex
                items-center
                justify-center
                bg-black/40
                backdrop-blur-md
                "
            >
              <m.div
                initial={{
                  scale: 0.9,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 0.9,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  w-90
                  rounded-[32px]
                  bg-white
                  p-8
                  shadow-2xl
                  "
              >
                <SubmitAnimation state={animationState} />

                <p
                  className="
                    mt-6
                    text-center
                    text-xl
                    font-bold
                    "
                >
                  {animationState === "loading" && "Sending..."}

                  {animationState === "success" && "Message Sent"}

                  {animationState === "error" && "Submission Failed"}
                </p>

                <p
                  className="
                    mt-2
                    text-center
                    text-sm
                    text-neutral-500
                    "
                >
                  {animationState === "loading" &&
                    "Please wait while your message is being delivered."}

                  {animationState === "success" &&
                    "Thank you for contacting me. I will get back to you soon."}

                  {animationState === "error" &&
                    "Please review the highlighted fields and try again."}
                </p>
              </m.div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
