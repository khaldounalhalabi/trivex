import Input from "@/Components/form/fields/Input";
import Textarea from "@/Components/form/fields/Textarea";
import Form from "@/Components/form/Form";
import PageCard from "@/Components/ui/PageCard";
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
                </div>
            </Form>
        </PageCard>
    );
};

export default Create;
