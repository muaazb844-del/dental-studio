import {
  CalendarDays,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react";

import Topbar from "@/components/dashboard/Topbar";
import StatCard from "@/components/dashboard/StatCard";
import AppointmentTable from "@/components/dashboard/AppointmentTable";

import { supabase } from "@/lib/supabase";

export default async function AppointmentsPage() {
  const { data: appointments } = await supabase
    .from("appointments")
    .select("*")
    .order("created_at", { ascending: false });

  const totalAppointments = appointments?.length ?? 0;

  const confirmedAppointments =
    appointments?.filter(
      (appointment) => appointment.status === "Confirmed"
    ).length ?? 0;

  const pendingAppointments =
    appointments?.filter(
      (appointment) => appointment.status === "Pending"
    ).length ?? 0;

  const cancelledAppointments =
    appointments?.filter(
      (appointment) => appointment.status === "Cancelled"
    ).length ?? 0;

  return (
    <>
      <Topbar />

      <div className="p-8 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-[#B08D57]">
            Appointments
          </h1>

          <p className="mt-2 text-gray-500">
            Manage all clinic appointments from here.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Appointments"
            value={totalAppointments.toString()}
            color="#B08D57"
            icon={<CalendarDays size={24} />}
          />

          <StatCard
            title="Confirmed"
            value={confirmedAppointments.toString()}
            color="#22C55E"
            icon={<CheckCircle size={24} />}
          />

          <StatCard
            title="Pending"
            value={pendingAppointments.toString()}
            color="#F59E0B"
            icon={<Clock size={24} />}
          />

          <StatCard
            title="Cancelled"
            value={cancelledAppointments.toString()}
            color="#EF4444"
            icon={<XCircle size={24} />}
          />
        </div>

        {/* Appointment Table */}
        <AppointmentTable />
      </div>
    </>
  );
}