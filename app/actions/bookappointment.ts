"use server";

import { supabase } from "@/lib/supabase";

export async function bookAppointment(formData: FormData) {
  const full_name = formData.get("full_name")?.toString() || "";
  const whatsapp = formData.get("whatsapp")?.toString() || "";
  const service = formData.get("service")?.toString() || "";
  const appointment_date =
    formData.get("appointment_date")?.toString() || "";
  const appointment_time =
    formData.get("appointment_time")?.toString() || "";
  const notes = formData.get("notes")?.toString() || "";

  if (
    !full_name ||
    !whatsapp ||
    !service ||
    !appointment_date ||
    !appointment_time
  ) {
    throw new Error("Please fill all required fields.");
  }

  const { error } = await supabase.from("appointments").insert({
    full_name,
    whatsapp,
    service,
    appointment_date,
    appointment_time,
    notes,
    status: "Pending",
  });

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
}