import Team from "@/Models/Team";
import "swiper/css";
import "swiper/css/pagination";
import MembersCarousel from "@/components/landing/MembersCarousel";

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
                    <MembersCarousel team={team} />
                </div>
            </div>
        </div>
    );
}

export default OurTeam;
