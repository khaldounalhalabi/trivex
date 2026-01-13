import Input from "@/components/form/fields/Input";
import Textarea from "@/components/form/fields/Textarea";
import Form from "@/components/form/Form";
import PageCard from "@/components/ui/PageCard";
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
        service_overview: {
            description: string | undefined;
            images: File[] | Media[] | undefined;
        };
    }>({
        _method: "PUT",
        name: service?.name,
        small_description: service?.small_description,
        description: service?.description,
        cover: service.cover,
        image: service.image,
        service_overview: {
            description: service.service_overview?.description,
            images: service.service_overview?.images,
        },
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
                    <Input
                        name="service_overview.images"
                        label={"Overview Images (Multiple Images Allowed)"}
                        onChange={(e) => {
                            const files = Array.from(e.target.files ?? []);
                            setData("service_overview.images", files);
                        }}
                        type={"file"}
                        multiple={true}
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
                    <div className="md:col-span-2">
                        <Textarea
                            name={"service_overview.description"}
                            label={"Overview Description"}
                            defaultValue={service.service_overview?.description}
                            required
                            onChange={(e) => {
                                setData(
                                    "service_overview.description",
                                    e.target.value,
                                );
                            }}
                        />
                    </div>
                </div>
            </Form>
        </PageCard>
    );
};

export default Edit;
