import Media from "@/Models/Media";
import ServiceFeature from "@/Models/ServiceFeature";
interface Service {
    id: number;
    name: string;
    small_description: string;
    description: string;
    cover?: Media | undefined;
    image?: Media | undefined;
    service_features?: ServiceFeature[];
}

export default Service;
