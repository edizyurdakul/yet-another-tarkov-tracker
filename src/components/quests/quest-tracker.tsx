"use client";

import { useMemo, useState } from "react";
import { ChevronRight, MapPin, Package, Search } from "lucide-react";

import { QuestDetailPanel } from "@/components/quests/quest-detail-panel";
import { QuestStatusBadge } from "@/components/quests/quest-status-badge";
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from "@/components/ui/empty";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { quests, traders, type Quest, type QuestStatus } from "@/lib/tarkov-data";

const maps = ["Customs", "Woods", "Interchange", "Shoreline", "Factory", "Hideout"];

export function QuestTracker() {
  const [query, setQuery] = useState("");
  const [trader, setTrader] = useState("all");
  const [map, setMap] = useState("all");
  const [status, setStatus] = useState<QuestStatus | "all">("all");
  const [selected, setSelected] = useState<Quest | null>(null);
  const [open, setOpen] = useState(false);

  const filtered = useMemo(() => {
    return quests.filter((q) => {
      if (query && !q.name.toLowerCase().includes(query.toLowerCase())) return false;
      if (trader !== "all" && q.trader !== trader) return false;
      if (map !== "all" && q.map !== map) return false;
      if (status !== "all" && q.status !== status) return false;
      return true;
    });
  }, [query, trader, map, status]);

  function openQuest(quest: Quest) {
    setSelected(quest);
    setOpen(true);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative max-w-sm flex-1">
          <Search className="text-muted-foreground absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search quests…"
            className="bg-card h-9 pl-8 font-mono text-xs"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Select value={trader} onValueChange={(value) => setTrader(value ?? "all")}>
            <SelectTrigger size="sm" className="bg-card w-36 font-mono text-xs">
              <SelectValue placeholder="Trader">
                {trader === "all" ? "All Traders" : trader}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All Traders</SelectItem>
                {traders.map((t) => (
                  <SelectItem key={t.id} value={t.name}>
                    {t.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select value={map} onValueChange={(value) => setMap(value ?? "all")}>
            <SelectTrigger size="sm" className="bg-card w-32 font-mono text-xs">
              <SelectValue placeholder="Map">{map === "all" ? "All Maps" : map}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All Maps</SelectItem>
                {maps.map((m) => (
                  <SelectItem key={m} value={m}>
                    {m}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <ToggleGroup
        value={[status]}
        onValueChange={(v) => {
          const next = v.find((item) => item !== status);
          setStatus((next as QuestStatus | "all") ?? "all");
        }}
        className="w-fit"
      >
        <ToggleGroupItem value="all" className="font-mono text-xs">
          All
        </ToggleGroupItem>
        <ToggleGroupItem value="in-progress" className="font-mono text-xs">
          In Progress
        </ToggleGroupItem>
        <ToggleGroupItem value="available" className="font-mono text-xs">
          Available
        </ToggleGroupItem>
        <ToggleGroupItem value="completed" className="font-mono text-xs">
          Completed
        </ToggleGroupItem>
        <ToggleGroupItem value="locked" className="font-mono text-xs">
          Locked
        </ToggleGroupItem>
      </ToggleGroup>

      {filtered.length === 0 ? (
        <Empty className="border-border rounded-sm border border-dashed">
          <EmptyHeader>
            <EmptyTitle className="font-mono">NO QUESTS MATCH FILTERS</EmptyTitle>
            <EmptyDescription>
              Adjust your search or filters to find active contracts.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        <div className="flex flex-col gap-2">
          {filtered.map((quest) => (
            <button
              key={quest.id}
              type="button"
              onClick={() => openQuest(quest)}
              className="group border-border bg-card hover:border-primary/40 hover:bg-secondary/40 flex items-center gap-4 rounded-sm border p-3 text-left transition-colors"
            >
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-foreground truncate text-sm font-medium">{quest.name}</span>
                  <QuestStatusBadge status={quest.status} />
                </div>
                <div className="text-muted-foreground flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs">
                  <span>{quest.trader}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="size-3" />
                    {quest.map}
                  </span>
                  <span>Lvl {quest.level}</span>
                  {quest.keyItems.length > 0 && (
                    <span className="flex items-center gap-1">
                      <Package className="size-3" />
                      {quest.keyItems.length} item
                      {quest.keyItems.length > 1 ? "s" : ""}
                    </span>
                  )}
                </div>
              </div>
              <div className="text-muted-foreground hidden max-w-xs flex-1 truncate text-xs md:block">
                {quest.objectives[0]}
                {quest.objectives.length > 1 && ` +${quest.objectives.length - 1} more`}
              </div>
              <ChevronRight className="text-muted-foreground group-hover:text-primary size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </button>
          ))}
        </div>
      )}

      <QuestDetailPanel quest={selected} open={open} onOpenChange={setOpen} />
    </div>
  );
}
