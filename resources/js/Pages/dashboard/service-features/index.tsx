import ActionsButtons from "@/components/datatable/ActionsButtons";
import DataTable from "@/components/datatable/DataTable";
import ImagePreview from "@/components/show/ImagePreview";
import ServiceFeature from "@/Models/ServiceFeature";
import Http from "@/Modules/Http/Http";
import { Link } from "@inertiajs/react";

const Index = () => {
    return (
        <DataTable
            title="Services Features"
            createUrl={route("v1.web.protected.service.features.create")}
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
                Http.make<ServiceFeature[]>().get(
                    route("v1.web.protected.service.features.data"),
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
                { name: "title", label: "Title", sortable: true },
                {
                    name: "service.name",
                    label: "Service Name",
                    render: (cell, record, setHidden, revalidate) => {
                        return (
                            record?.service_id && (
                                <Link
                                    className="underline hover:text-primary"
                                    href={route(
                                        "v1.web.protected.services.show",
                                        record?.service_id,
                                    )}
                                >
                                    {record?.service?.name}
                                </Link>
                            )
                        );
                    },
                },
                {
                    name: "image",
                    label: "Image",
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
                            buttons={["delete", "edit", "show"]}
                            baseUrl={route(
                                "v1.web.protected.service.features.index",
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
