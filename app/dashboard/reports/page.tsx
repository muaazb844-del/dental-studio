import Topbar from "@/components/dashboard/Topbar";
import { supabase } from "@/lib/supabase";

const treatmentPrices: Record<string, number> = {
  "General Consultation": 2000,
  "Root Canal Therapy": 15000,
  "Dental Implants": 80000,
  "Dental Veneers": 25000,
  "Dental Crowns": 18000,
  "Dental Fillings": 5000,
  "Orthodontic Treatment": 120000,
  Dentures: 35000,
};

export default async function ReportsPage() {
  const { data: appointments, error } = await supabase
    .from("appointments")
    .select("*");

  const totalAppointments = appointments?.length ?? 0;

  const confirmed =
    appointments?.filter((a) => a.status === "Confirmed").length ?? 0;

  const pending =
    appointments?.filter((a) => a.status === "Pending").length ?? 0;

  const cancelled =
    appointments?.filter((a) => a.status === "Cancelled").length ?? 0;

  const totalRevenue =
    appointments?.reduce((sum, appointment) => {
      if (appointment.status !== "Confirmed") return sum;

      return (
        sum +
        (treatmentPrices[appointment.service] ?? 0)
      );
    }, 0) ?? 0;

  return (
    <>
      <Topbar />

      <div className="p-8">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#B08D57]">
            Reports & Analytics
          </h1>

          <p className="mt-2 text-gray-600">
            Overview of your clinic performance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <p className="text-gray-500">
              Total Appointments
            </p>

            <h2 className="mt-3 text-4xl font-bold text-[#B08D57]">
              {totalAppointments}
            </h2>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <p className="text-gray-500">
              Confirmed
            </p>

            <h2 className="mt-3 text-4xl font-bold text-green-600">
              {confirmed}
            </h2>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <p className="text-gray-500">
              Pending
            </p>

            <h2 className="mt-3 text-4xl font-bold text-yellow-600">
              {pending}
            </h2>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <p className="text-gray-500">
              Cancelled
            </p>

            <h2 className="mt-3 text-4xl font-bold text-red-600">
              {cancelled}
            </h2>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <p className="text-gray-500">
              Estimated Revenue
            </p>

            <h2 className="mt-3 text-4xl font-bold text-[#B08D57]">
              Rs. {totalRevenue.toLocaleString()}
            </h2>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <p className="text-gray-500">
              Success Rate
            </p>

            <h2 className="mt-3 text-4xl font-bold text-blue-600">
              {totalAppointments
                ? Math.round(
                    (confirmed / totalAppointments) * 100
                  )
                : 0}
              %
            </h2>
          </div>

        </div>

        <div className="mt-10 rounded-2xl border bg-white p-8 shadow-sm">

          <h2 className="mb-6 text-2xl font-bold text-[#B08D57]">
            Report Summary
          </h2>

          <div className="space-y-4 text-gray-700">

            <div className="flex justify-between border-b pb-3">
              <span>Total Patients</span>
              <span className="font-semibold">
                {totalAppointments}
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>Total Revenue</span>
              <span className="font-semibold text-[#B08D57]">
                Rs. {totalRevenue.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>Confirmed Appointments</span>
              <span className="font-semibold text-green-600">
                {confirmed}
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>Pending Appointments</span>
              <span className="font-semibold text-yellow-600">
                {pending}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Cancelled Appointments</span>
              <span className="font-semibold text-red-600">
                {cancelled}
              </span>
            </div>

          </div>

        </div>

        {error && (
          <p className="mt-6 text-red-500">
            Failed to load reports.
          </p>
        )}

      </div>
    </>
  );
}