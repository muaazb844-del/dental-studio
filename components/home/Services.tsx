import Image from "next/image";

import Container from "@/components/ui/Container";

const services = [
  {
    icon: "/icons/root-canal-treatment.png",
    title: "Root Canal Therapy",
    description:
      "Advanced endodontic treatment to save infected teeth while relieving pain and restoring function.",
  },
  {
    icon: "/icons/dental-veneer.png",
    title: "Veneers",
    description:
      "Transform your smile with natural-looking porcelain veneers designed for beauty and confidence.",
  },
  {
    icon: "/icons/crown.png",
    title: "Dental Crowns",
    description:
      "Strong and aesthetic crowns that restore damaged teeth with durability and precision.",
  },
  {
    icon: "/icons/dental-fillings.png",
    title: "Dental Fillings",
    description:
      "Restore cavities using tooth-colored fillings for a seamless and healthy smile.",
  },
  {
    icon: "/icons/bridge.png",
    title: "Bridges",
    description:
      "Replace missing teeth with custom-made bridges for improved appearance and function.",
  },
  {
    icon: "/icons/dental-implant.png",
    title: "Dental Implants",
    description:
      "Permanent tooth replacement solutions designed to look, feel, and function naturally.",
  },
  {
    icon: "/icons/smile-makeover.png",
    title: "Orthodontic Procedures",
    description:
      "Correct alignment issues to achieve a healthier bite and a beautifully aligned smile.",
  },
  {
    icon: "/icons/teeth.png",
    title: "Dentures",
    description:
      "Comfortable removable partial and complete dentures crafted for everyday confidence.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#F9F6F1] py-24 lg:py-32"
    >
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#B08D57]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#B08D57]">
            Our Services
          </span>

          <h2 className="mt-6 font-heading text-5xl text-[#1A1A1A]">
            Complete Dental Care
            <span className="text-[#B08D57]"> Under One Roof</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide modern dental treatments using advanced techniques,
            premium materials, and personalized care to help you achieve a
            healthier and more confident smile.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-[30px] border border-[#E8E1D6] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#B08D57] hover:shadow-2xl"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-[#B08D57]/10 p-4 transition duration-300 group-hover:bg-[#B08D57]">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={42}
                  height={42}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-[#1A1A1A]">
                {service.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}