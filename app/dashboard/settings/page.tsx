import Topbar from "@/components/dashboard/Topbar";
import { Save } from "lucide-react";

export default function SettingsPage() {
  return (
    <>
      <Topbar />

      <div className="p-8">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#B08D57]">
            Clinic Settings
          </h1>

          <p className="mt-2 text-gray-600">
            Manage your clinic information and preferences.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-8 shadow-sm">

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Clinic Name
              </label>

              <input
                type="text"
                defaultValue="Dental Studio"
                className="w-full rounded-xl border p-3 outline-none focus:border-[#B08D57]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Doctor Name
              </label>

              <input
                type="text"
                defaultValue="Dr. Syed Mohsin Raza"
                className="w-full rounded-xl border p-3 outline-none focus:border-[#B08D57]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Phone Number
              </label>

              <input
                type="text"
                defaultValue="+92 300 1234567"
                className="w-full rounded-xl border p-3 outline-none focus:border-[#B08D57]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                WhatsApp
              </label>

              <input
                type="text"
                defaultValue="+92 300 1234567"
                className="w-full rounded-xl border p-3 outline-none focus:border-[#B08D57]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email
              </label>

              <input
                type="email"
                defaultValue="info@dentalstudio.pk"
                className="w-full rounded-xl border p-3 outline-none focus:border-[#B08D57]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Working Hours
              </label>

              <input
                type="text"
                defaultValue="Mon - Sat | 10:00 AM - 08:00 PM"
                className="w-full rounded-xl border p-3 outline-none focus:border-[#B08D57]"
              />
            </div>

          </div>

          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Clinic Address
            </label>

            <textarea
              rows={4}
              defaultValue="Dental Studio, Lahore, Pakistan"
              className="w-full rounded-xl border p-3 outline-none focus:border-[#B08D57]"
            />
          </div>

          <div className="mt-8 flex justify-end">

            <button className="flex items-center gap-2 rounded-xl bg-[#B08D57] px-6 py-3 font-medium text-white transition hover:opacity-90">

              <Save size={18} />

              Save Changes

            </button>

          </div>

        </div>

      </div>
    </>
  );
}