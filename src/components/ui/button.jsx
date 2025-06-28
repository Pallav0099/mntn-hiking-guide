import React from "react";
import { cn } from "../../lib/cn";

export default function Button({ variant = "text", icon, children, className, ...props }) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md py-2 text-sm font-bold transition-colors focus:outline-none";

  const variantClasses = {
    text: "bg-transparent text-white hover:bg-blue-700",
    textWithIcon: "bg-transparent text-primary gap-1 hover:text-black/40",
    icon: "text-primary p-2 hover:text-black/40",
  };

  return (
    <button
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {icon && (variant === "icon" || variant === "textWithIcon") && (
        <span className={variant === "textWithIcon" ? "mr-1" : ""}>{icon}</span>
      )}
      {(variant === "text" || variant === "textWithIcon") && (
        <span className={variant === "textWithIcon" ? "hidden md:inline-flex" : " "}>{children}</span>
      )}
    </button>
  );
}
