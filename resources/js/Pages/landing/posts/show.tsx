import Post from "@/Models/Post";
import { Link } from "@inertiajs/react";

function Show({ post, prev, next }: { post: Post; prev?: Post; next?: Post }) {
    return (
        <div className="min-h-screen bg-[#FDF6E3] pb-32">
            {/* Header / Hero Section */}
            <div className="relative max-h-[50vh] w-full overflow-hidden bg-black/25 md:h-[60vh] md:max-h-none">
                <img
                    src={post.image?.url}
                    className="h-full w-full opacity-60"
                    alt={post.title}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/80 to-transparent px-10 pb-20 lg:px-20">
                    <div className="max-w-4xl space-y-6">
                        <span className="bg-[#FFD566] px-4 py-1 text-xs font-bold tracking-widest text-black uppercase">
                            {post.category}
                        </span>
                        <h1 className="text-2xl leading-tight font-semibold text-white md:text-5xl lg:text-7xl">
                            {post.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="mx-auto mt-20 max-w-[85vw]">
                <div className="flex flex-col gap-20 lg:flex-row">
                    {/* Sidebar: Briefing Metadata */}
                    <aside className="order-2 lg:order-1 lg:w-1/4">
                        <div className="sticky top-32 space-y-12">
                            {/* Author Card */}
                            <div className="border-l-4 border-[#FFD566] py-2 pl-6">
                                <p className="mb-2 font-mono text-[10px] tracking-widest text-black/40 uppercase">
                                    Subject Matter Expert
                                </p>
                                <h4 className="text-xl font-bold text-black">
                                    {post.author_name}
                                </h4>
                                <p className="text-sm text-black/60 italic">
                                    {post.author_role}
                                </p>
                            </div>

                            {/* Briefing Intel */}
                            <div className="space-y-4">
                                <div className="flex justify-between border-b border-black/5 pb-2">
                                    <span className="font-mono text-[10px] text-black/40 uppercase">
                                        Date
                                    </span>
                                    <span className="text-sm font-semibold">
                                        {post.created_at}
                                    </span>
                                </div>
                                <div className="flex justify-between border-b border-black/5 pb-2">
                                    <span className="font-mono text-[10px] text-black/40 uppercase">
                                        Read Time
                                    </span>
                                    <span className="text-sm font-semibold">
                                        {post.read_time}
                                    </span>
                                </div>
                                <div className="flex justify-between border-b border-black/5 pb-2">
                                    <span className="font-mono text-[10px] text-black/40 uppercase">
                                        Classification
                                    </span>
                                    <span className="text-sm font-semibold text-green-600">
                                        Public Release
                                    </span>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Article Body */}
                    <article className="order-1 lg:order-2 lg:w-3/4">
                        <div className="prose-black prose prose-lg max-w-none border border-black/5 bg-white p-6 shadow-sm md:p-12 lg:p-20 prose-headings:font-bold prose-blockquote:border-[#FFD566] prose-blockquote:bg-[#FDF6E3] prose-blockquote:px-6 prose-blockquote:py-1">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: post.content,
                                }}
                            />
                        </div>

                        {/* Bottom Navigation */}
                        {(prev || next) && (
                            <div className="mt-12 flex flex-col items-stretch justify-between bg-black text-white md:flex-row">
                                {/* Previous Link */}
                                <div className="flex-1 border-b border-white/10 md:border-r md:border-b-0">
                                    {prev ? (
                                        <Link
                                            href={route(
                                                "landing.posts.show",
                                                prev.slug,
                                            )}
                                            className="group flex h-full flex-col gap-2 p-8 transition-colors hover:bg-white/5"
                                        >
                                            <span className="font-mono text-[10px] tracking-widest text-[#FFD566] uppercase">
                                                Previous Briefing
                                            </span>
                                            <span className="font-bold text-white transition-all group-hover:pl-2">
                                                ← {prev.title}
                                            </span>
                                        </Link>
                                    ) : (
                                        <div className="flex h-full flex-col gap-2 p-8 opacity-20 grayscale">
                                            <span className="font-mono text-[10px] tracking-widest uppercase">
                                                First Briefing
                                            </span>
                                            <span className="font-bold">
                                                No earlier records
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Next Link */}
                                <div className="flex-1">
                                    {next ? (
                                        <Link
                                            href={route(
                                                "landing.posts.show",
                                                next.slug,
                                            )}
                                            className="group flex h-full flex-col items-end gap-2 p-8 text-right transition-colors hover:bg-white/5"
                                        >
                                            <span className="font-mono text-[10px] tracking-widest text-[#FFD566] uppercase">
                                                Next Briefing
                                            </span>
                                            <span className="font-bold text-white transition-all group-hover:pr-2">
                                                {next.title} →
                                            </span>
                                        </Link>
                                    ) : (
                                        <div className="flex h-full flex-col items-end gap-2 p-8 text-right opacity-20 grayscale">
                                            <span className="font-mono text-[10px] tracking-widest uppercase">
                                                Latest Briefing
                                            </span>
                                            <span className="font-bold">
                                                End of sequence
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </article>
                </div>
            </div>
        </div>
    );
}

export default Show;
