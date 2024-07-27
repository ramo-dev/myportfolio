
"use client";

import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";
import { FlipWords } from "./WordsVanish";
import { words } from "./HeroShowcase";

const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const radialGradient = useMotionTemplate`
    radial-gradient(
      200px circle at ${mouseX}px ${mouseY}px,
      black 0%,
      transparent 100%
    )
  `;

  return (
    <div
      className={cn(
        "relative h-screen flex items-center bg-white dark:bg-black justify-center w-full group overflow-x-hidden",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 pointer-events-none" />
      <motion.div
        className="pointer-events-none bg-dot-thick-blue-500 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          WebkitMaskImage: radialGradient,
          maskImage: radialGradient,
        }}
      />
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 100%" }}
      animate={{ backgroundSize: "100% 100%" }}
      transition={{ duration: 2, ease: "linear", delay: 0.5 }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};



const MyName: string = "Annuar"

export default function Hero() {
  return (
    <HeroHighlight containerClassName="R" className="text-center">
      <h1 className="sm:text-4xl text-xl font-bold relative z-20 bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-gray-100 dark:to-gray-400 bg-gradient-to-b from-neutral-900 to-neutral-700">
        Hello there
      </h1>
      <h1 className="md:my-4 my-1 md:text-8xl text-6xl font-bold relative z-20 bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-gray-100 dark:to-gray-400 bg-gradient-to-b from-neutral-900 to-neutral-700">
        It's{" "}{MyName}
      </h1>
      <div className="min-w-[400px] max-w-[500px] text-2xl font-bold text-gray-900 dark:text-white md:my-3">
        <FlipWords words={words} className="md:text-2xl text-lg md:my-4 my-2" />
      </div>
    </HeroHighlight>
  );
}

