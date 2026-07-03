import { Users } from "lucide-react";

import { SectionEmptyPage } from "@/components/section-empty-page";

export default function TradersPage() {
  return (
    <SectionEmptyPage
      title="TRADERS"
      emptyTitle="TRADER DETAILS COMING SOON"
      description="View loyalty tiers, standing requirements, and quest progress for each dealer."
      icon={Users}
    />
  );
}
