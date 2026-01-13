import { asset } from "@/helper";
import NewsLetterFooter from "@/components/landing/home/NewsLetterFooter";

const CaseStudy = () => {
    return (
        <div className={"h-full w-full"}>
            <div className={"flex items-center justify-between py-16"}>
                <div className={"w-[50%] space-y-10 ps-16"}>
                    <h1 className={"text-5xl font-semibold"}>
                        Securing a Multi-Site Corporate Campus: Zero Critical
                        Incidents
                    </h1>
                    <p>
                        A Fortune-500 client operating five campuses across
                        three cities faced rising incidents—tailgating,
                        unsecured contractor access, after-hours trespass, and
                        inconsistent post orders—while needing tighter security
                        without operational friction. Trivex designed a
                        standardized, measurable program: rapid assessment and
                        risk matrix, stakeholder interviews, and Master Post
                        Orders with a zoning model
                        (Public/Controlled/Restricted/Critical). We stabilized
                        operations by restructuring manned guarding and
                        supervision, uplifting reception workflows for
                        visitors/contractors, and launching targeted training
                        (conflict management, drills, post-order briefings).
                        Technology fixes included HD-CCTV coverage adjustments
                        with analytics on choke points, access-control tuning
                        (anti-passback, time-boxed contractor badges), and alarm
                        health checks with scheduled drills.
                    </p>
                </div>
                <img
                    className={"w-[40%]"}
                    src={asset("/images/guard-back.png")}
                />
            </div>

            <div className={"flex items-center justify-between py-16"}>
                <img
                    className={"w-[40%]"}
                    src={asset("/images/laptop-guys.png")}
                />
                <div className={"w-[50%] space-y-10 pe-16"}>
                    <h1 className={"text-5xl font-semibold"}>
                        Integrated Security Deployment & Governance
                    </h1>
                    <p>
                        We then deployed an integrated solution across all
                        sites: static guarding at receptions, labs, and loading
                        bays; mobile patrols after hours; visible K9 deterrence
                        with randomized evening routes; and VIP/event playbooks
                        for secure movements. Visitor/contractor vetting and
                        issuance protocols tightened custody and auditability.
                        Access permissions mirrored the zoning model, while CCTV
                        repositioning closed blind spots and reduced tailgating.
                        Panic/intruder alarms were tested, logged, and tied to
                        clear escalation paths. Governance locked in
                        improvements via weekly incident trendlines and
                        response-time percentiles, monthly access and
                        CCTV-uptime reviews, and quarterly scenario exercises
                        with Facilities and HSE. (Note: Trivex provided physical
                        security technology only—no cybersecurity services.)
                    </p>
                </div>
            </div>

            <div className={"flex items-center justify-between py-16"}>
                <div className={"w-[50%] space-y-10 ps-16"}>
                    <h1 className={"text-5xl font-semibold"}>
                        Measured Results and Next Steps
                    </h1>
                    <p>
                        Within six months the program delivered zero critical
                        incidents (down from three), a 63% drop in tailgating
                        alarms, 52% fewer visitor/contractor non-compliances,
                        41% faster median response times, and 58% fewer
                        perimeter intrusions, with 100% post-order sign-offs and
                        drill/alarm logs ready for audit. Lessons learned:
                        subtle access-rule tweaks and staff nudges outperformed
                        heavy hardware swaps; supervisor continuity reduced
                        incident drift; randomized K9 patterns deterred
                        perimeter testing; and keeping MPOs “living” aligned new
                        hires quickly. Next steps include extending
                        escort/convoy coverage for late-night prototype
                        transfers, adding drone patrols for rural perimeter
                        peaks, and rolling out the reception model to satellite
                        offices. Result: zero critical incidents, stronger
                        compliance, and measurable risk reduction.{" "}
                    </p>
                </div>
                <img
                    className={"w-[40%]"}
                    src={asset("/images/computer-guys.png")}
                />
            </div>

            <NewsLetterFooter withFive={false} />
        </div>
    );
};

export default CaseStudy;
