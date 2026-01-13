import Textarea from "@/components/form/fields/Textarea";
import TextEditor from "@/components/form/fields/TextEditor";
import Form from "@/components/form/Form";
import PageCard from "@/components/ui/PageCard";
import FAQ from "@/Models/FAQ";
import { useForm } from "@inertiajs/react";
import { ChangeEvent, FormEvent } from "react";

const Edit = ({ fAQ }: { fAQ: FAQ }) => {
    const { post, setData, processing } = useForm<{
        _method?: "PUT" | "POST";
        question: string;
        answer: string;
    }>({ _method: "PUT", question: fAQ?.question, answer: fAQ?.answer });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("v1.web.protected.f.a.qs.update", fAQ.id));
    };

    return (
        <PageCard title="Edit FAQ">
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
                            defaultValue={fAQ.question}
                            required
                        />
                    </div>
                    <div className="md:col-span-2">
                        <TextEditor
                            name="answer"
                            label={"Answer"}
                            onChange={(e) => setData("answer", e)}
                            defaultValue={fAQ.answer}
                            required
                        />
                    </div>
                </div>
            </Form>
        </PageCard>
    );
};

export default Edit;
