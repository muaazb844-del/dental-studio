import { ArrowRight, Calendar } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      className="relative min-h-[100svh] overflow-hidden"
      style={{
  backgroundImage: "url('/image/hero-bg.jpg')",
  backgroundPosition: "right center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}}
    >
      {/* Premium Cinematic Overlay */}
<div
  className="absolute inset-0"
  style={{
    background:
      "linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.72) 38%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.12) 100%)",
  }}
></div>

{/* Warm Luxury Glow */}
<div className="absolute inset-0 bg-[#B08D57]/10 mix-blend-soft-light"></div>

<Container className="relative z-10 flex min-h-[100svh] items-center pt-24 lg:pt-12">
  <div className="max-w-2xl">

          

          {/* Heading */}
<h1 className="font-heading text-6xl font-semibold leading-[0.95] tracking-[-0.03em] text-white sm:text-7xl lg:text-[88px]">
  Crafting
  <br />

  <span className="bg-gradient-to-r from-[#E8C98D] via-[#C89B52] to-[#9C6B2F] bg-clip-text text-transparent">
    Confident Smiles
  </span>
</h1>

          {/* Paragraph */}

          <p className="mt-8 max-w-xl text-xl leading-8 text-gray-200">
  At Dental Studio by Dr. Mohsin, we combine advanced technology,
  artistic precision and compassionate care to create healthy,
  confident smiles that last a lifetime.
</p>

         {/* Buttons */}

<div className="mt-12 flex flex-col gap-4 sm:flex-row">

  <Button href="#appointment">
    <Calendar size={18} />
    <span className="ml-2">
      Book Appointment
    </span>
  </Button>

  <a
    href="#services"
    className="inline-flex items-center justify-center rounded-xl border border-white px-7 py-3 font-medium text-white transition-all duration-300 hover:bg-white hover:text-black"
  >
    Explore Services

    <ArrowRight
      size={18}
      className="ml-2"
    />
  </a>

</div>

          {/* Stats */}

          <div className="mt-16 grid max-w-xl grid-cols-3 gap-8">

            <div>

              <h2 className="text-4xl font-bold text-[#B08D57]">
                7+
              </h2>

              <p className="mt-2 text-sm uppercase tracking-widest text-white/80">
                Years
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-[#B08D57]">
                500+
              </h2>

              <p className="mt-2 text-sm uppercase tracking-widest text-white/80">
                Happy Smiles
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-[#B08D57]">
                Modern
              </h2>

              <p className="mt-2 text-sm uppercase tracking-widest text-white/80">
                Technology
              </p>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}