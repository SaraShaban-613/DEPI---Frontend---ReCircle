import StepCard from "./StepCard";
import { Link } from "react-router-dom";

function HowItWorks() {
    const steps = [
        {
            stepNo: 1, icon: "bi-box-seam", title: "List Your Surplus",
            description: "Upload photos and details of food, clothing, or other items you want to donate."
        },
        {
            stepNo: 2, icon: "bi-geo-alt", title: "Smart Matching",
            description: "Our Al matches your donations with nearby recipients, charities, and food banks."
        },
        {
            stepNo: 3, icon: "bi-truck", title: "Easy Pickup",
            description: "Volunteers coordinate pickup at your convenience - no need to leave your home."
        },
        {
            stepNo: 4, icon: "bi-heart", title: "Make Impact",
            description: "Track your donations and see the real impact you're making in your community."
        }
    ]

    const aboutUs = [
        { icon: "bi-shield", title: "Safe & Secure", description: "Verified volunteers and recipients ensure safe, trustworthy transactions." },
        { icon: "bi-clock", title: "Real-Time Tracking", description: "Track your donations from pickup to delivery with live updates." },
        { icon: "bi-award", title: "Impact Analytics", description: "See exactly how your donations are making a difference in your community." },
        { icon: "bi-people", title: "Community Network", description: "Connect with like-minded individuals who share your passion for giving." },
        { icon: "bi-phone", title: "Mobile Optimized", description: "Donate on-the-go with our responsive design that works everywhere." },
        { icon: "bi-lightning", title: "Instant Matching", description: "Al-powered matching connects your donations with the right recipients instantly." }
    ]

    return (
        <main className="w-100">
            <section id="steps-summary" className="text-center my-5">
                <h2 className="fw-bold mt-4" style={{ fontSize: "3rem", letterSpacing: "1px" }}>Global Impact</h2>
                <p className="fs-5 fw-semibold my-4 mx-auto">Simple, efficient, and impactful. Turn your surplus
                    into someone else's solution in just four easy steps.</p>

                <div id="steps" className="row d-flex justify-content-center gap-1 my-5">
                    {
                        steps.map((step, i) => {
                            return <StepCard key={i} {...step} />
                        })
                    }
                </div>
                <Link to="/signup">
                    <button id="start-steps" className="btn fs-4 fw-semibold">Get Started Now <i className="bi bi-arrow-right fs-3 fw-bold"></i></button>
                </Link>
            </section>
            <hr />
            <section id="whyChooseUs" className="text-center mb-5">
                <h2 className="fw-bold mt-5" style={{ fontSize: "3rem", letterSpacing: "1px" }}>Why Choose ReCircle? </h2>
                <p className="fs-5 fw-semibold my-4 mx-auto">Simple, efficient, and impactful. Turn your surplus
                    into someone else's solution in just four easy steps.</p>

                <div id="about-us" className="row d-flex justify-content-center gap-5 my-5 mx-auto">
                    {
                        aboutUs.map((card, i) => {
                            return <StepCard key={i} {...card} className="clickable-card" />
                        })
                    }
                </div>
            </section>
        </main>
    );
}

export default HowItWorks;