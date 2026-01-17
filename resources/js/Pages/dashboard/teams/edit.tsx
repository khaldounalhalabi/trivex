import Form from "@/components/form/Form";
import Input from "@/components/form/fields/Input";
import PageCard from "@/components/ui/PageCard";
import Team from "@/Models/Team";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const Edit = ({ team }: { team: Team }) => {
    const { post, setData, processing } = useForm<{
        _method?: "PUT" | "POST";
        name: string;
        role: string;
        experience: number;
    }>({
        _method: "PUT",
        name: team?.name,
        role: team?.role,
        experience: team?.experience,
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("v1.web.protected.teams.update", team.id));
    };

    return (
        <PageCard title="Edit Team Member">
            <Form onSubmit={onSubmit} processing={processing}>
                <div
                    className={`grid grid-cols-1 items-start gap-5 md:grid-cols-2`}
                >
                    <Input
                        name="name"
                        label={"Name"}
                        type={"text"}
                        onChange={(e) => setData("name", e.target?.value)}
                        defaultValue={team.name}
                        required
                    />
                    <Input
                        name="role"
                        label={"Role"}
                        type={"text"}
                        onChange={(e) => setData("role", e.target?.value)}
                        defaultValue={team.role}
                        required
                    />
                    <Input
                        name="experience"
                        label={"Experience"}
                        type={"number"}
                        onChange={(e) =>
                            setData("experience", e.target?.valueAsNumber)
                        }
                        defaultValue={team.experience}
                        required
                    />
                </div>
            </Form>
        </PageCard>
    );
};

export default Edit;
