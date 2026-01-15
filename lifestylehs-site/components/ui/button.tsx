import React from "react";

type Variant = "default" | "outline" | "ghost";
type Size = "default" | "sm" | "icon";

const base = "inline-flex items-center justify-center gap-2 font-medium transition focus:outline-none focus:ring-2 focus:ring-black/20 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  default: "bg-black text-white hover:bg-black/90",
  outline: "border border-black/20 bg-white hover:bg-black/5",
  ghost: "bg-transparent hover:bg-black/5",
};

const sizes: Record<Size, string> = {
  default: "h-10 px-4 rounded-2xl text-sm",
  sm: "h-9 px-3 rounded-2xl text-sm",
  icon: "h-10 w-10 rounded-2xl",
};

export function Button({
  asChild,
  variant = "default",
  size = "default",
  className = "",
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: Variant;
  size?: Size;
}) {
  if (asChild && React.isValidElement(children)) {
    // pass classes to child (anchor)
    const child: any = children;
    return React.cloneElement(child, {
      className: `${base} ${variants[variant]} ${sizes[size]} ${child.props.className || ""} ${className}`,
    });
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
