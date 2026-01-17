import Input from "@/components/form/fields/Input";
import Radio from "@/components/form/fields/Radio";
import Textarea from "@/components/form/fields/Textarea";
import TextEditor from "@/components/form/fields/TextEditor";
import Form from "@/components/form/Form";
import PageCard from "@/components/ui/PageCard";
import { useForm } from "@inertiajs/react";
import { ChangeEvent, FormEvent } from "react";

const Create = () => {
    const { post, setData, processing } = useForm<{
        _method?: "PUT" | "POST";
        title: string;
        slug: string;
        category: string;
        read_time: string;
        author_name: string;
        author_role: string;
        is_featured: boolean;
        excerpt: string;
        content: string;
        image?: File | undefined;
    }>();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("v1.web.protected.posts.store"));
    };

    return (
        <PageCard title="Add New Post">
            <Form onSubmit={onSubmit} processing={processing}>
                <div
                    className={`grid grid-cols-1 items-start gap-5 md:grid-cols-2`}
                >
                    <Input
                        name="title"
                        label={"Title"}
                        type={"text"}
                        onChange={(e) => setData("title", e.target?.value)}
                        required
                    />
                    <Input
                        name="slug"
                        label={"Slug"}
                        type={"text"}
                        onChange={(e) => setData("slug", e.target?.value)}
                        required
                    />
                    <Input
                        name="category"
                        label={"Category"}
                        type={"text"}
                        onChange={(e) => setData("category", e.target?.value)}
                        required
                    />
                    <Input
                        name="read_time"
                        label={"Read Time"}
                        type={"text"}
                        onChange={(e) => setData("read_time", e.target?.value)}
                        required
                    />
                    <Input
                        name="author_name"
                        label={"Author Name"}
                        type={"text"}
                        onChange={(e) =>
                            setData("author_name", e.target?.value)
                        }
                        required
                    />
                    <Input
                        name="author_role"
                        label={"Author Role"}
                        type={"text"}
                        onChange={(e) =>
                            setData("author_role", e.target?.value)
                        }
                        required
                    />
                    <Radio
                        name="is_featured"
                        items={[
                            { label: "Featured", value: "true" },
                            { label: "Not Featured", value: "false" },
                        ]}
                        onChange={(e) => setData("is_featured", e == "true")}
                        checked={(v) => v == "false"}
                    />
                    <Input
                        name="image"
                        label={"Image"}
                        onChange={(e) => setData("image", e.target.files?.[0])}
                        type={"file"}
                        required
                    />
                    <div className="md:col-span-2">
                        <Textarea
                            name="excerpt"
                            label={"Excerpt"}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                                setData("excerpt", e.target.value)
                            }
                            required
                        />
                    </div>
                    <div className="md:col-span-2">
                        <TextEditor
                            name="content"
                            label={"Content"}
                            onChange={(e) => setData("content", e)}
                            required
                        />
                    </div>
                </div>
            </Form>
        </PageCard>
    );
};

export default Create;
