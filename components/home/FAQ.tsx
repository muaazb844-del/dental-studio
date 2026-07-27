"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "@/components/ui/Container";

const faqs = [
  {
    question: "Is Root Canal Treatment painful?",
    answer:
      "Modern anesthesia and advanced techniques make Root Canal Treatment virtually pain-free. Our priority is to ensure every patient feels comfortable throughout the procedure.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can book an appointment through our online appointment form, WhatsApp, or by calling our clinic. Once confirmed, your preferred time slot will be reserved.",
  },
  {
    question: "Do you offer dental implants?",
    answer:
      "Yes. We provide high-quality dental implant solutions designed to restore both the appearance and function of missing teeth with long-lasting results.",
  },
  {
    question: "How often should I visit the dentist?",
    answer:
      "We recommend visiting every six months for a routine dental examination and professional cleaning to maintain excellent oral health.",
  },
  {
    question: "Do you provide cosmetic dentistry services?",
    answer:
      "Absolutely. We offer veneers, smile makeovers, teeth whitening, and other cosmetic dental treatments tailored to enhance your smile.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, bank transfers, and popular digital payment methods. Our team will guide you through the available payment options during your visit.",
  },
  {
    question: "Can I reschedule my appointment?",
    answer:
      "Yes. If you need to reschedule, simply contact us via WhatsApp or phone as early as possible, and we'll arrange a new appointment at your convenience.",
  },
  {
    question: "Do you provide emergency dental care?",
    answer:
      "Yes. If you're experiencing severe tooth pain, swelling, trauma, or any dental emergency, contact us immediately so we can assist you as soon as possible.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-[#F9F6F1] py-24 lg:py-32"
    >
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#B08D57]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#B08D57]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 font-heading text-5xl text-[#1A1A1A]">
            Everything You Need
            <span className="text-[#B08D57]"> To Know</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Find answers to the most common questions about our treatments,
            appointments, and patient care.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-[#E8E1D6] bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >
                <h3 className="pr-6 text-lg font-semibold text-[#1A1A1A]">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`h-6 w-6 text-[#B08D57] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-[#E8E1D6] px-8 py-6">
                    <p className="leading-8 text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}