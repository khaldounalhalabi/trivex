import SmallTextField from "@/Components/show/SmallTextField";
import { Button } from "@/Components/ui/shadcn/button";
import PageCard from "@/Components/ui/PageCard";
import Certificate from "@/Models/Certificate";
import { Link } from "@inertiajs/react";

const Show = ({ certificate }: { certificate: Certificate }) => {
    return (
        <PageCard
            title="Certificate Details"
            actions={
                <div className="flex justify-between items-center">
                    <Link
                        href={route(
                            "v1.web.protected.certificates.edit",
                            certificate.id,
                        )}
                    >
                        <Button>Edit</Button>
                    </Link>
                </div>
            }
        >
            <div className="gap-5 grid grid-cols-1 md:grid-cols-2">
                <SmallTextField label="Code" value={certificate.code} />
                <SmallTextField
                    label="Client Name"
                    value={certificate.client_name}
                />
                <SmallTextField label="Address" value={certificate.address} />
                <SmallTextField label="Standard" value={certificate.standard} />
                <SmallTextField label="Status" value={certificate.status} />
                <SmallTextField label="Due Date" value={certificate.due_date} />
            </div>
        </PageCard>
    );
};

export default Show;
