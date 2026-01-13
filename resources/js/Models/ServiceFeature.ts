import Media from "@/Models/Media";
import Service from "@/Models/Service";
interface ServiceFeature {
    id: number;
    title: string;
    service_id: number;
    description: string;
    image?: Media | undefined;
    service?: Service;
}

export default ServiceFeature;
