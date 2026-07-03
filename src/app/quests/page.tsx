import { DashboardHeader } from "@/components/dashboard-header";
import { QuestTracker } from "@/components/quests/quest-tracker";

export default function QuestsPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <DashboardHeader title="QUEST TRACKER" />
      <main className="flex flex-1 flex-col gap-4 p-4 lg:p-6">
        <QuestTracker />
      </main>
    </div>
  );
}
