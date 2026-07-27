import Topbar from "@/components/dashboard/Topbar";
import { supabase } from "@/lib/supabase";
import { Printer, Download } from "lucide-react";

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

export default async function InvoicesPage() {
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
              Invoices
            </h1>

            <p className="mt-2 text-gray-600">
              Generate and manage patient invoices.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
          <table className="w-full">
            <thead className="bg-[#F8F6F2]">
              <tr>
                <th className="px-6 py-4 text-left">Invoice #</th>
                <th className="px-6 py-4 text-left">Patient</th>
                <th className="px-6 py-4 text-left">Treatment</th>
                <th className="px-6 py-4 text-left">Amount</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {error ? (
                <tr>
                  <td
                    colSpan={6}
                    className="p-8 text-center text-red-500"
                  >
                    Failed to load invoices.
                  </td>
                </tr>
              ) : appointments && appointments.length > 0 ? (
                appointments.map((appointment) => (
                  <tr
                    key={appointment.id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4 font-semibold text-[#B08D57]">
                      INV-{appointment.id}
                    </td>

                    <td className="px-6 py-4 font-medium">
                      {appointment.full_name}
                    </td>

                    <td className="px-6 py-4">
                      {appointment.service}
                    </td>

                    <td className="px-6 py-4 font-semibold">
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

                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-3">
                        <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700 transition">
                          <Printer size={16} />
                          Print
                        </button>

                        <button className="flex items-center gap-2 rounded-lg bg-[#B08D57] px-3 py-2 text-sm text-white hover:opacity-90 transition">
                          <Download size={16} />
                          PDF
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="p-8 text-center text-gray-500"
                  >
                    No invoices found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <p className="text-gray-500">Total Invoices</p>

            <h2 className="mt-3 text-3xl font-bold text-[#B08D57]">
              {appointments?.length ?? 0}
            </h2>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <p className="text-gray-500">Paid</p>

            <h2 className="mt-3 text-3xl font-bold text-green-600">
              {
                appointments?.filter(
                  (a) => a.status === "Confirmed"
                ).length
              }
            </h2>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
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