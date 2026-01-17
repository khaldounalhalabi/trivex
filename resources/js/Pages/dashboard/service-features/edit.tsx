import Input from "@/components/form/fields/Input";
import ApiSelect from "@/components/form/fields/selects/ApiSelect";
import Textarea from "@/components/form/fields/Textarea";
import Form from "@/components/form/Form";
import PageCard from "@/components/ui/PageCard";
import Media from "@/Models/Media";
import Service from "@/Models/Service";
import ServiceFeature from "@/Models/ServiceFeature";
import Http from "@/Modules/Http/Http";
import { useForm } from "@inertiajs/react";
import { ChangeEvent, FormEvent } from "react";

const Edit = ({ serviceFeature }: { serviceFeature: ServiceFeature }) => {
    const { post, setData, processing } = useForm<{
        _method?: "PUT" | "POST";
        title: string;
        service_id: number;
        description: string;
        image?: File | undefined | Media;
    }>({
        _method: "PUT",
        title: serviceFeature?.title,
        description: serviceFeature?.description,
        service_id: serviceFeature?.service_id,
        image: serviceFeature.image,
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(
            route(
                "v1.web.protected.service.features.update",
                serviceFeature.id,
            ),
        );
    };

    return (
        <PageCard title="Edit Service Feature">
            <Form onSubmit={onSubmit} processing={processing}>
                <div
                    className={`grid grid-cols-1 items-start gap-5 md:grid-cols-2`}
                >
                    <Input
                        name="title"
                        label={"Title"}
                        type={"text"}
                        onChange={(e) => setData("title", e.target?.value)}
                        defaultValue={serviceFeature.title}
                        required
                    />
                    <Input
                        name="image"
                        label={"Image"}
                        onChange={(e) => setData("image", e.target.files?.[0])}
                        type={"file"}
                    />
                    <ApiSelect
                        name="service_id"
                        label={"Service"}
                        api={(page, search) =>
                            Http.make<Service[]>().get(
                                route("v1.web.protected.services.data"),
                                { page: page, search: search },
                            )
                        }
                        getDataArray={(response) => response?.data ?? []}
                        getIsLast={(data) =>
                            data?.paginate?.is_last_page ?? false
                        }
                        getTotalPages={(data) =>
                            data?.paginate?.total_pages ?? 0
                        }
                        onChange={(e) =>
                            setData("service_id", Number(e.target.value))
                        }
                        optionLabel={"name"}
                        optionValue={"id"}
                        defaultValue={serviceFeature?.service}
                        required
                    />
                    <div className="md:col-span-2">
                        <Textarea
                            name="description"
                            label={"Description"}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                                setData("description", e.target.value)
                            }
                            defaultValue={serviceFeature.description}
                            required
                        />
                    </div>
                </div>
            </Form>
        </PageCard>
    );
};

export default Edit;
