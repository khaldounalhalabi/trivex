import Input from "@/components/form/fields/Input";
import Form from "@/components/form/Form";
import PageCard from "@/components/ui/PageCard";
import Media from "@/Models/Media";
import Partner from "@/Models/Partner";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const Edit = ({ partner }: { partner: Partner }) => {
    const { post, setData, processing } = useForm<{
        _method?: "PUT" | "POST";
        name: string;
        logo?: File | Media | undefined;
    }>({ _method: "PUT", name: partner?.name, logo: partner.logo });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("v1.web.protected.partners.update", partner.id));
    };

    return (
        <PageCard title="Edit Partner">
            <Form onSubmit={onSubmit} processing={processing}>
                <div
                    className={`grid grid-cols-1 items-start gap-5 md:grid-cols-2`}
                >
                    <Input
                        name="name"
                        label={"Name"}
                        type={"text"}
                        onChange={(e) => setData("name", e.target?.value)}
                        defaultValue={partner.name}
                        required
                    />
                    <Input
                        name="logo"
                        label={"Logo"}
                        onChange={(e) => setData("logo", e.target.files?.[0])}
                        type={"file"}
                    />
                </div>
            </Form>
        </PageCard>
    );
};

export default Edit;
