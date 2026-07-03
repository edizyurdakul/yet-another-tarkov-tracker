import { CheckCircle2, FlaskConical, Hammer, Users } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { activity, type Activity } from "@/lib/tarkov-data";

const iconMap: Record<Activity["type"], typeof CheckCircle2> = {
  quest: CheckCircle2,
  hideout: Hammer,
  trader: Users,
  craft: FlaskConical,
};

export function ActivityFeed() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="font-mono text-sm tracking-wide">RECENT ACTIVITY</CardTitle>
        <CardDescription>Latest operations log.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        {activity.map((item) => {
          const Icon = iconMap[item.type];
          return (
            <div
              key={item.id}
              className="hover:bg-secondary/50 flex items-start gap-3 rounded-sm px-2 py-2 transition-colors"
            >
              <div className="border-border bg-secondary mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-sm border">
                <Icon className="text-primary size-3.5" />
              </div>
              <div className="flex flex-1 flex-col gap-0.5">
                <span className="text-foreground text-sm leading-tight">{item.text}</span>
                <span className="text-muted-foreground font-mono text-xs">{item.detail}</span>
              </div>
              <span className="text-muted-foreground shrink-0 font-mono text-[0.65rem]">
                {item.time}
              </span>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
