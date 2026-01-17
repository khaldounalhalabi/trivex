import { ChevronDown } from "lucide-react";
import { useState } from "react";

const QuestionCard = ({
    question,
    answer,
}: {
    question: string;
    answer: string;
}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex h-fit w-full flex-col items-start rounded-lg border border-gray-100 bg-white p-8 shadow-sm transition-all">
            <div
                className={`flex w-full items-center justify-between ${open ? "border-b border-b-black pb-3" : ""}`}
            >
                <h1
                    className={`md:text-lg font-semibold ${open ? "text-landing-primary" : ""}`}
                >
                    {question}
                </h1>
                <button
                    onClick={() => setOpen((prev) => !prev)}
                    className={`cursor-pointer transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                >
                    <ChevronDown className="h-6 w-6 text-landing-primary" />
                </button>
            </div>

            <div
                className={`grid w-full transition-all duration-300 ease-in-out ${
                    open
                        ? "mt-4 grid-rows-[1fr] opacity-100"
                        : "mt-0 grid-rows-[0fr] opacity-0"
                }`}
            >
                <article className="order-1 w-full overflow-hidden lg:order-2">
                    {/* Change this line: added max-w-none and removed w-full! (not valid syntax) */}
                    <div className="prose-black prose prose-lg w-full max-w-none leading-relaxed prose-headings:font-bold prose-blockquote:border-landing-primary prose-blockquote:bg-landing-primary prose-blockquote:px-6 prose-blockquote:py-1">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: answer,
                            }}
                        />
                    </div>
                </article>
            </div>
        </div>
    );
};

export default QuestionCard;
