import Media from "@/Models/Media";
interface Post {
    id: number;
    title: string;
    slug: string;
    category: string;
    read_time: string;
    author_name: string;
    author_role: string;
    is_featured: boolean;
    excerpt: string;
    content: string;
    image?: Media | undefined;
    created_at: string;
}

export default Post;
