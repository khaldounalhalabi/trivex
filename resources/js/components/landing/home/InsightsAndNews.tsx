import { asset } from "@/helper";
import Post from "@/Models/Post";
import { Link } from "@inertiajs/react";

function InsightsAndNews({ latestPosts }: { latestPosts: Post[] }) {
    const count = latestPosts.length;

    // Helper to get specific post data
    const p = (index: number) => latestPosts[index];

    return (
        <div className="mt-36 h-full w-full bg-landing-background pb-20">
            {/* Header Section remains unchanged */}
            <div className="relative flex h-full w-full items-center justify-center">
                <div className="z-10 flex flex-col items-center justify-between gap-8">
                    <h2 className="text-lg font-semibold uppercase">
                        Insights & Updates
                    </h2>
                    <h1 className="max-w-[49vw] text-center text-5xl font-semibold text-wrap">
                        Do not miss with many news and article from us
                    </h1>
                </div>
                <img
                    src={asset("/images/4.png")}
                    className="absolute -top-10 left-5 w-52 opacity-30"
                />
            </div>

            <div className="flex h-full w-full items-center justify-center pt-10">
                {/* FLUID GRID LOGIC:
                    1 Post: 1 Column
                    2+ Posts: 2 Columns
                */}
                <div
                    className={`grid w-[82vw] gap-5 ${count === 1 ? "grid-cols-1" : "grid-cols-2"}`}
                >
                    {/* SLOT 1: Always the Hero (Left) */}
                    {p(0) && (
                        <Link
                            href={route("landing.posts.show", p(0).slug)}
                            style={{
                                backgroundImage: `url(${p(0).image?.url})`,
                            }}
                            className="group h-full w-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
                        >
                            <div className="flex flex-col items-start gap-5 bg-transparent p-10">
                                <h1 className="group-hover:underline text-3xl font-semibold text-wrap text-white">
                                    {p(0).title}
                                </h1>
                                <p className="text-wrap text-white">
                                    {p(0).excerpt}
                                </p>
                            </div>
                        </Link>
                    )}

                    {/* RIGHT COLUMN: Only renders if 2 or more posts exist */}
                    {count > 1 && (
                        <div
                            className={`grid h-full gap-5 items-center${
                                count === 2 ? "grid-cols-1" : "grid-cols-2"
                            }`}
                        >
                            {/* SLOT 2: If only 2 posts total, this takes the whole right side.
                                If more, it takes the top span (col-span-2) */}
                            {p(1) && (
                                <Link
                                    href={route(
                                        "landing.posts.show",
                                        p(1).slug,
                                    )}
                                    style={{
                                        backgroundImage: `url(${p(1).image?.url})`,
                                    }}
                                    className={`group bg-cover ${count > 2 ? "col-span-2 h-full" : "h-full"} transition-transform duration-500 hover:scale-105`}
                                >
                                    <div className="flex flex-col items-start gap-2 bg-transparent p-6">
                                        <h1 className="text-2xl font-semibold text-wrap text-white group-hover:underline">
                                            {p(1).title}
                                        </h1>
                                        <p className="text-wrap text-white">
                                            {p(1).excerpt}
                                        </p>
                                    </div>
                                </Link>
                            )}

                            {/* SLOT 3: Only shows if 3+ posts */}
                            {p(2) && (
                                <Link
                                    href={route(
                                        "landing.posts.show",
                                        p(2).slug,
                                    )}
                                    style={{
                                        backgroundImage: `url(${p(2).image?.url})`,
                                    }}
                                    className={`group w-full h-full bg-cover bg-center ${count === 3 ? "col-span-2" : ""} transition-transform duration-500 hover:scale-105`}
                                >
                                    <div className="flex flex-col items-start gap-2 bg-transparent p-5">
                                        <h1 className="group-hover:underline text-lg font-semibold text-wrap text-white">
                                            {p(2).title}
                                        </h1>
                                        <p className="text-xs text-wrap text-white">
                                            {p(2).excerpt}
                                        </p>
                                    </div>
                                </Link>
                            )}

                            {/* SLOT 4: Only shows if exactly 4 posts */}
                            {p(3) && (
                                <Link
                                    href={route(
                                        "landing.posts.show",
                                        p(3).slug,
                                    )}
                                    style={{
                                        backgroundImage: `url(${p(3).image?.url})`,
                                    }}
                                    className="group h-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
                                >
                                    <div className="flex flex-col items-start gap-2 bg-transparent p-5">
                                        <h1 className="group-hover:underline text-lg font-semibold text-wrap text-white">
                                            {p(3).title}
                                        </h1>
                                        <p className="text-xs text-wrap text-white">
                                            {p(3).excerpt}
                                        </p>
                                    </div>
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default InsightsAndNews;
