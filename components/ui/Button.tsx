import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-[#B08D57] text-white hover:bg-[#9A7849]"
      : "border border-[#B08D57] text-[#B08D57] hover:bg-[#B08D57] hover:text-white";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-7 py-3 font-medium transition-all duration-300 ${styles}`}
    >
      {children}
    </Link>
  );
}