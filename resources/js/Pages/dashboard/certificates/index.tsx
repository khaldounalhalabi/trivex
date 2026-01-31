import ActionsButtons from "@/Components/datatable/ActionsButtons";
import DataTable from "@/Components/datatable/DataTable";
import { Badge } from "@/Components/ui/shadcn/badge";
import Certificate from "@/Models/Certificate";
import Http from "@/Modules/Http/Http";

const Index = ({ exportables }: { exportables: string[] }) => {
    return (
        <DataTable
            title="Certificate Table"
            createUrl={route("v1.web.protected.certificates.create")}
            importRoute={route("v1.web.protected.certificates.import")}
            exportRoute={route("v1.web.protected.certificates.export")}
            importExampleRoute={route(
                "v1.web.protected.certificates.import.example",
            )}
            exportables={exportables}
            getDataArray={(res) => res.data}
            getTotalPages={(res) => res?.paginate?.total_pages ?? 0}
            getTotalRecords={(res) => res.paginate?.total ?? 0}
            api={(
                page?: number | undefined,
                search?: string | undefined,
                sortCol?: string | undefined,
                sortDir?: string | undefined,
                perPage?: number | undefined,
                params?: object | undefined,
            ) =>
                Http.make<Certificate[]>().get(
                    route("v1.web.protected.certificates.data"),
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
                { name: "code", label: "Code", sortable: true },
                { name: "client_name", label: "Client Name", sortable: true },
                { name: "address", label: "Address", sortable: true },
                { name: "standard", label: "Standard", sortable: true },
                {
                    name: "status",
                    label: "Status",
                    sortable: true,
                    render: (status) =>
                        status == "valid" ? (
                            <Badge variant={"success"}>Valid</Badge>
                        ) : (
                            <Badge variant={"destructive"}>Not Valid</Badge>
                        ),
                },
                { name: "due_date", label: "Due Date", sortable: true },
                {
                    label: "Options",
                    render: (_data, record, setHidden, revalidate) => (
                        <ActionsButtons
                            buttons={["delete", "edit", "show"]}
                            baseUrl={route(
                                "v1.web.protected.certificates.index",
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
