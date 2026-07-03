import { CheckCircle2, Hammer, Loader2, TrendingUp } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const stats = [
  {
    label: "Quests Completed",
    value: "141",
    sub: "of 237 total",
    icon: CheckCircle2,
    accent: "text-success",
  },
  {
    label: "Active Quests",
    value: "8",
    sub: "across 5 traders",
    icon: Loader2,
    accent: "text-primary",
  },
  {
    label: "Hideout Level",
    value: "L2",
    sub: "14 modules built",
    icon: Hammer,
    accent: "text-primary",
  },
];

export function StatCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="gap-0 py-0">
          <CardContent className="flex items-start justify-between p-4">
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground font-mono text-[0.65rem] tracking-widest uppercase">
                {stat.label}
              </span>
              <span className="text-foreground font-mono text-2xl font-semibold tabular-nums">
                {stat.value}
              </span>
              <span className="text-muted-foreground text-xs">{stat.sub}</span>
            </div>
            <div className="border-border bg-secondary flex size-9 items-center justify-center rounded-sm border">
              <stat.icon className={`size-4 ${stat.accent}`} />
            </div>
          </CardContent>
        </Card>
      ))}

      <Card className="gap-0 py-0">
        <CardContent className="flex flex-col justify-between gap-3 p-4">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground font-mono text-[0.65rem] tracking-widest uppercase">
                Overall Progression
              </span>
              <span className="text-foreground font-mono text-2xl font-semibold tabular-nums">
                59.5%
              </span>
            </div>
            <div className="border-border bg-secondary flex size-9 items-center justify-center rounded-sm border">
              <TrendingUp className="text-primary size-4" />
            </div>
          </div>
          <Progress value={59.5} className="h-1.5" />
        </CardContent>
      </Card>
    </div>
  );
}
