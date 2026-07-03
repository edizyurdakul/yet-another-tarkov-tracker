"use client";

import { Radio, Search } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { character } from "@/lib/tarkov-data";

export function DashboardHeader({ title }: { title: string }) {
  return (
    <header className="border-border bg-background/80 sticky top-0 z-30 flex h-14 shrink-0 items-center gap-2 border-b px-4 backdrop-blur">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-1 h-5" />
      <h1 className="text-foreground font-mono text-sm font-semibold tracking-wide">{title}</h1>

      <div className="ml-auto flex items-center gap-3">
        <div className="relative hidden md:block">
          <Search className="text-muted-foreground absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />
          <Input
            placeholder="Search items, quests…"
            className="bg-card h-9 w-56 pl-8 font-mono text-xs"
          />
        </div>

        <div className="border-border bg-card hidden items-center gap-2 rounded-sm border px-3 py-1.5 sm:flex">
          <Radio className="text-success size-3.5" />
          <span className="text-muted-foreground font-mono text-xs">{character.session}</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden flex-col items-end leading-none sm:flex">
            <span className="text-foreground font-mono text-xs font-medium">{character.name}</span>
            <span className="text-muted-foreground text-[0.65rem]">{character.edition}</span>
          </div>
          <Avatar className="border-border size-9 rounded-sm border">
            <AvatarFallback className="bg-secondary text-primary rounded-sm font-mono text-xs">
              {character.faction}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
