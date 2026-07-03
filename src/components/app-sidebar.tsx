"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bot,
  Crosshair,
  FlaskConical,
  Hammer,
  LayoutDashboard,
  ListChecks,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { character } from "@/lib/tarkov-data";

const navMain = [
  { title: "Dashboard", href: "/", icon: LayoutDashboard },
  { title: "Quests", href: "/quests", icon: ListChecks },
  { title: "Hideout", href: "/hideout", icon: Hammer },
  { title: "Traders", href: "/traders", icon: Users },
  { title: "Crafts", href: "/crafts", icon: FlaskConical },
];

const navTools = [{ title: "AI Assistant", href: "/assistant", icon: Bot }];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent">
              <div className="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-sm">
                <Crosshair className="size-5" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-mono text-sm font-semibold tracking-wide">
                  TARKOV<span className="text-primary">.PROG</span>
                </span>
                <span className="text-muted-foreground text-xs">Operations Console</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-mono text-[0.65rem] tracking-widest">
            OPERATIONS
          </SidebarGroupLabel>
          <SidebarMenu>
            {navMain.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={active}
                    tooltip={item.title}
                    render={
                      <Link href={item.href}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    }
                  />
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="font-mono text-[0.65rem] tracking-widest">
            INTEL
          </SidebarGroupLabel>
          <SidebarMenu>
            {navTools.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={active}
                    tooltip={item.title}
                    render={
                      <Link href={item.href}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    }
                  />
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="border-border bg-secondary text-primary flex aspect-square size-8 items-center justify-center rounded-sm border font-mono text-xs font-semibold">
                {character.faction}
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-mono text-sm font-medium">{character.name}</span>
                <span className="text-muted-foreground text-xs">Level {character.level}</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
