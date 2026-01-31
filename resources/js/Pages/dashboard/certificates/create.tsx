import Form from "@/Components/form/Form";
import Input from "@/Components/form/fields/Input";
import Select from "@/Components/form/fields/selects/Select";
import PageCard from "@/Components/ui/PageCard";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const Create = () => {
    const { post, setData, processing } = useForm<{
        _method?: "PUT" | "POST";
        code: string;
        client_name: string;
        address: string;
        standard: string;
        status: string;
        due_date: string;
    }>();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("v1.web.protected.certificates.store"));
    };

    return (
        <PageCard title="Add New Certificate">
            <Form onSubmit={onSubmit} processing={processing}>
                <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-5 items-start`}
                >
                    <Input
                        name="code"
                        label={"Code"}
                        type={"text"}
                        onChange={(e) => setData("code", e.target?.value)}
                        required
                    />
                    <Input
                        name="client_name"
                        label={"Client Name"}
                        type={"text"}
                        onChange={(e) =>
                            setData("client_name", e.target?.value)
                        }
                        required
                    />
                    <Input
                        name="address"
                        label={"Address"}
                        type={"text"}
                        onChange={(e) => setData("address", e.target?.value)}
                        required
                    />
                    <Input
                        name="standard"
                        label={"Standard"}
                        type={"text"}
                        onChange={(e) => setData("standard", e.target?.value)}
                        required
                    />
                    <Select
                        data={[
                            { label: "Valid", value: "valid" },
                            { label: "Not Valid", value: "not_valid" },
                        ]}
                        onChange={(v) => {
                            setData("status", v);
                        }}
                        label={"Status"}
                        name={"status"}
                    />
                    <Input
                        name="due_date"
                        label={"Due Date"}
                        type={"date"}
                        onChange={(e) => setData("due_date", e.target?.value)}
                        required
                    />
                </div>
            </Form>
        </PageCard>
    );
};

export default Create;
