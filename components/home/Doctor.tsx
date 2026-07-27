import Image from "next/image";
import {
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Doctor() {
  return (
    <section
      id="doctor"
      className="bg-white py-24 lg:py-32"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Doctor Image */}

          <div className="relative">

            <div className="absolute -left-6 -top-6 h-full w-full rounded-[40px] bg-[#B08D57]/10"></div>

            <div className="relative overflow-hidden rounded-[40px] shadow-2xl">

              <Image
                src="/images/doctor.png"
                alt="Dr. Syed Mohsin Raza"
                width={700}
                height={900}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

            {/* Qualification Card */}

            <div className="absolute -bottom-6 right-6 rounded-3xl bg-white px-8 py-6 shadow-2xl">

              <p className="text-sm uppercase tracking-[0.25em] text-[#B08D57]">
                Qualification
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#1A1A1A]">
                BDS
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                FCPS Trained Restorative Dentist
              </p>

            </div>

          </div>

          {/* Content */}

          <div>

            <span className="inline-flex rounded-full bg-[#B08D57]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#B08D57]">
              Meet Your Dentist
            </span>

            <h2 className="mt-6 font-heading text-5xl leading-tight text-[#1A1A1A]">
              Dr. Syed
              <br />
              <span className="text-[#B08D57]">
                Mohsin Raza
              </span>
            </h2>

            <p className="mt-3 text-lg font-medium text-gray-700">
              BDS • FCPS Trained Restorative Dentist • Endodontist
            </p>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Dr. Syed Mohsin Raza is committed to delivering
              exceptional dental care through precision,
              compassion, and modern clinical techniques.
              Every treatment is carefully planned to restore
              oral health, improve confidence, and create
              healthy smiles that last for years.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex gap-4">

                <GraduationCap className="mt-1 text-[#B08D57]" />

                <div>

                  <h4 className="font-semibold text-[#1A1A1A]">
                    Restorative Dentistry
                  </h4>

                  <p className="text-gray-600">
                    Personalized restorative treatments focused on
                    long-term oral health and function.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <ShieldCheck className="mt-1 text-[#B08D57]" />

                <div>

                  <h4 className="font-semibold text-[#1A1A1A]">
                    Endodontic Care
                  </h4>

                  <p className="text-gray-600">
                    Advanced root canal treatments performed with
                    precision and patient comfort in mind.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <HeartHandshake className="mt-1 text-[#B08D57]" />

                <div>

                  <h4 className="font-semibold text-[#1A1A1A]">
                    Patient-First Approach
                  </h4>

                  <p className="text-gray-600">
                    Every patient receives honest guidance,
                    individualized care, and a comfortable
                    treatment experience.
                  </p>

                </div>

              </div>

            </div>

            <div className="mt-12">

             <Button href="#appointment">
  Book Consultation
</Button>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}