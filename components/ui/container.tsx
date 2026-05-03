import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof React.JSX.IntrinsicElements;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Container({
  className,
  as: Tag = "div",
  size = "lg",
  ...props
}: ContainerProps) {
  const sizeClass = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-[88rem]",
  }[size];

  // @ts-expect-error - dynamic tag
  return <Tag className={cn("mx-auto w-full px-6 sm:px-8 lg:px-10", sizeClass, className)} {...props} />;
}
