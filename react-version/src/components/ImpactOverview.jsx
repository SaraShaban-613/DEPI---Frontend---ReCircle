import plantImg from '../assets/potted-plant.png';
import MetricCard from './MetricCard';
import AwardCard from './AwardCard';
import MonthProgress from './MonthProgress';
function ImpactOverview() {

    const metrics = [
        { icon: "bi-recycle", value: "205 kg", label: "Diverted from landfills" },
        { icon: "bi-heart", value: "128", label: "Nutritious meals shared" },
        { icon: "bi-people", value: "89", label: "People directly impacted" },
        { icon: "bi-graph-down-arrow", value: "70 kg", label: "Carbon footprint reduced" },
    ];

    // const awards = [
    //     { title: "First Donation", date: "Jan 15", description: "Made your first donation", bg: "#3d5a40", iconColor: "#fff" },
    //     { title: "First Donation", date: "Mar 22", description: "Helped 50+ people", bg: "#3d5a40", iconColor: "#fff" },
    //     { title: "First Donation", date: "Apr 8", description: "Diverted 150+ kg of waste", bg: "#3d5a40", iconColor: "#fff" },
    //     { title: "First Donation", date: "Apr 15", description: "Saved 75+ kg CO₂", bg: "#3d5a40", iconColor: "#fff" },
    //     { title: "Generous Giver", progress: 94, description: "Make 50 donations", bg: "#f8f9fa", iconColor: "#3d5a40", border: "1px solid #3d5a40", icon: "bi-hand-thumbs-up" },
    // ];
    const awards = [
    { title: "First Donation", date: "Jan 15", description: "Made your first donation", bg: "#3d5a40", iconColor: "#fff" },
    { title: "First Donation", date: "Mar 22", description: "Helped 50+ people", bg: "#3d5a40", iconColor: "#fff" },
    { title: "First Donation", date: "Apr 8", description: "Diverted 150+ kg of waste", bg: "#3d5a40", iconColor: "#fff" },
    { title: "First Donation", date: "Apr 15", description: "Saved 75+ kg CO₂", bg: "#3d5a40", iconColor: "#fff" },
];
const generousGiver = {
    title: "Generous Giver",
    progress: 94,
    description: "Make 50 donations",
    bg: "#f8f9fa",
    iconColor: "#3d5a40",
    border: "1px solid #3d5a40",
    icon: "bi-award-fill",
};


    const months = [
        { month: "Jan", donations: 8, prog: 66, points: 65 },
        { month: "Feb", donations: 12, prog: 83, points: 89 },
        { month: "Mar", donations: 15, prog: 91, points: 112 },
        { month: "Apr", donations: 12, prog: 73, points: 76 }
    ]

    return (
        <main id="impact-overview-component" className="d-flex flex-column justify-content-center w-100"
            style={{ padding: "2rem 0", color: "#375840" }}>
            <section id="impact-summary" className="text-center my-3">
                <h2 className="fw-bold mt-4" style={{ fontSize: "3rem", letterSpacing: "1px", color: "#375840" }}>Global Impact</h2>
                <p className="fs-4 fw-semibold mb-5">Together, we're creating measurable change in communities worldwide.</p>
                <div id="stats-overview" className="my-2 mx-auto">
                    <h4 className="fs-1 pt-2"><span>47</span></h4>
                    <p className="fs-3">Total Donations Made</p>
                    <p className="fs-4"><span>+12%</span> this month</p>
                </div>
            </section>

            <section
                id="impact-metrics"
                className="container rounded-4 shadow my-3 mx-auto w-75"
                style={{ padding: "6rem", backgroundColor: "white" }}
            >
                <div className="row">
                    {metrics.map((m, i) => (
                        <MetricCard key={i} {...m} />
                    ))}
                </div>
            </section>

            <section id="monthlyProgress"
                className="border border-2 d-flex flex-column mx-auto p-4 mt-5"
                style={{ width: "75%", borderRadius: "3.5rem", backgroundColor: "#ffffffb7" }}
            >
                <div className="title d-flex w-50 mx-4 mb-4">
                    <h2 className="ms-4 mt-3">
                        <i className="bi bi-calendar fs-1 mx-4 "></i> Monthly Progress
                    </h2>
                </div>

                <div className="months mx-auto" style={{ width: "75%" }}>
                    {
                        months.map((mon, i) => (
                            <MonthProgress key={i} {...mon} />
                        ))
                    }
                </div>
            </section>
{/* 
            <section id="achievements" className="mt-5 mx-auto" style={{ width: "75%" }}>
                <h2 className="my-3 d-flex align-items-center">
                    <i className="bi bi-award-fill fs-2 me-3"></i>Achievements
                </h2>

                <div className="awards d-flex flex-column gap-3">
                    {awards.map((a, i) => (
                        <AwardCard key={i} {...a} />
                    ))}
                </div>
            </section> */}
            <section id="achievements" className="mt-5 mx-auto" style={{ width: "75%" }}>
                <h2 className="my-3 d-flex align-items-center">
                    <i className="bi bi-award-fill fs-2 me-3"></i>Achievements
                </h2>

                <div className="awards d-flex flex-column gap-3">
                    {awards.map((a, i) => (
                        <AwardCard key={i} {...a} />
                    ))}

                    {/* Render generous giver separately */}
                    <AwardCard {...generousGiver} />
                </div>
            </section>


            <section id="environmentImpact" className="border border-2 mx-auto my-5 p-5 rounded-5
            d-flex flex-column justify-content-center"
                style={{ width: "75%", backgroundColor: "#ffffffb7" }}>
                <h2>Environment Impact</h2>

                <div className="plantImg mx-auto my-4">
                    <img id="potPlant" src={plantImg} alt='potted plant image'></img>
                </div>

                <p className="mx-auto fw-semibold"
                    style={{ color: "#5f7a66" }}>Your donations have helped save the equivalent of:</p>
                <div className="d-flex justify-content-between">
                    <div className="labels">
                        <p>Trees Planted:</p>
                        <p>Water Saved:</p>
                        <p>Energy Saved:</p>
                    </div>
                    <div className="envImpact">
                        <p>12 trees</p>
                        <p>1,240 gallons</p>
                        <p>89 kWh</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ImpactOverview;