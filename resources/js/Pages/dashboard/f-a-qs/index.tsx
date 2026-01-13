import ActionsButtons from "@/components/datatable/ActionsButtons";
import DataTable from "@/components/datatable/DataTable";
import FAQ from "@/Models/FAQ";
import Http from "@/Modules/Http/Http";

const Index = () => {
    return (
        <DataTable
            title="FAQ Table"
            createUrl={route("v1.web.protected.f.a.qs.create")}
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
                Http.make<FAQ[]>().get(route("v1.web.protected.f.a.qs.data"), {
                    page: page,
                    search: search,
                    sort_col: sortCol,
                    sort_dir: sortDir,
                    limit: perPage,
                    ...params,
                })
            }
            schema={[
                {
                    name: "id",
                    label: "ID",
                    sortable: true,
                },
                {
                    name: "question",
                    label: "Question",
                    sortable: true,
                },
                {
                    label: "Options",
                    render: (_data, record, setHidden, revalidate) => (
                        <ActionsButtons
                            buttons={["delete", "edit", "show"]}
                            baseUrl={route("v1.web.protected.f.a.qs.index")}
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
