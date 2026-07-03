import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { traders } from "@/lib/tarkov-data";
import { cn } from "@/lib/utils";

function LoyaltyPips({ tier }: { tier: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4].map((n) => (
        <span
          key={n}
          className={cn("h-1.5 w-4 rounded-[1px]", n <= tier ? "bg-primary" : "bg-border")}
        />
      ))}
    </div>
  );
}

export function TraderSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-mono text-sm tracking-wide">TRADER REPUTATION</CardTitle>
        <CardDescription>Loyalty tier across all dealers.</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4">
        {traders.map((trader) => (
          <div
            key={trader.id}
            className="border-border bg-secondary/40 flex flex-col gap-2 rounded-sm border p-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-foreground text-sm font-medium">{trader.name}</span>
              <span className="text-primary font-mono text-xs font-semibold">
                LL{trader.loyalty}
              </span>
            </div>
            <LoyaltyPips tier={trader.loyalty} />
            <span className="text-muted-foreground font-mono text-[0.65rem]">
              {trader.questsCompleted}/{trader.questsTotal} quests
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
