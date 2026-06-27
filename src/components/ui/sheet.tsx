"use client";

import * as React from "react";
import { Dialog as SheetPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/30 backdrop-blur-xs duration-200 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className,
      )}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left";
  showCloseButton?: boolean;
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "fixed z-50 flex flex-col gap-4 bg-white dark:bg-neutral-950 p-6 shadow-2xl transition duration-300 ease-in-out text-neutral-900 dark:text-neutral-50",

          // TOP & BOTTOM SIDES
          "data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t border-neutral-200 dark:border-neutral-800",
          "data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b border-neutral-200 dark:border-neutral-800",

          // LEFT SIDE
          "data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 sm:data-[side=left]:max-w-sm data-[side=left]:border-r border-neutral-200 dark:border-neutral-800",

          // FIX UTAMA: SISI KANAN (RIGHT SIDE - UNTUK LAYAR MOBILE DAN 768px TABLET)
          // Default mobile menggunakan w-[80vw] (80% lebar layar).
          // Begitu masuk resolusi tablet (md: ke atas / >= 768px), lebarnya diatur mutlak menjadi 400px (md:w-[400px]) agar proporsional dan tidak tertahan menciut.
          "data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-[80vw] md:data-[side=right]:w-[400px] data-[side=right]:border-l border-neutral-200 dark:border-neutral-800",

          // ANIMASI BUKA (OPEN ANIMATIONS)
          "data-open:animate-in data-open:fade-in-0",
          "data-[side=bottom]:data-open:slide-in-from-bottom-full",
          "data-[side=left]:data-open:slide-in-from-left-full",
          "data-[side=right]:data-open:slide-in-from-right-full",
          "data-[side=top]:data-open:slide-in-from-top-full",

          // ANIMASI TUTUP (CLOSE ANIMATIONS)
          "data-closed:animate-out data-closed:fade-out-0",
          "data-[side=bottom]:data-closed:slide-out-to-bottom-full",
          "data-[side=left]:data-closed:slide-out-to-left-full",
          "data-[side=right]:data-closed:slide-out-to-right-full",
          "data-[side=top]:data-closed:slide-out-to-top-full",

          className,
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close data-slot="sheet-close" asChild>
            <Button
              variant="ghost"
              className="absolute top-4 right-4 rounded-full h-10 w-10 text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-900"
              size="icon"
            >
              <XIcon className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1 text-center sm:text-left", className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn(
        "font-heading text-lg font-bold text-neutral-900 dark:text-neutral-50",
        className,
      )}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn(
        "text-sm text-neutral-500 dark:text-neutral-400",
        className,
      )}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
