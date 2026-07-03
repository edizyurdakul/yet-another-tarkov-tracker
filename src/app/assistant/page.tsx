import { Bot } from "lucide-react";

import { SectionEmptyPage } from "@/components/section-empty-page";

export default function AssistantPage() {
  return (
    <SectionEmptyPage
      title="AI ASSISTANT"
      emptyTitle="INTEL ASSISTANT COMING SOON"
      description="Get raid prep recommendations, quest routing, and progression advice tailored to your profile."
      icon={Bot}
    />
  );
}
