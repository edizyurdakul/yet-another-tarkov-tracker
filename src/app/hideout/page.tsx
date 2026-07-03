import { Hammer } from "lucide-react";

import { SectionEmptyPage } from "@/components/section-empty-page";

export default function HideoutPage() {
  return (
    <SectionEmptyPage
      title="HIDEOUT"
      emptyTitle="HIDEOUT MODULES COMING SOON"
      description="Track upgrade requirements, module dependencies, and construction progress across your hideout."
      icon={Hammer}
    />
  );
}
