import {
  CalendarDays,
  CheckCircle,
  Clock,
  DollarSign,
  UserPlus,
  Users,
  XCircle,
} from "lucide-react";

import Link from "next/link";

import Topbar from "@/components/dashboard/Topbar";
import StatCard from "@/components/dashboard/StatCard";
import AppointmentTable from "@/components/dashboard/AppointmentTable";

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

export default async function DashboardPage() {
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

  const today = new Date().toISOString().split("T")[0];

  const todaysAppointments =
    appointments?.filter(
      (appointment) =>
        appointment.appointment_date === today
    ).length ?? 0;

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

      <div className="p-8 space-y-8">

        {/* Header */}

        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

          <div>

            <h1 className="text-4xl font-bold text-[#B08D57]">
              Dashboard
            </h1>

            <p className="mt-2 text-gray-500">
              Welcome back, Dr. Syed Mohsin Raza 👋
            </p>

          </div>

          <div className="flex gap-4">

            <Link
              href="/dashboard/appointments"
              className="rounded-xl bg-[#B08D57] px-5 py-3 font-medium text-white hover:opacity-90 transition"
            >
              + New Appointment
            </Link>

            <Link
              href="/dashboard/patients"
              className="rounded-xl border border-[#B08D57] px-5 py-3 font-medium text-[#B08D57] hover:bg-[#F8F6F2] transition"
            >
              Patients
            </Link>

          </div>

        </div>

        {/* Statistics */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <StatCard
            title="Appointments"
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

        {/* Analytics */}

        <div className="grid gap-6 lg:grid-cols-3">

          <div className="rounded-2xl border bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500">
                  Total Patients
                </p>

                <h2 className="mt-3 text-4xl font-bold text-[#B08D57]">
                  {totalAppointments}
                </h2>

              </div>

              <Users
                size={34}
                className="text-[#B08D57]"
              />

            </div>

          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500">
                  Today's Appointments
                </p>

                <h2 className="mt-3 text-4xl font-bold text-blue-600">
                  {todaysAppointments}
                </h2>

              </div>

              <UserPlus
                size={34}
                className="text-blue-600"
              />

            </div>

          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500">
                  Revenue
                </p>

                <h2 className="mt-3 text-4xl font-bold text-green-600">
                  Rs. {totalRevenue.toLocaleString()}
                </h2>

              </div>

              <DollarSign
                size={34}
                className="text-green-600"
              />

            </div>

          </div>

        </div>

        {/* Appointment Table */}

        <div>

          <div className="mb-5 flex items-center justify-between">

            <h2 className="text-2xl font-bold text-[#B08D57]">
              Recent Appointments
            </h2>

            <Link
              href="/dashboard/appointments"
              className="font-medium text-[#B08D57] hover:underline"
            >
              View All
            </Link>

          </div>

          <AppointmentTable />

        </div>

      </div>
    </>
  );
}