import PageCard from "@/components/ui/PageCard";
import { Button } from "@/components/ui/shadcn/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/shadcn/table";
import SettingTypeEnum from "@/Enums/SettingTypeEnum";
import { Setting } from "@/Models/Setting";
import { translate } from "@/Models/Translatable";
import { Link } from "@inertiajs/react";
import { PencilIcon } from "lucide-react";

export default function index({ settings }: { settings: Setting[] }) {
    return (
        <PageCard title={"Site Settings"}>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Label</TableHead>
                        <TableHead>Value</TableHead>
                        <TableHead>Options</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {settings.map((set, index) => (
                        <TableRow key={index}>
                            <TableCell>{set.id}</TableCell>
                            <TableCell>{translate(set.label)}</TableCell>
                            <TableCell className={"overflow-x-hidden max-w-96"}>
                                {set.structure.value_type ===
                                SettingTypeEnum.TRANSLATABLE
                                    ? // @ts-ignore
                                      translate(set.value)
                                    : set?.structure?.value_type ==
                                            SettingTypeEnum.RESOURCE &&
                                        set?.structure?.is_multiple
                                      ? // @ts-ignore
                                        set?.value?.join(" , ")
                                      : set.value}
                            </TableCell>
                            <TableCell>
                                <Link
                                    href={route(
                                        "v1.web.protected.settings.edit",
                                        set.id,
                                    )}
                                >
                                    <Button
                                        size={"icon"}
                                        type={"button"}
                                        variant={"secondary"}
                                    >
                                        <PencilIcon />
                                    </Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </PageCard>
    );
}
