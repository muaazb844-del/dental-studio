import Topbar from "@/components/dashboard/Topbar";
import StatCard from "@/components/dashboard/StatCard";
import AppointmentTable from "@/components/dashboard/AppointmentTable";

export default function DashboardPage() {
  return (
    <>
      <Topbar />

      <div className="p-8">
        <h2 className="text-3xl font-bold text-[#B08D57]">
          Dashboard Home
        </h2>

        <p className="mt-2 text-gray-600">
          Welcome to Dental Studio Management System.
        </p>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatCard title="Appointments" value="0" />
          <StatCard title="Patients" value="0" />
          <StatCard title="Revenue" value="Rs. 0" color="#16a34a" />
          <StatCard title="Pending" value="0" color="#f59e0b" />
        </div>

        {/* Recent Appointments */}
        <AppointmentTable />
      </div>
    </>
  );
}