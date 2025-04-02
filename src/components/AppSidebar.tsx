import { ChartSpline, ChartColumnIncreasing, ChartColumn, Grid3x3 } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

// Menu items.
const items = [
  {
    title: "Augmentation",
    url: "augmentation",
    icon: ChartColumn,
  },
  {
    title: "Performance",
    url: "performance",
    icon: ChartColumnIncreasing,
  },
  {
    title: "Confusion Matrix",
    url: "confusion",
    icon: Grid3x3,
  },

  {
    title: "Accuracy vs Epoch",
    url: "comparision",
    icon: ChartSpline,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="mt-16">
      <SidebarContent  className="bg-white">
        <SidebarGroup className="">
          <Link to="/performance-metrics">
            <SidebarGroupLabel className="text-lg text-black">
              Performance Metrics
            </SidebarGroupLabel>
          </Link>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="-">
                  <SidebarMenuButton asChild className="">
                    <Link to={item.url}>
                      <item.icon />
                      <span className=" text-black font-semibold">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
