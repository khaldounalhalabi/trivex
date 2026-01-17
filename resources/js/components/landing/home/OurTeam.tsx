import { asset } from "@/helper";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Ensure these are imported in your project
import "swiper/css";
import "swiper/css/pagination";

function OurTeam() {
    const specialists = [
        {
            name: "Thomas Sereza",
            role: "Network Security",
            code: "TRX-091",
            exp: "12+ Years",
        },
        {
            name: "John Alexander",
            role: "Cyber Security",
            code: "TRX-042",
            exp: "15+ Years",
        },
        {
            name: "Joao Hobbs",
            role: "Systems Architect",
            code: "TRX-118",
            exp: "10+ Years",
        },
        {
            name: "Sarah Vance",
            role: "Risk Advisory",
            code: "TRX-055",
            exp: "14+ Years",
        },
    ];

    return (
        <div className="w-full overflow-hidden bg-landing-background px-10 py-32 lg:px-20">
            {/* Top Section: Split Layout Header */}
            <div
                className={
                    "mb-20 grid grid-cols-1 gap-20 border-b border-black/5 pb-20 lg:grid-cols-2"
                }
            >
                {/* Left Side: Introduction */}
                <div className={"flex flex-col items-start gap-6"}>
                    <div className="flex items-center gap-3">
                        <div className="h-[2px] w-10 bg-landing-primary"></div>
                        <h2 className="text-sm font-bold tracking-[0.4em] text-landing-primary uppercase">
                            Personnel Intelligence
                        </h2>
                    </div>
                    <h1 className="text-5xl leading-tight font-semibold text-black">
                        Led by Experts, <br />
                        <span className="opacity-40">
                            Driven by Excellence.
                        </span>
                    </h1>
                    <p className="max-w-md leading-relaxed text-black/60">
                        Our seasoned experts deliver tailored strategies and
                        unwavering protection to safeguard your world, utilizing
                        decades of field experience.
                    </p>
                </div>

                {/* Right Side: Mission Quote */}
                <div
                    className={
                        "flex flex-col items-start justify-center gap-6 lg:items-end lg:text-right"
                    }
                >
                    <div className="landing-button-background group relative max-w-md p-8 shadow-xl">
                        <img
                            src={asset("/images/3.png")}
                            className="pointer-events-none absolute -top-16 -right-16 w-32 opacity-10"
                            alt=""
                        />
                        <h3 className="relative z-10 text-2xl leading-snug font-medium text-white italic">
                            "Together with our clients, we make the world a
                            safer place."
                        </h3>
                        <p className="mt-4 text-xs font-bold tracking-widest text-landing-primary uppercase">
                            — Trivex Leadership
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Carousel */}
            <div className="w-full cursor-grab active:cursor-grabbing">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{
                        clickable: true,
                        bulletClass:
                            "swiper-pagination-bullet !bg-landing-primary",
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="!px-4 !pb-20" // Padding ensures shadows aren't clipped
                >
                    {specialists.map((member, index) => (
                        <SwiperSlide key={index} className="py-4">
                            {" "}
                            {/* Padding for shadow clearance */}
                            <div className="group relative overflow-hidden rounded-sm border border-black/5 bg-white p-8 pt-12 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:border-landing-primary/40 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]">
                                {/* The "Expert" Watermark */}
                                <span className="absolute top-8 -left-2 text-6xl font-black text-black opacity-[0.02] transition-opacity select-none group-hover:opacity-[0.04]">
                                    EXPERT
                                </span>

                                <div className="relative z-10">
                                    <div className="mb-10 flex items-start justify-between">
                                        <span className="border border-landing-primary/20 bg-landing-primary/[0.03] px-2 py-1 font-mono text-[10px] tracking-widest text-landing-primary">
                                            ID: {member.code}
                                        </span>
                                        <div className="flex items-center gap-1.5">
                                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500"></span>
                                            <span className="font-mono text-[10px] tracking-widest text-black/40 uppercase">
                                                Active
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="mb-1 text-2xl font-bold text-black transition-colors group-hover:text-landing-primary">
                                        {member.name}
                                    </h3>
                                    <p className="mb-6 text-sm font-medium tracking-widest text-landing-primary uppercase">
                                        {member.role}
                                    </p>

                                    <div className="mb-6 h-px w-full bg-black/5 transition-colors group-hover:bg-landing-primary/20"></div>

                                    <div className="flex items-end justify-between">
                                        <div>
                                            <p className="mb-1 text-[10px] tracking-widest text-black/30 uppercase">
                                                Experience
                                            </p>
                                            <p className="font-semibold text-black">
                                                {member.exp}
                                            </p>
                                        </div>
                                        {/* Corner Decorative Accent */}
                                        <div className="h-6 w-6 border-r-2 border-b-2 border-black/5 transition-all duration-500 group-hover:border-landing-primary"></div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default OurTeam;
