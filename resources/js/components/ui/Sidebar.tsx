import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
    Sidebar as ShadcnSidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/shadcn/sidebar";
import { MiddlewareProps } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import { type Icon } from "@tabler/icons-react";
import {
    BadgePlus,
    BadgeQuestionMarkIcon,
    ContactIcon,
    GitCommitVerticalIcon,
} from "lucide-react";
import React from "react";

export function Sidebar({
    ...props
}: React.ComponentProps<typeof ShadcnSidebar>) {
    const sidebarItems: {
        title: string;
        href?: string;
        icon?: Icon;
        children?: {
            title: string;
            href?: string;
            icon?: Icon;
        }[];
    }[] = [
        {
            title: "Services",
            href: route("v1.web.protected.services.index"),
            icon: () => <GitCommitVerticalIcon />,
        },
        {
            title: "Services Features",
            href: route("v1.web.protected.service.features.index"),
            icon: () => <BadgePlus />,
        },
        {
            title: "Newsletter Contacts",
            href: route("v1.web.protected.newsletter.emails.index"),
            icon: () => <ContactIcon />,
        },
        {
            title: "FAQ",
            href: route("v1.web.protected.f.a.qs.index"),
            icon: () => <BadgeQuestionMarkIcon />,
        },
    ];

    const { authUser } = usePage<MiddlewareProps>().props;
    return (
        <ShadcnSidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:p-1.5!"
                        >
                            <Link href={route("v1.web.protected.index")}>
                                <BadgePlus className="size-5!" />
                                <span className="text-base font-semibold">
                                    Trivex
                                </span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={sidebarItems} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={authUser} />
            </SidebarFooter>
        </ShadcnSidebar>
    );
}
