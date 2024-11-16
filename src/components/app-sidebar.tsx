import { CircleUser, Newspaper, MessageSquareText, LogOut } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Feeds",
    url: "#",
    icon: Newspaper,
  },
  {
    title: "Chats",
    url: "#",
    icon: MessageSquareText,
  },
  {
    title: "Profile",
    url: "#",
    icon: CircleUser,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r ">
      <SidebarContent className="pt-16 bg-card">
        <SidebarGroup>
          <SidebarGroupLabel className="hidden">Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="bg-card">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="flex justify-center items-center bg-[#1b1b1b]"
              asChild
            >
              <a href={"#"}>
                <span>{"Logout"}</span>
                <LogOut />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
