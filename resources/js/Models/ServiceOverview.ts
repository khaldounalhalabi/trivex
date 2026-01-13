import Media from "@/Models/Media";

interface ServiceOverview {
    service_id: number;
    description: string;
    images: Media[];
}

export default ServiceOverview;
