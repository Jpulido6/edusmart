import React from "react";
import { LogOut } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
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

  const handleLogOut = () => {
    console.log('cerrar');
    
    onLogOut()
    localStorage.removeItem('token')
  }
  React.useEffect(() => {
    if (role === UserRole.ADMIN) setItems(itemsAdmin);
    else setItems(itemsTeacher);
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
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={handleLogOut}>
              <LogOut />
              Cerrar sesión
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
