import {
  Award,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  ScanLine,
} from "lucide-react";

import Container from "@/components/ui/Container";

const features = [
  {
    icon: Award,
    title: "Experienced Dentist",
    description:
      "Professional dental care focused on precision, comfort, and long-lasting oral health.",
  },
  {
    icon: ScanLine,
    title: "Modern Technology",
    description:
      "Advanced equipment and techniques ensure accurate diagnosis and comfortable treatment.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-Centered Care",
    description:
      "Every treatment plan is personalized to suit your unique dental needs and smile goals.",
  },
  {
    icon: Sparkles,
    title: "Comfortable Environment",
    description:
      "A clean, welcoming clinic designed to make every visit relaxing and stress-free.",
  },
  {
    icon: Stethoscope,
    title: "Comprehensive Treatments",
    description:
      "From preventive care to cosmetic and restorative dentistry, everything under one roof.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Quality",
    description:
      "High-quality materials and modern procedures that deliver reliable, lasting results.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="bg-white py-24 lg:py-32"
    >
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#B08D57]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#B08D57]">
            Why Choose Us
          </span>

          <h2 className="mt-6 font-heading text-5xl text-[#1A1A1A]">
            Premium Dental Care
            <span className="text-[#B08D57]"> You Can Trust</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We combine expertise, advanced technology, and compassionate care
            to provide an exceptional dental experience for every patient.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-[30px] border border-[#E8E1D6] bg-[#F9F6F1] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#B08D57] hover:shadow-2xl"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-[#B08D57]/10 p-4 transition duration-300 group-hover:bg-[#B08D57]">
                <feature.icon
                  size={34}
                  className="text-[#B08D57] transition duration-300 group-hover:text-white"
                />
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-[#1A1A1A]">
                {feature.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}