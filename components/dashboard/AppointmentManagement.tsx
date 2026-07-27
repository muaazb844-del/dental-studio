import { useMemo, useState } from "react";
import {
  Search,
  Filter,
  SquarePen,
  Trash2,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import AppointmentActions from "./AppointmentActions";

type Appointment = {
  id: number;
  full_name: string;
  whatsapp: string;
  service: string;
  appointment_date: string;
  appointment_time: string;
  status: string;
};

type Props = {
  appointments: Appointment[];
};

export default function AppointmentManagement({
  appointments,
}: Props) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredAppointments = useMemo(() => {
    return appointments.filter((appointment) => {
      const matchesSearch =
        appointment.full_name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        appointment.service
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "All" ||
        appointment.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [appointments, search, status]);

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <h1 className="text-3xl font-bold text-[#B08D57]">
          Appointment Management
        </h1>

        <div className="flex flex-col gap-3 md:flex-row">

          <div className="flex items-center gap-2 rounded-xl border px-4 py-3">

            <Search
              size={18}
              className="text-gray-400"
            />

            <input
              type="text"
              placeholder="Search patient..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-60 outline-none"
            />

          </div>

          <div className="flex items-center gap-2 rounded-xl border px-4">

            <Filter
              size={18}
              className="text-gray-400"
            />

            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
              className="bg-transparent py-3 outline-none"
            >
              <option>All</option>
              <option>Pending</option>
              <option>Confirmed</option>
              <option>Cancelled</option>
            </select>

          </div>

        </div>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="border-b">

            <tr>

              <th className="py-3 text-left">
                Patient
              </th>

              <th className="py-3 text-left">
                Service
              </th>

              <th className="py-3 text-left">
                Date
              </th>

              <th className="py-3 text-left">
                Time
              </th>

              <th className="py-3 text-left">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredAppointments.length === 0 ? (

              <tr>

                <td
                  colSpan={5}
                  className="py-12 text-center text-gray-500"
                >
                  No appointments found.
                </td>

              </tr>

            ) : (

              filteredAppointments.map(
                (appointment) => (

                  <tr
                    key={appointment.id}
                    className="border-b hover:bg-gray-50"
                  >

                    <td className="py-4">
                      {appointment.full_name}
                    </td>

                    <td>
                      {appointment.service}
                    </td>

                    <td>
                      {appointment.appointment_date}
                    </td>

                    <td>
                      {appointment.appointment_time}
                    </td>

                    <td>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          appointment.status ===
                          "Confirmed"
                            ? "bg-green-100 text-green-700"
                            : appointment.status ===
                              "Cancelled"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {appointment.status}
                      </span>

                    </td>

                  </tr>

                )
              )

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}