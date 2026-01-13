import Media from "@/Models/Media";
interface Service {
    id: number;
    name: string;
    small_description: string;
    description: string;
    cover?: Media | undefined;
    image?: Media | undefined;
}

export default Service;
