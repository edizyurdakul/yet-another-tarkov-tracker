"use client";

import { ChevronRight, Circle, CircleCheck, Lock, Package, Unlock } from "lucide-react";

import { QuestStatusBadge } from "@/components/quests/quest-status-badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import type { Quest } from "@/lib/tarkov-data";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-muted-foreground font-mono text-[0.65rem] tracking-widest uppercase">
      {children}
    </h3>
  );
}

export function QuestDetailPanel({
  quest,
  open,
  onOpenChange,
}: {
  quest: Quest | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full gap-0 sm:max-w-md">
        {quest && (
          <>
            <SheetHeader className="border-border gap-2 border-b">
              <div className="flex items-center justify-between gap-2">
                <QuestStatusBadge status={quest.status} />
                <span className="text-muted-foreground font-mono text-xs">
                  +{quest.exp.toLocaleString()} EXP
                </span>
              </div>
              <SheetTitle className="text-lg text-balance">{quest.name}</SheetTitle>
              <SheetDescription className="font-mono text-xs">
                {quest.trader} · {quest.map} · Required Lvl {quest.level}
              </SheetDescription>
            </SheetHeader>

            <ScrollArea className="flex-1">
              <div className="flex flex-col gap-5 p-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{quest.description}</p>

                <div className="flex flex-col gap-2">
                  <SectionLabel>Prerequisite Chain</SectionLabel>
                  <div className="border-border bg-secondary/40 flex flex-wrap items-center gap-1 rounded-sm border p-2 font-mono text-xs">
                    {quest.prerequisites.length === 0 ? (
                      <span className="text-muted-foreground">No prerequisites — entry quest</span>
                    ) : (
                      quest.prerequisites.map((p, i) => (
                        <span key={p} className="flex items-center gap-1">
                          {i > 0 && <ChevronRight className="text-muted-foreground size-3" />}
                          <span className="text-muted-foreground">{p}</span>
                          <ChevronRight className="text-primary size-3" />
                          <span className="text-primary">{quest.name}</span>
                        </span>
                      ))
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <SectionLabel>Objectives</SectionLabel>
                    <span className="text-muted-foreground font-mono text-xs tabular-nums">
                      {quest.objectivesDone}/{quest.objectives.length}
                    </span>
                  </div>
                  <Progress
                    value={(quest.objectivesDone / quest.objectives.length) * 100}
                    className="h-1.5"
                  />
                  <ul className="flex flex-col gap-1.5 pt-1">
                    {quest.objectives.map((obj, i) => {
                      const done = i < quest.objectivesDone;
                      return (
                        <li key={obj} className="flex items-start gap-2 text-sm">
                          {done ? (
                            <CircleCheck className="text-success mt-0.5 size-4 shrink-0" />
                          ) : (
                            <Circle className="text-muted-foreground mt-0.5 size-4 shrink-0" />
                          )}
                          <span
                            className={
                              done ? "text-muted-foreground line-through" : "text-foreground"
                            }
                          >
                            {obj}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {quest.keyItems.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <SectionLabel>Key Items Needed</SectionLabel>
                    <div className="flex flex-wrap gap-2">
                      {quest.keyItems.map((item) => (
                        <span
                          key={item}
                          className="border-border bg-secondary/40 text-foreground flex items-center gap-1.5 rounded-sm border px-2 py-1 font-mono text-xs"
                        >
                          <Package className="text-primary size-3.5" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <Separator />

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <SectionLabel>Requires</SectionLabel>
                    {quest.prerequisites.length === 0 ? (
                      <span className="text-muted-foreground font-mono text-xs">—</span>
                    ) : (
                      quest.prerequisites.map((p) => (
                        <span
                          key={p}
                          className="text-muted-foreground flex items-center gap-1.5 font-mono text-xs"
                        >
                          <Lock className="size-3 shrink-0" />
                          {p}
                        </span>
                      ))
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <SectionLabel>Unlocks</SectionLabel>
                    {quest.unlocks.length === 0 ? (
                      <span className="text-muted-foreground font-mono text-xs">—</span>
                    ) : (
                      quest.unlocks.map((u) => (
                        <span
                          key={u}
                          className="text-primary flex items-center gap-1.5 font-mono text-xs"
                        >
                          <Unlock className="size-3 shrink-0" />
                          {u}
                        </span>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </ScrollArea>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
