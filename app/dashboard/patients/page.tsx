import Topbar from "@/components/dashboard/Topbar";
import { supabase } from "@/lib/supabase";

export default async function PatientsPage() {
  const { data: patients, error } = await supabase
    .from("appointments")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <>
      <Topbar />

      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#B08D57]">
            Patients
          </h1>

          <p className="mt-2 text-gray-600">
            Manage all clinic patients.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
          <table className="w-full">
            <thead className="bg-[#F8F6F2]">
              <tr>
                <th className="px-6 py-4 text-left">Patient</th>
                <th className="px-6 py-4 text-left">WhatsApp</th>
                <th className="px-6 py-4 text-left">Service</th>
                <th className="px-6 py-4 text-left">Appointment Date</th>
                <th className="px-6 py-4 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {error ? (
                <tr>
                  <td
                    colSpan={5}
                    className="p-8 text-center text-red-500"
                  >
                    Failed to load patients.
                  </td>
                </tr>
              ) : patients && patients.length > 0 ? (
                patients.map((patient) => (
                  <tr
                    key={patient.id}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 font-medium">
                      {patient.full_name}
                    </td>

                    <td className="px-6 py-4">
                      {patient.whatsapp}
                    </td>

                    <td className="px-6 py-4">
                      {patient.service}
                    </td>

                    <td className="px-6 py-4">
                      {patient.appointment_date}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          patient.status === "Confirmed"
                            ? "bg-green-100 text-green-700"
                            : patient.status === "Cancelled"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {patient.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="p-8 text-center text-gray-500"
                  >
                    No patients found.
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