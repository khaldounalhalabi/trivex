import Input from "@/Components/form/fields/Input";
import Textarea from "@/Components/form/fields/Textarea";
import Form from "@/Components/form/Form";
import PageCard from "@/Components/ui/PageCard";
import Media from "@/Models/Media";
import Service from "@/Models/Service";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const Edit = ({ service }: { service: Service }) => {
    const { post, setData, processing } = useForm<{
        _method?: "PUT" | "POST";
        name: string;
        small_description: string;
        description: string;
        cover?: File | undefined | Media;
        image?: File | undefined | Media;
    }>({
        _method: "PUT",
        name: service?.name,
        small_description: service?.small_description,
        description: service?.description,
        cover: service.cover,
        image: service.image,
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("v1.web.protected.services.update", service.id));
    };

    return (
        <PageCard title="Edit Service">
            <Form onSubmit={onSubmit} processing={processing}>
                <div
                    className={`grid grid-cols-1 items-start gap-5 md:grid-cols-2`}
                >
                    <Input
                        name="name"
                        label={"Name"}
                        type={"text"}
                        onChange={(e) => setData("name", e.target?.value)}
                        defaultValue={service.name}
                        required
                    />
                    <Input
                        name="cover"
                        label={"Cover"}
                        onChange={(e) => setData("cover", e.target.files?.[0])}
                        type={"file"}
                    />
                    <Input
                        name="image"
                        label={"Image"}
                        onChange={(e) => setData("image", e.target.files?.[0])}
                        type={"file"}
                    />
                    <div className="md:col-span-2">
                        <Textarea
                            name="small_description"
                            label={"Small Description"}
                            onChange={(e) =>
                                setData("small_description", e.target.value)
                            }
                            defaultValue={service.small_description}
                            required
                        />
                    </div>
                    <div className="md:col-span-2">
                        <Textarea
                            name="description"
                            label={"Description"}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            defaultValue={service.description}
                            required
                        />
                    </div>
                </div>
            </Form>
        </PageCard>
    );
};

export default Edit;
