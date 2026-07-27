import { supabase } from "@/lib/supabase";
import AppointmentActions from "./AppointmentActions";

export default async function AppointmentTable() {
  const { data: appointments, error } = await supabase
    .from("appointments")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
        <p className="text-red-500">
          Failed to load appointments.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#B08D57]">
          Recent Appointments
        </h2>

        <button className="rounded-lg bg-[#B08D57] px-4 py-2 text-white">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b">
            <tr>
              <th className="py-3 text-left">Patient</th>
              <th className="py-3 text-left">Service</th>
              <th className="py-3 text-left">Date</th>
              <th className="py-3 text-left">Time</th>
              <th className="py-3 text-left">Status</th>
              <th className="py-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {appointments && appointments.length > 0 ? (
              appointments.map((appointment) => (
                <tr
                  key={appointment.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="py-4">
                    {appointment.full_name}
                  </td>

                  <td>{appointment.service}</td>

                  <td>{appointment.appointment_date}</td>

                  <td>{appointment.appointment_time}</td>

                  <td>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
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

                  <td>
                    <AppointmentActions
                      id={appointment.id}
                      status={appointment.status}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="py-10 text-center text-gray-500"
                >
                  No appointments yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}