import { AppSidebar } from "@/components/app-sidebar";
import Post from "@/components/Post";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

function Home() {
  return (
    <>
      <div className="fixed h-full z-10">
        <SidebarProvider>
          <AppSidebar />
          <div>
            <SidebarTrigger className="bg-card border hover:bg-primary m-1" />
          </div>
        </SidebarProvider>
      </div>

      <div className="flex min-h-screen">
        <div className="min-h-screen  w-48"></div>
        <div className="min-h-screen flex-1 p-5 gap-5 flex flex-col">
          <Post /> <Post /> <Post /> <Post />
        </div>
        <div className="fixed border-l right-0 bg-card h-screen w-72"></div>
        <div className="min-h-screen w-72"></div>
      </div>
    </>
  );
}

export default Home;
