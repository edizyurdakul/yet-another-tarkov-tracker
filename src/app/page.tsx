import { ActivityFeed } from "@/components/dashboard/activity-feed";
import { NextObjectives } from "@/components/dashboard/next-objectives";
import { StatCards } from "@/components/dashboard/stat-cards";
import { TraderSummary } from "@/components/dashboard/trader-summary";
import { DashboardHeader } from "@/components/dashboard-header";

export default function DashboardPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <DashboardHeader title="DASHBOARD" />
      <main className="flex flex-1 flex-col gap-4 p-4 lg:p-6">
        <StatCards />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <NextObjectives />
          </div>
          <ActivityFeed />
        </div>
        <TraderSummary />
      </main>
    </div>
  );
}
