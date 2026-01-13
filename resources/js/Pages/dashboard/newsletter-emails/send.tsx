import Form from "@/components/form/Form";
import Input from "@/components/form/fields/Input";
import Textarea from "@/components/form/fields/Textarea";
import PageCard from "@/components/ui/PageCard";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const Send = () => {
    const { post, setData, processing } = useForm<{
        title: string;
        subtitle: string;
        message: string;
        tip?: string | undefined;
    }>();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("v1.web.protected.newsletter.emails.send"));
    };

    return (
        <PageCard title="Send Newsletter Email">
            <Form onSubmit={onSubmit} processing={processing}>
                <div
                    className={`grid grid-cols-1 items-start gap-5 md:grid-cols-2`}
                >
                    <Input
                        name="title"
                        label={"Title"}
                        type={"text"}
                        onChange={(e) => setData("title", e.target?.value)}
                        required
                    />
                    <Input
                        name="subtitle"
                        label={"Subtitle"}
                        onChange={(e) => setData("subtitle", e.target.value)}
                        required
                    />
                    <div className="md:col-span-2">
                        <Textarea
                            name="message"
                            label={"Message"}
                            onChange={(e) => setData("message", e.target.value)}
                            required
                        />
                    </div>
                    <div className="md:col-span-2">
                        <Textarea
                            name="tip"
                            label={"Tip (optional)"}
                            onChange={(e) => setData("tip", e.target.value)}
                        />
                    </div>
                </div>
            </Form>
        </PageCard>
    );
};

export default Send;
