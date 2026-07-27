const payments = [
  {
    patient: "Ahmed Ali",
    amount: "Rs. 18,000",
    status: "Paid",
  },
  {
    patient: "Fatima Noor",
    amount: "Rs. 7,500",
    status: "Paid",
  },
  {
    patient: "Ali Raza",
    amount: "Rs. 32,000",
    status: "Pending",
  },
];

export default function RecentPayments() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold">
          Recent Payments
        </h2>

        <button className="text-sm text-[#B08D57] font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {payments.map((payment) => (
          <div
            key={payment.patient}
            className="flex items-center justify-between rounded-xl bg-[#F8F6F2] p-4"
          >
            <div>
              <h3 className="font-semibold">
                {payment.patient}
              </h3>

              <p className="text-sm text-gray-500">
                {payment.amount}
              </p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                payment.status === "Paid"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {payment.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}