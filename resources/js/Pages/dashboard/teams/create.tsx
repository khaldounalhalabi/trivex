import Form from "@/components/form/Form";
import Input from "@/components/form/fields/Input";
import PageCard from "@/components/ui/PageCard";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const Create = () => {
    const { post, setData, processing } = useForm<{
        _method?: "PUT" | "POST";
        name: string;
        role: string;
        experience: number;
    }>();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("v1.web.protected.teams.store"));
    };

    return (
        <PageCard title="Add New Team">
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
                        name="role"
                        label={"Role"}
                        type={"text"}
                        onChange={(e) => setData("role", e.target?.value)}
                        required
                    />
                    <Input
                        name="experience"
                        label={"Experience"}
                        type={"number"}
                        onChange={(e) =>
                            setData("experience", e.target?.valueAsNumber)
                        }
                        required
                    />
                </div>
            </Form>
        </PageCard>
    );
};

export default Create;
