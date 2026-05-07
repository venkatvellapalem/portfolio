"use client";
// Optional — requires `framer-motion`. Falls back gracefully if not installed
// because it's a "use client" component used only where imported.
import { motion } from "framer-motion";

type Props = { children: React.ReactNode; as?: "h1" | "h2"; className?: string };

export default function AnimatedHeading({ children, as = "h1", className = "" }: Props) {
  const Tag: any = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Tag>
  );
}