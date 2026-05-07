import Link from "next/link";
import { ComponentProps } from "react";

type Props = {
  href?: string;
  children: React.ReactNode;
} & Omit<ComponentProps<"button">, "ref">;

export default function GlowButton({ href, children, className = "", ...rest }: Props) {
  const cls =
    "group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-all duration-300 hover:shadow-glow " +
    className;

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      <span aria-hidden className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">→</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {inner}
    </button>
  );
}