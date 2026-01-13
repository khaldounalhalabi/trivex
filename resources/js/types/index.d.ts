import { AvailableLocales } from "@/Models/Translatable";
import User from "@/Models/User";
import "@inertiajs/core";
import { route as routeFn } from "ziggy-js";
// global.d.ts
declare module "@inertiajs/core" {
    export interface InertiaConfig {
        sharedPageProps: {
            authUser: User;
            availableLocales: AvailableLocales[] | string[];
            currentLocale: AvailableLocales | string;
            currentRoute: string;
            tinymceApiKey: string;
            asset: string;
            baseUrl: string;
            message?: string;
            success?: string;
            error?: string;
            contact?: {
                email: string;
                address: string;
                phone: string;
            };
        };
        flashDataType: {
            toast?: { type: "success" | "error"; message: string };
        };
        errorValueType: string[];
    }
}

declare global {
    var route: typeof routeFn;
}
