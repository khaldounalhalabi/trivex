import Gallery from "@/components/show/Gallery";
import LongTextField from "@/components/show/LongTextField";
import SmallTextField from "@/components/show/SmallTextField";
import { Label } from "@/components/ui/labels-and-values/Label";
import PageCard from "@/components/ui/PageCard";
import { Button } from "@/components/ui/shadcn/button";
import ServiceFeature from "@/Models/ServiceFeature";
import { Link } from "@inertiajs/react";

const Show = ({ serviceFeature }: { serviceFeature: ServiceFeature }) => {
    return (
        <PageCard
            title="Service Feature Details"
            actions={
                <div className="flex items-center justify-between">
                    <Link
                        href={route(
                            "v1.web.protected.service.features.edit",
                            serviceFeature.id,
                        )}
                    >
                        <Button>Edit</Button>
                    </Link>
                </div>
            }
        >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <SmallTextField label="Title" value={serviceFeature.title} />
                <SmallTextField
                    label="Service"
                    value={serviceFeature?.service?.name}
                />
                <LongTextField
                    label="Description"
                    value={serviceFeature.description}
                    className={"md:col-span-2"}
                />
                <Label label={"Image"} col className={"md:col-span-2"}>
                    <Gallery sources={[serviceFeature?.image?.url]} />
                </Label>
            </div>
        </PageCard>
    );
};

export default Show;
