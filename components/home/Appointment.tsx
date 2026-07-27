"use client";

import { bookAppointment } from "@/app/actions/bookappointment";
import {
  Calendar,
  Clock3,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

import Container from "@/components/ui/Container";

const timeSlots = [
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
];

const services = [
  "General Consultation",
  "Root Canal Therapy",
  "Dental Implants",
  "Dental Veneers",
  "Dental Crowns",
  "Dental Fillings",
  "Orthodontic Treatment",
  "Dentures",
];

export default function Appointment() {
  return (
    <section
      id="appointment"
      className="bg-white py-24 lg:py-32"
    >
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#B08D57]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#B08D57]">
            Book Appointment
          </span>

          <h2 className="mt-6 font-heading text-5xl text-[#1A1A1A]">
            Schedule Your
            <span className="text-[#B08D57]">
              {" "}
              Dental Visit
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Book your appointment in just a few steps.
            Once submitted, our team will review your
            request and confirm it via WhatsApp.
          </p>

          <p className="mt-6 text-sm text-gray-500">
            Your appointment request will be reviewed by
            our team. Once approved you'll receive a
            confirmation through WhatsApp.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Appointment Form */}

          <div className="rounded-[32px] border border-[#E8E1D6] bg-[#F9F6F1] p-8 shadow-lg lg:p-10">

            <form
              action={bookAppointment}
              className="space-y-6"
            >

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block font-medium text-[#1A1A1A]">
                    Full Name
                  </label>

                  <input
                    name="full_name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-[#DDD] bg-white px-4 py-3 outline-none transition focus:border-[#B08D57]"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium text-[#1A1A1A]">
                    WhatsApp Number
                  </label>

                  <input
                    name="whatsapp"
                    type="tel"
                    required
                    placeholder="+92 300 1234567"
                    className="w-full rounded-xl border border-[#DDD] bg-white px-4 py-3 outline-none transition focus:border-[#B08D57]"
                  />
                </div>

              </div>

              <div>

                <label className="mb-2 block font-medium text-[#1A1A1A]">
                  Select Service
                </label>

                <select
                  name="service"
                  required
                  className="w-full rounded-xl border border-[#DDD] bg-white px-4 py-3 outline-none focus:border-[#B08D57]"
                >

                  <option value="">
                    Select a service
                  </option>

                  {services.map((service) => (
                    <option
                      key={service}
                      value={service}
                    >
                      {service}
                    </option>
                  ))}

                </select>

              </div>

              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-2 block font-medium text-[#1A1A1A]">
                    Preferred Date
                  </label>

                  <div className="relative">

                    <Calendar className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#B08D57]" />

                    <input
                      name="appointment_date"
                      type="date"
                      required
                      className="w-full rounded-xl border border-[#DDD] bg-white py-3 pl-12 pr-4 outline-none focus:border-[#B08D57]"
                    />

                  </div>

                </div>

                <div>

                  <label className="mb-2 block font-medium text-[#1A1A1A]">
                    Preferred Time
                  </label>

                  <div className="relative">

                    <Clock3 className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#B08D57]" />

                    <select
                      name="appointment_time"
                      required
                      className="w-full appearance-none rounded-xl border border-[#DDD] bg-white py-3 pl-12 pr-4 outline-none transition focus:border-[#B08D57]"
                    >

                      <option value="">
                        Select a time
                      </option>

                      {timeSlots.map((slot) => (
                        <option
                          key={slot}
                          value={slot}
                        >
                          {slot}
                        </option>
                      ))}

                    </select>

                  </div>

                </div>

              </div>

              <div>

                <label className="mb-2 block font-medium text-[#1A1A1A]">
                  Additional Notes
                </label>

                <textarea
                  name="notes"
                  rows={5}
                  placeholder="Tell us about your concern..."
                  className="w-full rounded-xl border border-[#DDD] bg-white px-4 py-3 outline-none focus:border-[#B08D57]"
                />

              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#B08D57] py-4 text-lg font-semibold text-white transition hover:bg-[#987445]"
              >
                Book Appointment
              </button>

            </form>

          </div>
                    {/* Contact Section */}
          <div className="space-y-6">

            <div className="rounded-[30px] border border-[#E8E1D6] bg-[#F9F6F1] p-8 shadow-lg">

              <h3 className="text-2xl font-semibold text-[#1A1A1A]">
                Contact Information
              </h3>

              <div className="mt-8 space-y-6">

                <div className="flex gap-4">
                  <Phone className="mt-1 text-[#B08D57]" />

                  <div>
                    <p className="font-semibold">
                      Phone
                    </p>

                    <p className="text-gray-600">
                      +92 XXX XXXXXXX
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MessageCircle className="mt-1 text-[#B08D57]" />

                  <div>
                    <p className="font-semibold">
                      WhatsApp
                    </p>

                    <p className="text-gray-600">
                      +92 XXX XXXXXXX
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">

                  <MapPin className="mt-1 text-[#B08D57]" />

                  <div>

                    <p className="font-semibold">
                      Clinic Address
                    </p>

                    <p className="mt-2 leading-7 text-gray-600">
                      Dental Studio by Dr. Mohsin
                      <br />
                      4th Floor, MB 51
                      <br />
                      Commercial Market
                      <br />
                      Sector B, DHA Phase 6
                      <br />
                      Lahore 54000, Pakistan
                    </p>

                    <a
                      href="https://www.google.com/maps/place/Dental+Studio+by+Dr+Mohsin/@31.4750962,74.4424598,17z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex rounded-xl bg-[#B08D57] px-5 py-3 font-semibold text-white transition hover:bg-[#987445]"
                    >
                      Get Directions
                    </a>

                  </div>

                </div>

                <div>

                  <p className="mb-3 font-semibold text-[#1A1A1A]">
                    Opening Hours
                  </p>

                  <div className="space-y-3">

                    <div className="flex items-center justify-between border-b border-[#E8E1D6] pb-2">

                      <span className="text-gray-600">
                        Monday – Saturday
                      </span>

                      <span className="font-medium text-[#1A1A1A]">
                        5:00 PM – 10:00 PM
                      </span>

                    </div>

                    <div className="flex items-center justify-between">

                      <span className="text-gray-600">
                        Sunday
                      </span>

                      <span className="font-medium text-red-500">
                        Closed
                      </span>

                    </div>

                  </div>

                </div>

                <a
                  href="https://wa.me/923001234567"
                  className="mt-4 flex items-center justify-center rounded-xl bg-[#25D366] py-4 font-semibold text-white transition hover:opacity-90"
                >
                  Chat on WhatsApp
                </a>

              </div>

            </div>

            <div className="overflow-hidden rounded-[30px] border border-[#E8E1D6] shadow-lg">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.7851385580398!2d74.44245977622667!3d31.475096174234793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391909ce5737a04d%3A0x3e7921f143e36139!2sDental%20Studio%20by%20Dr%20Mohsin!5e0!3m2!1sen!2s!4v1784564161900!5m2!1sen!2s"
                className="h-[320px] w-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}