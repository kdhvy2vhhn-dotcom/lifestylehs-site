import React from "react";

export function Badge({ className = "", ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={`inline-flex items-center rounded-2xl border border-black/10 bg-black/5 px-2.5 py-0.5 text-xs text-black ${className}`}
      {...props}
    />
  );
}
