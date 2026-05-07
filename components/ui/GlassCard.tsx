import { HTMLAttributes } from "react";

export default function GlassCard({
  className = "",
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-2xl bg-surface/70 p-6 backdrop-blur-md transition-colors duration-300 hover:bg-surface ${className}`}
      style={{ boxShadow: "inset 0 0 0 1px var(--hairline)" }}
      {...rest}
    >
      {children}
    </div>
  );
}