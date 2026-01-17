import SmallTextField from "@/components/show/SmallTextField";
import PageCard from "@/components/ui/PageCard";
import QuoteRequest from "@/Models/QuoteRequest";

const Show = ({ quoteRequest }: { quoteRequest: QuoteRequest }) => {
    return (
        <PageCard title="Quote Request Details">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <SmallTextField label="Name" value={quoteRequest.name} />
                <SmallTextField label="Email" value={quoteRequest.email} />
                <SmallTextField label="Phone" value={quoteRequest.phone} />

                <div className={"md:col-span-2"}>
                    <SmallTextField
                        label="Location"
                        value={quoteRequest.location}
                    />
                </div>
                <div className={"md:col-span-2"}>
                    <SmallTextField
                        label="Operating Hours"
                        value={quoteRequest.operating_hours}
                    />
                </div>
                <div className={"md:col-span-2"}>
                    <SmallTextField
                        label="Headcount"
                        value={quoteRequest.headcount}
                    />
                </div>
                <div className={"md:col-span-2"}>
                    <SmallTextField
                        label="Service Interest"
                        value={quoteRequest.service_interest}
                    />
                </div>
                <div className={"md:col-span-2"}>
                    <SmallTextField
                        label="Special Requirements"
                        value={quoteRequest.special_requirements}
                    />
                </div>
            </div>
        </PageCard>
    );
};

export default Show;
