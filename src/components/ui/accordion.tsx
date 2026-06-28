"use client";

import * as React from "react";
import { Accordion as AccordionPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";
// import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import Image from "next/image";
import Plus from "../../../public/icons/icon-qna-plus.svg";
import Minus from "../../../public/icons/icon-qna-minus.svg";

function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col", className)}
      {...props}
    />
  );
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "border border-gray-100 border-l-14 border-l-[#9747FF] rounded-xl bg-gray-50 mb-4 overflow-hidden shadow-xs transition-all duration-300 data-[state=open]:border-[#9747FF] data-[state=open]:shadow-md",
        className,
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger relative flex flex-1 items-center justify-between p-6 text-left text-lg md:text-xl font-bold text-gray-900 outline-none transition-colors duration-300 data-[state=open]:text-[#9747FF] disabled:pointer-events-none disabled:opacity-50",
          // group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring disabled:pointer-events-none disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground
          className,
        )}
        {...props}
      >
        <span className="pr-4">{children}</span>
        {/* <ChevronDownIcon data-slot="accordion-trigger-icon" className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" /> */}
        {/* <ChevronUpIcon data-slot="accordion-trigger-icon" className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline" /> */}
        <Image
          src={Plus}
          alt="Plus sign"
          width={24}
          height={24}
          data-slot="accordion-trigger-icon"
          className="dark:invert pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
        />
        <Image
          src={Minus}
          alt="Minus sign"
          width={24}
          height={24}
          data-slot="accordion-trigger-icon"
          className="dark:invert pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden text-sm md:text-base text-gray-600 transition-all duration-300 ease-in-out data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
      {...props}
    >
      <div
        className={cn(
          "px-6 pb-6 pt-0 leading-relaxed font-medium text-gray-600",
          // h-(--radix-accordion-content-height) pt-0 pb-2.5 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
