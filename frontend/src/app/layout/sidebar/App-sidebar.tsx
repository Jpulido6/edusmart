import React from "react";
import { LogOut } from "lucide-react";
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
import { itemsAdmin, ItemsProps, itemsTeacher } from "./itemRoute.config";
import { useAppStore, UserRole } from "@/app/store/AppStore";

export function AppSidebar() {
  const [items, setItems] = React.useState<ItemsProps[]>([]);
  const onLogOut = useAppStore((state) => state.logout);
  const role = useAppStore((state) => state.user?.role);
  React.useEffect(() => {
    if(role === UserRole.ADMIN) setItems(itemsAdmin)
      else setItems(itemsTeacher)
  }, [role]);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
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
              <div>
                <LogOut onClick={onLogOut} className="cursor-pointer">
                  Cerrar sesion
                </LogOut>
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
