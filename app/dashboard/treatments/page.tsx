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

export default async function TreatmentsPage() {
  const { data: appointments, error } = await supabase
    .from("appointments")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <>
      <Topbar />

      <div className="p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#B08D57]">
              Treatments
            </h1>

            <p className="mt-2 text-gray-600">
              Manage all treatment records.
            </p>
          </div>

          <button className="rounded-xl bg-[#B08D57] px-5 py-3 text-white font-medium hover:opacity-90 transition">
            + Add Treatment
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
          <table className="w-full">
            <thead className="bg-[#F8F6F2]">
              <tr>
                <th className="px-6 py-4 text-left">Patient</th>
                <th className="px-6 py-4 text-left">Treatment</th>
                <th className="px-6 py-4 text-left">Cost</th>
                <th className="px-6 py-4 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {error ? (
                <tr>
                  <td
                    colSpan={4}
                    className="p-8 text-center text-red-500"
                  >
                    Failed to load treatments.
                  </td>
                </tr>
              ) : appointments && appointments.length > 0 ? (
                appointments.map((appointment) => (
                  <tr
                    key={appointment.id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4 font-medium">
                      {appointment.full_name}
                    </td>

                    <td className="px-6 py-4">
                      {appointment.service}
                    </td>

                    <td className="px-6 py-4 font-semibold text-[#B08D57]">
                      Rs.{" "}
                      {(
                        treatmentPrices[appointment.service] || 0
                      ).toLocaleString()}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          appointment.status === "Confirmed"
                            ? "bg-green-100 text-green-700"
                            : appointment.status === "Cancelled"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="p-8 text-center text-gray-500"
                  >
                    No treatment records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white border p-6 shadow-sm">
            <p className="text-gray-500">Total Treatments</p>

            <h2 className="mt-3 text-3xl font-bold text-[#B08D57]">
              {appointments?.length ?? 0}
            </h2>
          </div>

          <div className="rounded-2xl bg-white border p-6 shadow-sm">
            <p className="text-gray-500">Completed</p>

            <h2 className="mt-3 text-3xl font-bold text-green-600">
              {
                appointments?.filter(
                  (a) => a.status === "Confirmed"
                ).length
              }
            </h2>
          </div>

          <div className="rounded-2xl bg-white border p-6 shadow-sm">
            <p className="text-gray-500">Pending</p>

            <h2 className="mt-3 text-3xl font-bold text-yellow-600">
              {
                appointments?.filter(
                  (a) => a.status === "Pending"
                ).length
              }
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}