"use client";

import { useTransition } from "react";
import { Check, X, Trash2 } from "lucide-react";

import { updateAppointmentStatus } from "@/app/actions/updateAppointmentStatus";
import { deleteAppointment } from "@/app/actions/deleteAppointment";

interface AppointmentActionsProps {
  id: number;
  status: string;
}

export default function AppointmentActions({
  id,
  status,
}: AppointmentActionsProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex items-center gap-2">

      {status !== "Confirmed" && (
        <button
          disabled={isPending}
          onClick={() =>
            startTransition(async () => {
              await updateAppointmentStatus(id, "Confirmed");
            })
          }
          className="rounded-lg bg-green-600 px-3 py-2 text-white transition hover:bg-green-700 disabled:opacity-50"
        >
          <Check size={16} />
        </button>
      )}

      {status !== "Cancelled" && (
        <button
          disabled={isPending}
          onClick={() =>
            startTransition(async () => {
              await updateAppointmentStatus(id, "Cancelled");
            })
          }
          className="rounded-lg bg-yellow-500 px-3 py-2 text-white transition hover:bg-yellow-600 disabled:opacity-50"
        >
          <X size={16} />
        </button>
      )}

      <button
        disabled={isPending}
        onClick={() => {
          const confirmed = window.confirm(
            "Delete this appointment?"
          );

          if (!confirmed) return;

          startTransition(async () => {
            await deleteAppointment(id);
          });
        }}
        className="rounded-lg bg-red-600 px-3 py-2 text-white transition hover:bg-red-700 disabled:opacity-50"
      >
        <Trash2 size={16} />
      </button>

    </div>
  );
}