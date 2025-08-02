import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

type Props = {
    children: React.ReactNode;
};

export default async function MainLayout ({
    children,
}: Props) {
    return (
        <>
          <SidebarProvider>
          <AppSidebar/>
            <main>
                <SidebarTrigger />
                <div className="container">
                    {children}
                </div>
            </main>
            </SidebarProvider>
        </>
    )
}
