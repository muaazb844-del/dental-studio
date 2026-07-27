import Link from "next/link";
import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <section className="bg-white pb-20">
      <Container>
        <div className="overflow-hidden rounded-[36px] bg-gradient-to-r from-[#0A2540] via-[#133A5E] to-[#0A2540] px-8 py-16 text-center shadow-2xl lg:px-20">
          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#E4C590]">
            Your Smile Starts Here
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
            Ready to Transform
            <br />
            Your Smile?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Experience premium dental care with modern technology,
            personalized treatment, and a team dedicated to your comfort.
            Book your appointment today.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="#appointment"
              className="rounded-xl bg-[#B08D57] px-8 py-4 text-lg font-semibold text-white transition hover:scale-105 hover:bg-[#987445]"
            >
              Book Appointment
            </Link>

            <Link
              href="https://wa.me/92XXXXXXXXXX"
              target="_blank"
              className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#0A2540]"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}