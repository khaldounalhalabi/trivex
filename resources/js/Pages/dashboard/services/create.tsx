import Input from "@/components/form/fields/Input";
import Radio from "@/components/form/fields/Radio";
import Textarea from "@/components/form/fields/Textarea";
import Form from "@/components/form/Form";
import PageCard from "@/components/ui/PageCard";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const Create = () => {
    const { post, setData, processing } = useForm<{
        _method?: "PUT" | "POST";
        name: string;
        small_description: string;
        description: string;
        cover?: File | undefined;
        image?: File | undefined;
        service_overview: {
            description: string;
            images: File[];
        };
        is_featured?: boolean;
    }>();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("v1.web.protected.services.store"));
    };

    return (
        <PageCard title="Add New Service">
            <Form onSubmit={onSubmit} processing={processing}>
                <div
                    className={`grid grid-cols-1 items-start gap-5 md:grid-cols-2`}
                >
                    <Input
                        name="name"
                        label={"Name"}
                        type={"text"}
                        onChange={(e) => setData("name", e.target?.value)}
                        required
                    />
                    <Input
                        name="cover"
                        label={"Cover"}
                        onChange={(e) => setData("cover", e.target.files?.[0])}
                        type={"file"}
                        required
                    />
                    <Input
                        name="image"
                        label={"Image"}
                        onChange={(e) => setData("image", e.target.files?.[0])}
                        type={"file"}
                        required
                    />
                    <Input
                        name="service_overview.images"
                        label={"Overview Images (Multiple Images Allowed)"}
                        onChange={(e) => {
                            const files = Array.from(e.target.files ?? []);
                            setData("service_overview.images", files);
                        }}
                        type={"file"}
                        required
                        multiple={true}
                    />
                    <Radio
                        name={"is_featured"}
                        items={[
                            { label: "Yes", value: "true" },
                            { label: "No", value: "false" },
                        ]}
                        onChange={(e) => setData("is_featured", e == "true")}
                        checked={"false"}
                        label={"Is Featured ?"}
                    />
                    <div className="md:col-span-2">
                        <Textarea
                            name="small_description"
                            label={"Small Description"}
                            onChange={(e) =>
                                setData("small_description", e.target.value)
                            }
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
                            required
                        />
                    </div>
                    <div className="md:col-span-2">
                        <Textarea
                            name={"service_overview.description"}
                            label={"Overview Description"}
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

export default Create;
