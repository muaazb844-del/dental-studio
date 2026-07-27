const patients = [
  {
    name: "Ahmed Ali",
    treatment: "Root Canal",
    date: "Today",
  },
  {
    name: "Fatima Noor",
    treatment: "Scaling",
    date: "Today",
  },
  {
    name: "Ali Raza",
    treatment: "Dental Implant",
    date: "Yesterday",
  },
];

export default function RecentPatients() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold">Recent Patients</h2>

        <button className="text-sm text-[#B08D57] font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {patients.map((patient) => (
          <div
            key={patient.name}
            className="flex items-center justify-between rounded-xl bg-[#F8F6F2] p-4"
          >
            <div>
              <h3 className="font-semibold">{patient.name}</h3>

              <p className="text-sm text-gray-500">
                {patient.treatment}
              </p>
            </div>

            <span className="text-sm text-[#B08D57]">
              {patient.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}