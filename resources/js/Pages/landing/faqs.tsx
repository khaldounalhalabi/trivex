import QuestionCard from "@/components/landing/faqs/QuestionCard";
import NewsLetterFooter from "@/components/landing/home/NewsLetterFooter";
import { asset } from "@/helper";
import FAQ from "@/Models/FAQ";

const Faqs = ({ faqs }: { faqs: FAQ[] }) => {
    return (
        <div className={"h-full w-full"}>
            <div className={"relative flex flex-col items-center gap-5 py-16"}>
                <div className={"h-1 w-16 rounded-sm bg-landing-primary"} />
                <h1 className={"w-[41vw] text-center text-5xl"}>
                    Frequently Asked Questions
                </h1>
                <p className={"w-[61vw] pt-5 text-center text-sm text-wrap"}>
                    Straight answers to critical questions about our security
                    operations, standards, and capabilities.
                </p>
            </div>

            <div className={"w-full py-24"}>
                <div className={"flex flex-col items-center gap-5 px-16"}>
                    {faqs.map((f, index) => (
                        <QuestionCard question={f.question} answer={f.answer} />
                    ))}
                </div>
            </div>

            <NewsLetterFooter withFive={false} />
        </div>
    );
};

export default Faqs;
