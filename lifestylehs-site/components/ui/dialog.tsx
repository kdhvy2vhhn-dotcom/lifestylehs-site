import React from "react";

export function Dialog({ open, children }: { open: boolean; onOpenChange: (v: boolean) => void; children: React.ReactNode }) {
  return <>{open ? children : null}</>;
}

export function DialogContent({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className={`w-full bg-white shadow-xl ${className}`}>{children}</div>
      </div>
    </div>
  );
}

export function DialogHeader({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`${className}`} {...props} />;
}

export function DialogTitle({ className = "", ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={`font-semibold ${className}`} {...props} />;
}

export function DialogDescription({ className = "", ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={`text-sm text-neutral-600 ${className}`} {...props} />;
}
