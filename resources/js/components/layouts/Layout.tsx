import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/shadcn/sidebar";
import { Toaster } from "@/components/ui/shadcn/sonner";
import { Sidebar } from "@/components/ui/Sidebar";
import { usePage } from "@inertiajs/react";
import { registerPlugin } from "filepond";
import FilePondPluginFilePoster from "filepond-plugin-file-poster";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import React from "react";
import { toast } from "sonner";

const Layout = ({ children }: { children?: React.ReactNode }) => {
    if (usePage().props.message) {
        toast.info(usePage().props.message);
        usePage().props.message = undefined;
    }

    if (usePage().props.success) {
        toast.success(usePage().props.success);
        usePage().props.success = undefined;
    }

    if (usePage().props.error) {
        toast.error(usePage().props.error);
        usePage().props.success = undefined;
    }

    registerPlugin(
        FilePondPluginImageExifOrientation,
        FilePondPluginImagePreview,
        FilePondPluginFileValidateType,
        FilePondPluginFilePoster,
    );

    return (
        <ThemeProvider>
            <SidebarProvider
                style={
                    {
                        "--sidebar-width": "calc(var(--spacing) * 72)",
                        "--header-height": "calc(var(--spacing) * 12)",
                    } as React.CSSProperties
                }
            >
                <Toaster />
                <Sidebar variant="inset" side={"left"} />
                <SidebarInset>
                    <SiteHeader />
                    <div className="flex flex-1 flex-col">
                        <div className="@container/main flex flex-1 flex-col gap-2">
                            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                                {children}
                            </div>
                        </div>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </ThemeProvider>
    );
};

export default Layout;
