import Gallery from "@/components/show/Gallery";
import SmallTextField from "@/components/show/SmallTextField";
import PageCard from "@/components/ui/PageCard";
import { Button } from "@/components/ui/shadcn/button";
import Partner from "@/Models/Partner";
import { Link } from "@inertiajs/react";

const Show = ({ partner }: { partner: Partner }) => {
    return (
        <PageCard
            title="Partner Details"
            actions={
                <div className="flex items-center justify-between">
                    <Link
                        href={route(
                            "v1.web.protected.partners.edit",
                            partner.id,
                        )}
                    >
                        <Button>Edit</Button>
                    </Link>
                </div>
            }
        >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <SmallTextField label="Name" value={partner.name} />
                <div className="dark:bg-dark my-2 mb-5 rounded-md bg-gray-50 p-4 text-xl font-bold dark:text-white">
                    <label className="text-lg font-semibold">Logo :</label>
                    <Gallery sources={[partner.logo?.url]} />
                </div>
            </div>
        </PageCard>
    );
};

export default Show;
