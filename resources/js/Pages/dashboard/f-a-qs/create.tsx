import Form from "@/components/form/Form";
import TextEditor from "@/components/form/fields/TextEditor";
import Textarea from "@/components/form/fields/Textarea";
import PageCard from "@/components/ui/PageCard";
import { useForm } from "@inertiajs/react";
import { ChangeEvent, FormEvent } from "react";

const Create = () => {
    const { post, setData, processing } = useForm<{
        _method?: "PUT" | "POST";
        question: string;
        answer: string;
    }>();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("v1.web.protected.f.a.qs.store"));
    };

    return (
        <PageCard title="Add New FAQ">
            <Form onSubmit={onSubmit} processing={processing}>
                <div
                    className={`grid grid-cols-1 items-start gap-5 md:grid-cols-2`}
                >
                    <div className="md:col-span-2">
                        <Textarea
                            name="question"
                            label={"Question"}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                                setData("question", e.target.value)
                            }
                            required
                        />
                    </div>
                    <div className="md:col-span-2">
                        <TextEditor
                            name="answer"
                            label={"Answer"}
                            onChange={(e) => setData("answer", e)}
                            required
                        />
                    </div>
                </div>
            </Form>
        </PageCard>
    );
};

export default Create;
