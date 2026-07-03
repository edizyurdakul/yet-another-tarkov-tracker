import { ArrowRight, Target } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { quests } from "@/lib/tarkov-data";

export function NextObjectives() {
  const recommended = quests
    .filter((q) => q.status === "in-progress" || q.status === "available")
    .slice(0, 3);

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Target className="text-primary size-4" />
          <CardTitle className="font-mono text-sm tracking-wide">NEXT OBJECTIVES</CardTitle>
        </div>
        <CardDescription>Top recommended tasks for this session.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {recommended.map((quest, i) => {
          const pct = Math.round((quest.objectivesDone / quest.objectives.length) * 100);
          return (
            <div
              key={quest.id}
              className="group border-border bg-secondary/40 hover:border-primary/40 flex flex-col gap-2 rounded-sm border p-3 transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-3">
                  <span className="text-muted-foreground mt-0.5 font-mono text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-foreground text-sm font-medium">{quest.name}</span>
                    <span className="text-muted-foreground font-mono text-xs">
                      {quest.trader} · {quest.map} · Lvl {quest.level}
                    </span>
                  </div>
                </div>
                <Badge variant="outline" className="shrink-0 font-mono text-[0.65rem] uppercase">
                  {quest.status === "in-progress" ? "Active" : "Ready"}
                </Badge>
              </div>
              <div className="flex items-center gap-3 pl-8">
                <Progress value={pct} className="h-1.5" />
                <span className="text-muted-foreground font-mono text-xs tabular-nums">
                  {quest.objectivesDone}/{quest.objectives.length}
                </span>
                <ArrowRight className="text-muted-foreground group-hover:text-primary size-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
