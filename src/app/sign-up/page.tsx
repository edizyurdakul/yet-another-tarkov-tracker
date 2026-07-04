import { SignUpForm } from "@/components/auth/sign-up-form";
import { DashboardHeader } from "@/components/dashboard-header";

export default function SignInPage() {
  return (
    <div className="flex h-screen flex-col">
      <DashboardHeader title="SIGN-IN" />
      <main className="bg-muted flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <SignUpForm />
        </div>
      </main>
    </div>
  );
}
