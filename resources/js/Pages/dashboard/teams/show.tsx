import SmallTextField from "@/components/show/SmallTextField";
import PageCard from "@/components/ui/PageCard";
import { Button } from "@/components/ui/shadcn/button";
import Team from "@/Models/Team";
import { Link } from "@inertiajs/react";

const Show = ({ team }: { team: Team }) => {
    return (
        <PageCard
            title="Team Details"
            actions={
                <div className="flex items-center justify-between">
                    <Link href={route("v1.web.protected.teams.edit", team.id)}>
                        <Button>Edit</Button>
                    </Link>
                </div>
            }
        >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <SmallTextField label="Name" value={team.name} />
                <SmallTextField label="Role" value={team.role} />
                <SmallTextField label="Experience" value={team.experience} />
            </div>
        </PageCard>
    );
};

export default Show;
