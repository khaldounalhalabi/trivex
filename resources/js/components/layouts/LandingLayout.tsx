import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { Toaster } from "@/components/ui/shadcn/sonner";
import { usePage } from "@inertiajs/react";
import { ReactNode } from "react";
import { toast } from "sonner";

const LandingLayout = ({ children }: { children: ReactNode }) => {
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
    return (
        <div className={"h-full w-full bg-landing-background"}>
            <Toaster position={"top-center"} />

            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default LandingLayout;
