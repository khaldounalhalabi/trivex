import ActionsButtons from "@/components/datatable/ActionsButtons";
import DataTable from "@/components/datatable/DataTable";
import ImagePreview from "@/components/show/ImagePreview";
import { Badge } from "@/components/ui/shadcn/badge";
import Post from "@/Models/Post";
import Http from "@/Modules/Http/Http";

const Index = () => {
    return (
        <DataTable
            title="Posts"
            createUrl={route("v1.web.protected.posts.create")}
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
                Http.make<Post[]>().get(route("v1.web.protected.posts.data"), {
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
                { name: "title", label: "Title", sortable: true },
                { name: "category", label: "Category", sortable: true },
                { name: "read_time", label: "Read Time", sortable: true },
                { name: "author_name", label: "Author Name", sortable: true },
                { name: "author_role", label: "Author Role", sortable: true },
                {
                    name: "is_featured",
                    label: "Is Featured ?",
                    sortable: true,
                    render: (cell) => {
                        return cell ? (
                            <Badge variant={"success"}>Yes</Badge>
                        ) : (
                            <Badge variant={"destructive"}>No</Badge>
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
                    render: (_data, record, setHidden) => (
                        <ActionsButtons
                            buttons={["delete", "edit", "show"]}
                            baseUrl={route("v1.web.protected.posts.index")}
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
