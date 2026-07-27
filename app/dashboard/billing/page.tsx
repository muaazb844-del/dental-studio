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

export default async function BillingPage() {
  const { data: appointments, error } = await supabase
    .from("appointments")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <>
      <Topbar />

      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#B08D57]">
            Billing
          </h1>

          <p className="mt-2 text-gray-600">
            Patient billing and treatment charges.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
          <table className="w-full">
            <thead className="bg-[#F8F6F2]">
              <tr>
                <th className="px-6 py-4 text-left">Patient</th>
                <th className="px-6 py-4 text-left">Treatment</th>
                <th className="px-6 py-4 text-left">Amount</th>
                <th className="px-6 py-4 text-left">Payment</th>
              </tr>
            </thead>

            <tbody>
              {error ? (
                <tr>
                  <td
                    colSpan={4}
                    className="p-8 text-center text-red-500"
                  >
                    Failed to load billing data.
                  </td>
                </tr>
              ) : appointments && appointments.length > 0 ? (
                appointments.map((appointment) => {
                  const amount =
                    treatmentPrices[appointment.service] ?? 0;

                  return (
                    <tr
                      key={appointment.id}
                      className="border-t hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 font-medium">
                        {appointment.full_name}
                      </td>

                      <td className="px-6 py-4">
                        {appointment.service}
                      </td>

                      <td className="px-6 py-4 font-semibold text-[#B08D57]">
                        Rs. {amount.toLocaleString()}
                      </td>

                      <td className="px-6 py-4">
                        <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                          Pending
                        </span>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="p-8 text-center text-gray-500"
                  >
                    No billing records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}