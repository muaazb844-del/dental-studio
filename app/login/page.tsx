import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F9F6F1] px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        <div className="mb-8 text-center">

          <h1 className="text-3xl font-bold text-[#B08D57]">
            Dental Studio
          </h1>

          <p className="mt-2 text-gray-500">
            Sign in to Dashboard
          </p>

        </div>

        <LoginForm />

      </div>
    </div>
  );
}