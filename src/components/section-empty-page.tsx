import type { LucideIcon } from "lucide-react";

import { DashboardHeader } from "@/components/dashboard-header";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

type SectionEmptyPageProps = {
  title: string;
  emptyTitle: string;
  description: string;
  icon: LucideIcon;
};

export function SectionEmptyPage({
  title,
  emptyTitle,
  description,
  icon: Icon,
}: SectionEmptyPageProps) {
  return (
    <div className="flex min-h-svh flex-col">
      <DashboardHeader title={title} />
      <main className="flex flex-1 flex-col gap-4 p-4 lg:p-6">
        <Empty className="border-border min-h-[320px] rounded-sm border border-dashed">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Icon />
            </EmptyMedia>
            <EmptyTitle className="font-mono">{emptyTitle}</EmptyTitle>
            <EmptyDescription>{description}</EmptyDescription>
          </EmptyHeader>
        </Empty>
      </main>
    </div>
  );
}
