import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F9F6F1] py-24 lg:py-32"
    >
      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left Content */}

          <div>

            <span className="inline-flex rounded-full border border-[#B08D57]/20 bg-[#B08D57]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#B08D57]">
              About Dental Studio
            </span>

            <h2 className="mt-6 font-heading text-5xl leading-tight text-[#1A1A1A] lg:text-6xl">
              A Premium Dental
              <br />

              Experience
              <span className="text-[#B08D57]">
                {" "}Designed
              </span>

              <br />

              Around You.
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Dental Studio by Dr. Mohsin was created with one vision —
              to provide modern dentistry in a calm, elegant and welcoming
              environment. Every detail, from our advanced technology to
              our personalized care, is designed to make your experience
              comfortable and truly exceptional.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We believe that every smile deserves precision, confidence,
              and care delivered with excellence.
            </p>

            <div className="mt-10">
              <Button href="#doctor">
                Discover Our Team

                <ArrowRight
                  size={18}
                  className="ml-2"
                />
              </Button>
            </div>

          </div>

          {/* Right Image */}

          <div className="relative">

            {/* Gold Background */}

            <div className="absolute -right-6 -bottom-6 h-full w-full rounded-[40px] bg-[#B08D57]/10"></div>

            <div className="relative overflow-hidden rounded-[40px] shadow-2xl">

              <Image
                src="/image/about.jpg"
                alt="Dental Studio"
                width={900}
                height={1100}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}