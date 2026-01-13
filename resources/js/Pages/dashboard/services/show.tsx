import Gallery from "@/components/show/Gallery";
import LongTextField from "@/components/show/LongTextField";
import SmallTextField from "@/components/show/SmallTextField";
import { Label } from "@/components/ui/labels-and-values/Label";
import PageCard from "@/components/ui/PageCard";
import { Button } from "@/components/ui/shadcn/button";
import Service from "@/Models/Service";
import { Link } from "@inertiajs/react";

const Show = ({ service }: { service: Service }) => {
    return (
        <PageCard
            title="Service Details"
            actions={
                <div className="flex items-center justify-between">
                    <Link
                        href={route(
                            "v1.web.protected.services.edit",
                            service.id,
                        )}
                    >
                        <Button>Edit</Button>
                    </Link>
                </div>
            }
        >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <SmallTextField label="Name" value={service.name} />
                <LongTextField
                    label="Small Description"
                    value={service.small_description}
                    className={"md:col-span-2"}
                />
                <LongTextField
                    label="Description"
                    value={service.description}
                    className={"md:col-span-2"}
                />
                <Label label={"Cover"} col className={"md:col-span-2"}>
                    <Gallery sources={[service?.cover?.url]} />
                </Label>
                <Label label={"Image"} col className={"md:col-span-2"}>
                    <Gallery sources={[service?.image?.url]} />
                </Label>
            </div>
        </PageCard>
    );
};

export default Show;
