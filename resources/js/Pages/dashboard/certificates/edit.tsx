import Form from "@/Components/form/Form";
import Input from "@/Components/form/fields/Input";
import PageCard from "@/Components/ui/PageCard";
import Certificate from "@/Models/Certificate";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";
import Select from "@/Components/form/fields/selects/Select";

const Edit = ({ certificate }: { certificate: Certificate }) => {
    const { post, setData, processing } = useForm<{
        _method?: "PUT" | "POST";
        code: string;
        client_name: string;
        address: string;
        standard: string;
        status: string;
        due_date: string;
    }>({
        _method: "PUT",
        code: certificate?.code,
        client_name: certificate?.client_name,
        address: certificate?.address,
        standard: certificate?.standard,
        status: certificate?.status,
        due_date: certificate?.due_date,
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("v1.web.protected.certificates.update", certificate.id));
    };

    return (
        <PageCard title="Edit Certificate">
            <Form onSubmit={onSubmit} processing={processing}>
                <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-5 items-start`}
                >
                    <Input
                        name="code"
                        label={"Code"}
                        type={"text"}
                        onChange={(e) => setData("code", e.target?.value)}
                        defaultValue={certificate.code}
                        required
                    />
                    <Input
                        name="client_name"
                        label={"Client Name"}
                        type={"text"}
                        onChange={(e) =>
                            setData("client_name", e.target?.value)
                        }
                        defaultValue={certificate.client_name}
                        required
                    />
                    <Input
                        name="address"
                        label={"Address"}
                        type={"text"}
                        onChange={(e) => setData("address", e.target?.value)}
                        defaultValue={certificate.address}
                        required
                    />
                    <Input
                        name="standard"
                        label={"Standard"}
                        type={"text"}
                        onChange={(e) => setData("standard", e.target?.value)}
                        defaultValue={certificate.standard}
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
                        selected={certificate.status}
                    />
                    <Input
                        name="due_date"
                        label={"Due Date"}
                        type={"date"}
                        onChange={(e) => setData("due_date", e.target?.value)}
                        defaultValue={certificate.due_date}
                        required
                    />
                </div>
            </Form>
        </PageCard>
    );
};

export default Edit;
