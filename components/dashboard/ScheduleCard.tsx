interface Appointment {
  time: string;
  patient: string;
  treatment: string;
  status: "Confirmed" | "Pending";
}

const appointments: Appointment[] = [
  {
    time: "09:00 AM",
    patient: "Ahmed Ali",
    treatment: "Root Canal",
    status: "Confirmed",
  },
  {
    time: "10:30 AM",
    patient: "Fatima Noor",
    treatment: "Scaling",
    status: "Pending",
  },
  {
    time: "12:00 PM",
    patient: "Ali Raza",
    treatment: "Dental Implant",
    status: "Confirmed",
  },
];

export default function ScheduleCard() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">
          Today's Schedule
        </h2>

        <button className="text-sm font-medium text-[#B08D57] hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {appointments.map((item) => (
          <div
            key={item.time}
            className="flex items-center justify-between rounded-xl border border-gray-100 p-4 hover:bg-[#F8F6F2] transition"
          >
            <div>
              <h3 className="font-semibold text-gray-900">
                {item.patient}
              </h3>

              <p className="text-sm text-gray-500">
                {item.treatment}
              </p>
            </div>

            <div className="text-right">
              <p className="font-semibold text-[#B08D57]">
                {item.time}
              </p>

              <span
                className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                  item.status === "Confirmed"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}