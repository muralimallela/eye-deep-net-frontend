import { AppSidebar } from "./AppSidebar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { Outlet, useOutlet } from "react-router-dom";

function Sidebar() {
  const outlet = useOutlet(); // Check if an Outlet is available

  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="flex flex-col flex-1">
        <SidebarTrigger className="fixed" />
        <Outlet />
        {!outlet && ( // Show text only if Outlet is not available
          <p className="text-center text-gray-500 mt-4">
            No content available. Please select a page.
          </p>
        )}
        
      </main>
    </SidebarProvider>
  );
}

export default Sidebar;
