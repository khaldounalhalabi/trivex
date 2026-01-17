import { asset } from "@/helper";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
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
            role: "Web Developer",
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
        <div className="flex w-full justify-center overflow-hidden bg-[#FDF6E3] px-16 py-32">
            <div className="flex w-full flex-col gap-16">
                {/* Header Section: Matches original screenshot layout */}
                <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row">
                    <div className="flex flex-col items-start gap-8 lg:w-[60%]">
                        <h2 className="text-lg font-semibold tracking-tight text-black uppercase">
                            INTRODUCE OUR TEAM
                        </h2>
                        <h1 className="text-5xl leading-tight font-semibold text-black">
                            Led by Experts, <br />
                            Driven by Excellence.
                        </h1>
                        <p className="max-w-lg text-lg leading-relaxed text-black/80">
                            From counter-terrorism to comprehensive risk
                            advisory, our seasoned experts deliver tailored
                            strategies and unwavering protection to safeguard
                            your world everywhere.
                        </p>
                    </div>

                    {/* The Original Yellow Quote Box Style */}
                    <div className="landing-button-background relative flex flex-col gap-8 p-12 lg:w-[40%]">
                        {/* Large decorative "03" background text from site */}
                        <span className="pointer-events-none absolute -top-16 -right-10 text-[12rem] font-bold text-black opacity-[0.1]">
                            03
                        </span>

                        <h3 className="text-3xl leading-snug font-semibold text-black">
                            "Together with our clients, we make the world a
                            safer place."
                        </h3>
                        <h4 className="text-2xl font-semibold text-black">
                            - Trivex
                        </h4>
                    </div>
                </div>

                {/* Team Carousel: High-tech cards in original colors */}
                <div className="mt-10 w-full">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{ delay: 5000 }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 },
                        }}
                        className="pb-20"
                    >
                        {specialists.map((member, index) => (
                            <SwiperSlide key={index}>
                                <div className="group relative flex flex-col gap-6 overflow-hidden border border-black/5 bg-white p-10 shadow-sm transition-all duration-300 hover:shadow-md">
                                    {/* Scanline/Security Detail (Creative Element) */}
                                    <div className="absolute top-0 left-0 h-1 w-full -translate-x-full transform bg-[#FFD566] transition-transform duration-500 group-hover:translate-x-0"></div>

                                    <div className="space-y-1">
                                        <h3 className="text-2xl font-bold text-black">
                                            {member.name}
                                        </h3>
                                        <p className="text-lg font-medium text-black/60 italic">
                                            {member.role}
                                        </p>
                                    </div>

                                    <div className="h-px w-full bg-black/5"></div>

                                    <div className="flex items-end justify-between">
                                        <div>
                                            <p className="text-[10px] tracking-tighter text-black/40 uppercase">
                                                Field Experience
                                            </p>
                                            <p className="text-xl font-bold text-black">
                                                {member.exp}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default OurTeam;
