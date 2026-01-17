import Post from "@/Models/Post";
import Paginated from "@/types/PaginatedData";
import { Link } from "@inertiajs/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

function Index({
    posts,
    featured,
}: {
    posts: Paginated<Post>;
    featured: Post[];
}) {
    console.log(posts);
    const { data, links } = posts;

    return (
        <div className="min-h-screen bg-[#FDF6E3] px-5 py-24 md:px-10 lg:px-20">
            {/* Header Area */}
            <div className="mb-20 flex flex-col justify-between gap-10 md:items-end lg:flex-row">
                <div className="max-w-2xl">
                    <p className="mb-4 text-sm font-bold tracking-[0.4em] text-black uppercase">
                        Insights & Intelligence
                    </p>
                    <h1 className="text-3xl leading-tight font-semibold text-black md:text-6xl">
                        Trivex <span className="opacity-40">Briefings.</span>
                    </h1>
                </div>
            </div>
            {/* Featured Posts Carousel (Fade Effect) */}
            <div className="mb-24 w-full">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    slidesPerView={1}
                    loop={featured.length > 1}
                    autoplay={{
                        delay: 6000, // 6 seconds per "Briefing"
                        disableOnInteraction: false,
                    }}
                    className="w-full"
                >
                    {featured.map((post) => (
                        <SwiperSlide key={post.id}>
                            <div className="group relative flex w-full flex-col overflow-hidden border border-black/5 bg-white lg:flex-row">
                                {/* Image Container */}
                                <div className="overflow-hidden bg-black lg:w-3/5">
                                    <img
                                        src={post.image?.url}
                                        className="h-[500px] w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                                        alt={post.title}
                                    />
                                </div>

                                {/* Content Container */}
                                <div className="relative flex flex-col justify-center gap-6 p-16 lg:w-2/5">
                                    {/* Brand Yellow Accent Line */}
                                    <div className="absolute top-0 left-0 h-full w-2 bg-[#FFD566]"></div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className="h-2 w-2 animate-pulse rounded-full bg-red-600"></span>
                                            <span className="text-xs font-bold tracking-widest text-black uppercase">
                                                Priority Report
                                            </span>
                                        </div>
                                        {/* Counter Indicator for current slide */}
                                        <span className="font-mono text-[10px] text-black/20">
                                            SEC-LOG // 0
                                            {featured.indexOf(post) + 1}
                                        </span>
                                    </div>

                                    <h2 className="text-4xl leading-tight font-bold text-black">
                                        {post.title}
                                    </h2>
                                    <p className="line-clamp-4 text-lg leading-relaxed text-black/60">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between border-t border-black/5 pt-4">
                                        <div className="flex items-center gap-6 font-mono text-[10px] tracking-widest text-black/40 uppercase">
                                            <span>{post.created_at}</span>
                                            <span>{post.read_time}</span>
                                        </div>
                                        <Link
                                            href={route(
                                                "landing.posts.show",
                                                post.slug,
                                            )}
                                            className="text-xs font-bold tracking-tighter uppercase transition-colors hover:text-[#FFD566]"
                                        >
                                            Access File →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* Posts Grid */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                {data.map((post) => (
                    <Link
                        href={route("landing.posts.show", post.slug)}
                        key={post.id}
                        className="group cursor-pointer"
                    >
                        <div className="flex h-full flex-col border border-black/5 bg-white transition-all duration-300 hover:border-[#FFD566]/60">
                            <div className="aspect-16/10 overflow-hidden bg-black">
                                <img
                                    src={post.image?.url}
                                    className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                                />
                            </div>
                            <div className="flex grow flex-col gap-4 p-8">
                                <div className="flex items-center justify-between">
                                    <span className="bg-black px-2 py-0.5 text-[10px] font-bold tracking-[0.2em] text-[#FFD566] uppercase">
                                        {post.category}
                                    </span>
                                    <span className="font-mono text-[10px] text-black/40">
                                        {post.read_time}
                                    </span>
                                </div>
                                <h3 className="text-2xl leading-snug font-bold text-black transition-colors group-hover:text-black/70">
                                    {post.title}
                                </h3>
                                <p className="line-clamp-3 text-sm leading-relaxed text-black/60">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto flex items-center justify-between border-t border-black/5 pt-6">
                                    <span className="font-mono text-[10px] text-black/40 uppercase">
                                        {post.created_at}
                                    </span>
                                    <span className="flex items-center gap-2 text-xs font-bold tracking-tighter uppercase transition-all group-hover:gap-4">
                                        View Briefing{" "}
                                        <span className="text-[#FFD566]">
                                            →
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Pagination Section */}
            <div className="mt-24 flex flex-col items-center gap-10">
                <div className="h-px w-24 bg-black/10"></div>

                <nav className="flex items-center gap-2">
                    {links.map((link, index) => {
                        // Handle Laravel's "Previous" and "Next" labels which often contain &laquo; and &raquo;
                        const label = link.label
                            .replace("&laquo; Previous", "←")
                            .replace("Next &raquo;", "→");

                        // If there is no URL (e.g., on page 1, 'Previous' is null), render a span
                        if (!link.url) {
                            return (
                                <span
                                    key={index}
                                    className="flex h-12 min-w-12 items-center justify-center border border-black/5 bg-white/50 px-4 text-xs font-bold tracking-widest text-black/20 uppercase"
                                >
                                    {label}
                                </span>
                            );
                        }

                        return (
                            <Link
                                key={index}
                                href={link.url}
                                className={`flex h-12 min-w-12 items-center justify-center border px-4 text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                                    link.active
                                        ? "border-black bg-[#FFD566] text-black" // Active Page
                                        : "border-black/10 bg-white text-black hover:border-black hover:bg-black hover:text-[#FFD566]" // Inactive Page
                                }`}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}

export default Index;
