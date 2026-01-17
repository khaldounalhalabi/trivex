import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Team from "@/Models/Team";
import "swiper/css";
import "swiper/css/pagination";

const MembersCarousel = ({team}: {team: Team[]}) => {
    return (
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
    );
};

export default MembersCarousel;
