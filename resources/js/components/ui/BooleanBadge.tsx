import { Badge } from "@/components/ui/shadcn/badge";

const BooleanBadge = ({ value }: { value: boolean }) => {
    return value ? (
        <Badge variant={"success"}>Yes</Badge>
    ) : (
        <Badge variant={"destructive"}>Yes</Badge>
    );
};

export default BooleanBadge;
