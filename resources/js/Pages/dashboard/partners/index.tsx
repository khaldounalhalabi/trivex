import ActionsButtons from "@/components/datatable/ActionsButtons";
import DataTable from "@/components/datatable/DataTable";
import Partner from "@/Models/Partner";
import Http from "@/Modules/Http/Http";
import ImagePreview from "@/components/show/ImagePreview";

const Index = () => {
    return (
        <DataTable
            title="Partner Table"
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
                Http.make<Partner[]>().get(
                    route("v1.web.protected.partners.data"),
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
                {
                    name: "logo",
                    label: "Logo",
                    render(data) {
                        return (
                            <div className="aspect-square h-16 w-16">
                                <ImagePreview src={data.url} />
                            </div>
                        );
                    },
                },
                {
                    label: "Options",
                    render: (_data, record, setHidden, revalidate) => (
                        <ActionsButtons
                            buttons={["edit", "show"]}
                            baseUrl={route("v1.web.protected.partners.index")}
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
