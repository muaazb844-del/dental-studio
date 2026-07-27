import Link from "next/link";
import Container from "@/components/ui/Container";

import { FiPhone, FiMapPin } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Doctor", href: "#doctor" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "FAQ", href: "#faq" },
  { name: "Appointment", href: "#appointment" },
];

const services = [
  "Root Canal Therapy",
  "Dental Implants",
  "Dental Veneers",
  "Dental Crowns",
  "Dental Fillings",
  "Dentures",
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <Container>
        <div className="grid gap-14 py-20 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              Dental <span className="text-[#B08D57]">Studio</span>
            </h2>

            <p className="mt-2 text-[#B08D57]">
              by Dr. Mohsin
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              Providing premium dental care with modern technology,
              personalized treatment, and compassionate care for every smile.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="rounded-full border border-white/10 p-3 transition hover:border-[#B08D57] hover:text-[#B08D57]"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border border-white/10 p-3 transition hover:border-[#B08D57] hover:text-[#B08D57]"
              >
                <FaFacebookF size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-[#B08D57]">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-[#B08D57]">
              Services
            </h3>

            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-gray-400"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-[#B08D57]">
              Contact
            </h3>

            <div className="mt-6 space-y-6">
              <div className="flex gap-4">
                <FiPhone className="mt-1 text-[#B08D57]" />

                <div>
                  <p className="font-medium">
                    Phone
                  </p>

                  <a
                    href="tel:+923001234567"
                    className="text-gray-400 hover:text-white"
                  >
                    +92 XXX XXXXXXX
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <FaWhatsapp className="mt-1 text-[#25D366]" />

                <div>
                  <p className="font-medium">
                    WhatsApp
                  </p>

                  <a
                    href="https://wa.me/923001234567"
                    target="_blank"
                    className="text-gray-400 hover:text-white"
                  >
                    Chat with us
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <FiMapPin className="mt-1 text-[#B08D57]" />

                <div className="leading-7 text-gray-400">
                  Dental Studio by Dr. Mohsin
                  <br />
                  4th Floor, MB 51
                  <br />
                  Commercial Market
                  <br />
                  Sector B DHA Phase 6
                  <br />
                  Lahore 54000
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-500 lg:flex-row">
            <p>
              © {new Date().getFullYear()} Dental Studio by Dr. Mohsin.
              All Rights Reserved.
            </p>

            <p>
              Designed & Developed by{" "}
              <span className="font-semibold text-[#B08D57]">
                CodeBridge Technologies
              </span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}