import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import Team from "@/Models/Team";
import "swiper/css";
import "swiper/css/pagination";

function OurTeam({ team }: { team: Team[] }) {
    return (
        /* Reduced px-16 to px-6 on mobile, adjusted py-32 to py-20 for better mobile vertical flow */
        <div className="flex w-full justify-center overflow-hidden bg-[#FDF6E3] px-6 py-20 md:px-16 md:py-32">
            <div className="flex w-full flex-col gap-12 md:gap-16">
                {/* Header Section */}
                <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row">
                    <div className="flex flex-col items-start gap-6 md:gap-8 lg:w-[60%]">
                        <h2 className="text-base font-semibold tracking-tight text-black uppercase md:text-lg">
                            INTRODUCE OUR TEAM
                        </h2>
                        {/* Removed the hard <br /> on mobile for better text flow */}
                        <h1 className="text-3xl leading-tight font-semibold text-black md:text-5xl">
                            Led by Experts,{" "}
                            <span className="hidden md:inline">
                                <br />
                            </span>
                            Driven by Excellence.
                        </h1>
                        <p className="max-w-lg text-base leading-relaxed text-black/80 md:text-lg">
                            From counter-terrorism to comprehensive risk
                            advisory, our seasoned experts deliver tailored
                            strategies and unwavering protection to safeguard
                            your world everywhere.
                        </p>
                    </div>

                    {/* The Yellow Quote Box Style */}
                    <div className="landing-button-background relative flex flex-col gap-6 p-8 md:gap-8 md:p-12 lg:w-[40%]">
                        {/* Scaled down the decorative "03" for mobile to prevent overflow */}
                        <span className="pointer-events-none absolute -top-10 -right-5 text-[6rem] font-bold text-black opacity-[0.1] md:-top-16 md:-right-10 md:text-[12rem]">
                            03
                        </span>

                        <h3 className="text-2xl leading-snug font-semibold text-black md:text-3xl">
                            "Together with our clients, we make the world a
                            safer place."
                        </h3>
                        <h4 className="text-xl font-semibold text-black md:text-2xl">
                            - Trivex
                        </h4>
                    </div>
                </div>

                {/* Team Carousel */}
                <div className="mt-6 w-full md:mt-10">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={20} // Reduced gap on mobile for tighter feel
                        slidesPerView={1}
                        autoplay={{ delay: 5000 }}
                        breakpoints={{
                            640: { slidesPerView: 1.2, spaceBetween: 30 }, // Peek at next slide on small tablets
                            768: { slidesPerView: 2, spaceBetween: 40 },
                            1200: { slidesPerView: 3, spaceBetween: 50 },
                        }}
                        className="pb-20"
                    >
                        {team.map((member, index) => (
                            <SwiperSlide key={index}>
                                {/* Adjusted p-10 to p-6/p-8 for better card space on phones */}
                                <div className="group relative flex flex-col gap-5 overflow-hidden border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md md:gap-6 md:p-10">
                                    <div className="absolute top-0 left-0 h-1 w-full -translate-x-full transform bg-[#FFD566] transition-transform duration-500 group-hover:translate-x-0"></div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-mono text-[9px] font-bold tracking-widest text-black/40 uppercase md:text-[10px]">
                                            Clearance: Verified
                                        </span>
                                        <span className="bg-black px-2 py-1 font-mono text-[9px] text-[#FFD566] md:text-[10px]">
                                            {member.id * 507}
                                        </span>
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-xl font-bold text-black md:text-2xl">
                                            {member.name}
                                        </h3>
                                        <p className="text-base font-medium text-black/60 italic md:text-lg">
                                            {member.role}
                                        </p>
                                    </div>

                                    <div className="h-px w-full bg-black/5"></div>

                                    <div className="flex items-end justify-between">
                                        <div>
                                            <p className="text-[9px] tracking-tighter text-black/90 uppercase md:text-[10px]">
                                                Field Experience
                                            </p>
                                            <p className="text-lg font-bold text-black md:text-xl">
                                                {member.experience} YRS
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
