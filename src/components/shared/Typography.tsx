import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "variable",
});

type HeadingProps = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
  title?: string;
  "aria-label"?: string;
};

export const Heading: React.FC<HeadingProps> = ({
  variant = "h1",
  children,
  className = "",
  title,
  "aria-label": ariaLabel,
}) => {
  const baseClasses: Record<"h1" | "h2" | "h3" | "h4" | "h5" | "h6", string> = {
    h1: "text-[1.5rem] leading-6 md:text-[2rem] md:leading-8",
    h2: "text-[1.25rem] leading-6 md:text-[1.75rem] md:leading-8",
    h3: "text-[1rem] leading-6 md:text-[1.25rem] md:leading-8",
    h4: "text-[0.875rem] leading-6 md:text-[1rem] md:leading-8",
    h5: "text-[0.75rem] leading-6 md:text-[0.875rem] md:leading-8",
    h6: "text-[0.625rem] leading-6 md:text-[0.75rem] md:leading-8",
  };

  const Component = variant;

  return (
    <Component
      className={`${inter.variable} ${baseClasses[variant]} ${className} antialiased`}
      style={{ fontFamily: "var(--font-inter)" }}
      title={title}
      aria-label={ariaLabel}
    >
      {children}
    </Component>
  );
};

type BodyProps = {
  variant: "b_one" | "b_two" | "b_three" | "b_small" | "b_xs";
  weight?: "normal" | "medium" | "semibold" | "bold";
  children: React.ReactNode;
  className?: string;
  title?: string;
  "aria-label"?: string;
};

export const BodyText: React.FC<BodyProps> = ({
  variant,
  weight = "normal",
  children,
  className = "",
  title,
  "aria-label": ariaLabel,
}) => {
  const baseClasses = {
    b_one: "text-lg leading-6 md:text-xl md:leading-8",
    b_two: "text-base leading-6 md:text-lg md:leading-8",
    b_three: "text-sm leading-6 md:text-base md:leading-8",
    b_small: "text-xs leading-6 md:text-sm md:leading-8",
    b_xs: "text-[0.625rem] leading-6 md:text-[0.75rem] md:leading-8",
  };

  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  return (
    <p
      className={`${baseClasses[variant]} ${inter.variable} ${weightClasses[weight]} ${className} antialiased`}
      title={title}
      aria-label={ariaLabel}
    >
      {children}
    </p>
  );
};
