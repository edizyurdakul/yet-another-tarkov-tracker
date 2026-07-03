import { FlaskConical } from "lucide-react";

import { SectionEmptyPage } from "@/components/section-empty-page";

export default function CraftsPage() {
  return (
    <SectionEmptyPage
      title="CRAFTS"
      emptyTitle="CRAFT ANALYSIS COMING SOON"
      description="Compare input costs, craft durations, and profit margins across hideout stations."
      icon={FlaskConical}
    />
  );
}
