import LandingButton from "@/components/landing/LandingButton";
import { Link } from "@inertiajs/react";

const UnsubscribeSuccess = ({ appUrl }: { appUrl: string }) => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-landing-background p-6 font-raleway">
            <div className="relative w-full max-w-md">
                {/* Decorative Partial Borders from your CSS */}
                <div className="partial-borders -m-4"></div>

                <div className="relative z-10 border border-landing-primary/10 bg-white p-10 text-center shadow-2xl md:p-14">
                    {/* Brand Logo */}
                    <div className="mb-10">
                        <h1 className="font-playfair text-3xl font-bold tracking-widest text-landing-dark">
                            TRIVEX
                            <span className="text-landing-primary">.</span>
                        </h1>
                        <p className="mt-1 text-[10px] tracking-[0.2em] text-landing-primary uppercase">
                            Security International
                        </p>
                    </div>

                    {/* Success Icon */}
                    <div className="mb-8 flex justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-landing-primary/20 bg-landing-background">
                            <svg
                                className="h-8 w-8 text-landing-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Confirmation Message */}
                    <h2 className="mb-4 font-playfair text-2xl text-landing-dark">
                        Successfully Unsubscribed
                    </h2>

                    <div className="mx-auto mb-6 h-[1px] w-12 bg-landing-primary"></div>

                    <p className="mb-10 text-sm leading-relaxed text-landing-gray">
                        You have been removed from our newsletter. You will no
                        longer receive marketing emails or security insights
                        from Trivex International.
                    </p>

                    {/* Action Button using landing-button-background */}
                    <Link href={appUrl}>
                        <LandingButton className={"px-10 py-3"}>Return to Homepage</LandingButton>
                    </Link>

                    <p className="mt-8 text-[10px] text-landing-gray/40 italic">
                        Changed your mind? You can re-subscribe anytime through
                        our contact page.
                    </p>
                </div>

                {/* Footer Brand Tag */}
                <p className="mt-8 text-center text-[11px] tracking-[0.3em] text-landing-primary/50 uppercase">
                    © 2026 Trivex Security
                </p>
            </div>
        </div>
    );
};

export default UnsubscribeSuccess;
