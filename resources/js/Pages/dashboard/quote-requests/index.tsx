import ActionsButtons from "@/components/datatable/ActionsButtons";
import DataTable from "@/components/datatable/DataTable";
import QuoteRequest from "@/Models/QuoteRequest";
import Http from "@/Modules/Http/Http";

const Index = () => {
    return (
        <DataTable
            title="Quote Requests"
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
                Http.make<QuoteRequest[]>().get(
                    route("v1.web.protected.quote.requests.data"),
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
                { name: "name", label: "Name", sortable: true },
                { name: "email", label: "Email", sortable: true },
                { name: "phone", label: "Phone", sortable: true },
                { name: "location", label: "Location", sortable: true },
                {
                    name: "operating_hours",
                    label: "Operating Hours",
                    sortable: true,
                },
                { name: "headcount", label: "Headcount", sortable: true },
                {
                    name: "service_interest",
                    label: "Service Interest",
                    sortable: true,
                },
                {
                    name: "special_requirements",
                    label: "Special Requirements",
                    sortable: true,
                },
                {
                    label: "Options",
                    render: (_data, record, setHidden, revalidate) => (
                        <ActionsButtons
                            buttons={["delete", "show"]}
                            baseUrl={route(
                                "v1.web.protected.quote.requests.index",
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
