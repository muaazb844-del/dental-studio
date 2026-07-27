"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      if (window.scrollY > 30) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-[#E7D9C1]/60 bg-white/80 py-3 shadow-lg backdrop-blur-2xl"
            : "bg-transparent py-5"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">

              <Image
                src="/image/logo.png"
                alt="Dental Studio"
                width={60}
                height={60}
                priority
                className="h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />

              <div className="hidden md:block">
                <h2 className="text-2xl font-semibold tracking-wide text-[#B08D57]">
                  Dental Studio
                </h2>

                <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
                  By Dr. Mohsin
                </p>
              </div>

            </Link>

            {/* Desktop Menu */}

            <div className="hidden lg:flex items-center gap-8">

              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative text-[15px] font-medium text-[#1A1A1A] transition hover:text-[#B08D57]"
                >
                  {item.name}

                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#B08D57] transition-all duration-300 group-hover:w-full"></span>

                </Link>
              ))}

            </div>

            {/* Desktop Button */}

            <div className="hidden lg:block">
              <Button href="#contact">
                Book Appointment
              </Button>
            </div>

            {/* Mobile Toggle */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-[#B08D57]"
            >
              {menuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

          </div>
        </Container>
      </nav>

      {/* Mobile Menu */}

      <div
        className={`fixed left-0 top-[92px] z-40 w-full overflow-hidden transition-all duration-500 lg:hidden ${
          menuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <Container>

          <div className="rounded-3xl border border-[#E7D9C1] bg-white p-6 shadow-2xl">

            <div className="flex flex-col gap-5">

              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[#F2ECE2] pb-3 text-base font-medium text-[#1A1A1A] transition hover:text-[#B08D57]"
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-3">

                <Button href="#contact">
                  Book Appointment
                </Button>

              </div>

            </div>

          </div>

        </Container>
      </div>
    </>
  );
}