import { Star } from "lucide-react";

import Container from "@/components/ui/Container";

const testimonials = [
  {
    name: "Iqra Zahid",
    treatment: "Scaling & Polishing",
    review:
      "Dr. Mohsin listened carefully to my concerns and provided excellent treatment. The scaling and polishing procedure was comfortable, and the clinic maintained outstanding hygiene throughout. Highly recommended.",
  },
  {
    name: "Syed Matloob Hussain",
    treatment: "General Dental Care",
    review:
      "From the moment I walked in, the clinic impressed me with its modern facilities, cleanliness, and professional atmosphere. Dr. Mohsin is highly skilled, patient, and explains every procedure in detail.",
  },
  {
    name: "Neelofar Najm",
    treatment: "Dental Implants",
    review:
      "Had dental implants done at this clinic. Dr. Mohsin was professional, the procedure was comfortable with minimal pain, and the results exceeded my expectations. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white py-24 lg:py-32"
    >
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#B08D57]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#B08D57]">
            Patient Testimonials
          </span>

          <h2 className="mt-6 font-heading text-5xl text-[#1A1A1A]">
            Trusted By
            <span className="text-[#B08D57]"> Our Patients</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Real experiences shared by patients who trusted Dental Studio by
            Dr. Mohsin with their smiles.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#E8E1D6] bg-white px-6 py-3 shadow-md">
              <Star className="h-5 w-5 fill-[#B08D57] text-[#B08D57]" />

              <span className="font-semibold text-[#1A1A1A]">
                5.0 Google Rating
              </span>

              <span className="text-gray-500">
                Based on Real Patient Reviews
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="group rounded-[30px] border border-[#E8E1D6] bg-[#F9F6F1] p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#B08D57] hover:shadow-2xl"
            >
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={20}
                    className="fill-[#B08D57] text-[#B08D57]"
                  />
                ))}
              </div>

              <p className="leading-8 text-gray-600">
                "{item.review}"
              </p>

              <div className="mt-8 border-t border-[#E8E1D6] pt-6">
                <h4 className="text-xl font-semibold text-[#1A1A1A]">
                  {item.name}
                </h4>

                <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-[#B08D57]">
                  {item.treatment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}