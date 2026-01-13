import ActionsButtons from "@/components/datatable/ActionsButtons";
import DataTable from "@/components/datatable/DataTable";
import Select from "@/components/form/fields/selects/Select";
import { Badge } from "@/components/ui/shadcn/badge";
import { Button } from "@/components/ui/shadcn/button";
import NewsletterEmail from "@/Models/NewsletterEmail";
import Http from "@/Modules/Http/Http";
import { Link } from "@inertiajs/react";
import { Mail } from "lucide-react";

const Index = ({ exportables }: { exportables: string[] }) => {
    return (
        <DataTable
            title="NewsletterEmail Table"
            exportables={exportables}
            getDataArray={(res) => res.data}
            getTotalPages={(res) => res?.paginate?.total_pages ?? 0}
            getTotalRecords={(res) => res.paginate?.total ?? 0}
            extraButtons={() => (
                <Link
                    href={route("v1.web.protected.newsletter.emails.send.page")}
                >
                    <Button size={"icon"}>
                        <Mail />
                    </Button>
                </Link>
            )}
            filter={(params, setParams) => {
                return (
                    <Select
                        data={["All", "Subscribed", "Not Subscribed"]}
                        selected={
                            params.is_subscribed != undefined &&
                            params.is_subscribed != null
                                ? params.is_subscribed
                                    ? "Subscribed"
                                    : "Not Subscribed"
                                : "All"
                        }
                        onChange={(v) =>
                            setParams((prev) => ({
                                ...prev,
                                is_subscribed:
                                    v == "Subscribed"
                                        ? true
                                        : v == "Not Subscribed"
                                          ? false
                                          : undefined,
                            }))
                        }
                    />
                );
            }}
            api={(
                page?: number | undefined,
                search?: string | undefined,
                sortCol?: string | undefined,
                sortDir?: string | undefined,
                perPage?: number | undefined,
                params?: object | undefined,
            ) =>
                Http.make<NewsletterEmail[]>().get(
                    route("v1.web.protected.newsletter.emails.data"),
                    {
                        page: page,
                        search: search,
                        sort_col: sortCol,
                        sort_dir: sortDir,
                        limit: perPage,
                        ...params,
                    },
                )
            }
            schema={[
                {
                    name: "id",
                    label: "ID",
                    sortable: true,
                },
                { name: "email", label: "Email", sortable: true },
                {
                    name: "is_subscribed",
                    label: "Is Subscribed ?",
                    sortable: true,
                    render: (cell, record, setHidden, revalidate) => {
                        return cell ? (
                            <Badge variant={"success"}>Yes</Badge>
                        ) : (
                            <Badge variant={"destructive"}>No</Badge>
                        );
                    },
                },
                {
                    label: "Options",
                    render: (_data, record, setHidden, revalidate) => (
                        <ActionsButtons
                            buttons={["delete"]}
                            baseUrl={route(
                                "v1.web.protected.newsletter.emails.index",
                            )}
                            id={record?.id ?? 0}
                            setHidden={setHidden}
                        />
                    ),
                },
            ]}
        />
    );
};

export default Index;
