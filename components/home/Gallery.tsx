import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const transformations = [
  {
    treatment: "Smile Makeover",
    before: "/images/before-after/case-1-before.jpg",
    after: "/images/before-after/case-1-after.jpg",
  },
  {
    treatment: "Dental Veneers",
    before: "/images/before-after/case-2-before.jpg",
    after: "/images/before-after/case-2-after.jpg",
  },
  {
    treatment: "Root Canal + Crown",
    before: "/images/before-after/case-3-before.jpg",
    after: "/images/before-after/case-3-after.jpg",
  },
  {
    treatment: "Dental Implants",
    before: "/images/before-after/case-4-before.jpg",
    after: "/images/before-after/case-4-after.jpg",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-[#F9F6F1] py-24 lg:py-32"
    >
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#B08D57]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#B08D57]">
            Smile Transformations
          </span>

          <h2 className="mt-6 font-heading text-5xl text-[#1A1A1A]">
            Before
            <span className="text-[#B08D57]"> & </span>
            After
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover real smile transformations achieved through personalized
            dental care, advanced techniques, and attention to every detail.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {transformations.map((item) => (
            <div
              key={item.treatment}
              className="overflow-hidden rounded-[30px] border border-[#E8E1D6] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="border-b border-[#E8E1D6] px-8 py-6">
                <span className="rounded-full bg-[#B08D57]/10 px-4 py-2 text-sm font-semibold text-[#B08D57]">
                  {item.treatment}
                </span>
              </div>

              <div className="grid grid-cols-2">
                {/* Before */}
                <div className="border-r border-[#E8E1D6] p-5">
                  <p className="mb-3 text-center text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
                    Before
                  </p>

                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src={item.before}
                      alt="Before Treatment"
                      width={600}
                      height={600}
                      className="aspect-square w-full object-cover transition duration-500 hover:scale-110"
                    />
                  </div>
                </div>

                {/* After */}
                <div className="p-5">
                  <p className="mb-3 text-center text-sm font-bold uppercase tracking-[0.2em] text-[#B08D57]">
                    After
                  </p>

                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src={item.after}
                      alt="After Treatment"
                      width={600}
                      height={600}
                      className="aspect-square w-full object-cover transition duration-500 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button href="#contact">
            Book Your Consultation
          </Button>
        </div>
      </Container>
    </section>
  );
}