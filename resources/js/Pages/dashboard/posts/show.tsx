import Gallery from "@/components/show/Gallery";
import LongTextField from "@/components/show/LongTextField";
import SmallTextField from "@/components/show/SmallTextField";
import { Label } from "@/components/ui/labels-and-values/Label";
import PageCard from "@/components/ui/PageCard";
import { Button } from "@/components/ui/shadcn/button";
import Post from "@/Models/Post";
import { Link } from "@inertiajs/react";

const Show = ({ post }: { post: Post }) => {
    return (
        <PageCard
            title="Post Details"
            actions={
                <div className="flex items-center justify-between">
                    <Link href={route("v1.web.protected.posts.edit", post.id)}>
                        <Button>Edit</Button>
                    </Link>
                </div>
            }
        >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <SmallTextField label="Title" value={post.title} />
                <SmallTextField label="Slug" value={post.slug} />
                <SmallTextField label="Category" value={post.category} />
                <SmallTextField label="Read Time" value={post.read_time} />
                <SmallTextField label="Author Name" value={post.author_name} />
                <SmallTextField label="Author Role" value={post.author_role} />
                <SmallTextField
                    label="Is Featured ?"
                    value={post.is_featured ? "Yes" : "No"}
                />
                <LongTextField
                    className={"md:col-span-2"}
                    label="Excerpt"
                    value={post.excerpt}
                />
                <LongTextField
                    className={"md:col-span-2"}
                    label="Content"
                    value={post.content}
                />
                <Label label={"Image"} col className={"md:col-span-2"}>
                    <Gallery sources={[post?.image?.url]} />
                </Label>
            </div>
        </PageCard>
    );
};

export default Show;
