import { Badge } from "@/components/ui/badge";
import type { QuestStatus } from "@/lib/tarkov-data";
import { cn } from "@/lib/utils";

const config: Record<QuestStatus, { label: string; className: string }> = {
  completed: {
    label: "Completed",
    className: "border-success/40 bg-success/10 text-success",
  },
  "in-progress": {
    label: "In Progress",
    className: "border-primary/40 bg-primary/10 text-primary",
  },
  available: {
    label: "Available",
    className: "border-border bg-secondary text-foreground",
  },
  locked: {
    label: "Locked",
    className: "border-border bg-transparent text-muted-foreground",
  },
};

export function QuestStatusBadge({ status }: { status: QuestStatus }) {
  const { label, className } = config[status];
  return (
    <Badge
      variant="outline"
      className={cn("font-mono text-[0.65rem] tracking-wide uppercase", className)}
    >
      {label}
    </Badge>
  );
}
