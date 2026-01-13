import LongTextField from "@/components/show/LongTextField";
import PageCard from "@/components/ui/PageCard";
import { Button } from "@/components/ui/shadcn/button";
import FAQ from "@/Models/FAQ";
import { Link } from "@inertiajs/react";

const Show = ({ fAQ }: { fAQ: FAQ }) => {
    return (
        <PageCard
            title="FAQ Details"
            actions={
                <div className="flex items-center justify-between">
                    <Link href={route("v1.web.protected.f.a.qs.edit", fAQ.id)}>
                        <Button>Edit</Button>
                    </Link>
                </div>
            }
        >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2"></div>

            <LongTextField label="Question" value={fAQ.question} />
            <LongTextField label="Answer" value={fAQ.answer} />
        </PageCard>
    );
};

export default Show;
