import PartnersSection from "@/components/landing/PartnersSection";
import NewsLetterFooter from "@/components/landing/home/NewsLetterFooter";
import { asset } from "@/helper";
import WhyChooseUs from "@/components/landing/WhyChooseUs";

const Industries = () => {
    return (
        <div className={"h-full w-full"}>
            <div
                className={
                    "flex items-center justify-between px-5 py-16 md:px-0"
                }
            >
                <div className={"space-y-5 md:w-[50%] md:ps-36"}>
                    <h1 className={"text-2xl font-semibold md:text-5xl"}>
                        Industries We Serve
                    </h1>
                    <p>
                        Every sector faces different risks. We design programs
                        that fit the environment, culture, and regulations of
                        your industry.
                    </p>
                    <div>
                        <h2 className={"font-bold"}>Sectors :</h2>
                        <ul className={"list-disc ps-8"}>
                            <li>Corporate offices and campuses</li>
                            <li>Retail and shopping centers</li>
                            <li>Construction and industrial</li>
                            <li>Logistics and warehousing</li>
                            <li>Aviation and transport</li>
                            <li>Hospitality and events</li>
                            <li>Embassies and diplomatic residences</li>
                            <li>Energy and utilities</li>
                            <li>Residential estates and private clients</li>
                        </ul>
                    </div>
                </div>
                <img
                    className={"hidden w-[50%] md:block"}
                    src={asset("/images/guard.png")}
                />
            </div>

            <PartnersSection />

            <WhyChooseUs />

            <NewsLetterFooter withFive={false} />
        </div>
    );
};

export default Industries;
