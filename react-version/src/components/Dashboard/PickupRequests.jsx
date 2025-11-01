import PickupCard from "./PickupCard";

const pickups = [
    {
        name: "Green Grocery Market",
        description: "Fresh Produce, 15 Kg",
        pickup: "9th Street, Maadi",
        deliverTo: "Downtown Food Bank",
        time: "Today, 3:00 PM",
        weight: "2.3 Kg estimated",
        priority: "High",
    },
    {
        name: "Clothing Bank",
        description: "Winter Clothing, 12 Items",
        pickup: "Market Street",
        deliverTo: "Community Shelter",
        time: "Today, 5:30 PM",
        weight: "4.1 Kg estimated",
        priority: "Medium",
    },
    {
        name: "Campus Cafeteria",
        description: "Packaged Meals, 20 Portion",
        pickup: "University Campus",
        deliverTo: "Youth Center",
        time: "Tomorrow, 11:00 AM",
        weight: "3.5 Kg estimated",
        priority: "Low",
    },
];

function PickupRequests() {
    return (
        <>
            <div
                className="card responsive-card border-1 rounded-4 d-flex flex-column align-items-start p-4 mx-auto"
                style={{ width: "65%" }}
            >
                <div className="card-body d-flex flex-column align-items-start pt-5 ps-5">
                    <h5 className="fw-bold mb-3 fs-2 ps-0">Available Pickup Requests</h5>
                    <p className="mb-4 ps-0 fs-5">
                        Accept pickups in your area and help deliver donations to those in need.
                    </p>
                </div>
                <div className="d-flex flex-column mx-auto align-items-center gap-3 w-75">
                    {pickups.map((pickup, index) => (
                        <PickupCard key={index} pickup={pickup} />
                    ))}
                </div>
            </div>

            <div className="volunteer-impact-section border mx-auto rounded-5 my-5" style={{ width: "65%" }}>
                <div className="card-body d-flex flex-column align-items-start pt-5 ps-5 mt-2">
                    <h5 className="fw-bold mb-3 fs-2 ps-0">Your Volunteer Impact</h5>
                    <p className="mb-4 ps-0 fs-5 text-muted fw-semibold" style={{ color: "#d9eedfff" }}>
                        Your Contribution to reducing waste and helping the community
                    </p>
                </div>

                <div className="mt-5 monthly-progress w-75 mx-auto">
                    <div className="text d-flex justify-content-between mb-2">
                        <h5 className="text-muted">Monthly Progress</h5>
                        <h5 className="text-muted">8 / 10 Pickups</h5>
                    </div>
                    <div className="progress mx-auto" role="progressbar">
                        <div className="progress-bar w-75 rounded-1"></div>
                    </div>
                </div>

                <div className="volunteer-impact d-flex mx-5 gap-4 my-3 p-5">
                    <div className="deliveries w-50 border border-2 rounded-4 p-3 ps-5 pt-4 d-flex flex-column align-items-start">
                        <h4 className="fs-2 fw-bold">47</h4>
                        <p className="fw-semibold">Total Deliveries</p>
                    </div>
                    <div className="lives-helped w-50 border border-2 rounded-4 p-3 ps-5 pt-4  d-flex flex-column align-items-start">
                        <h4 className="fs-2 fw-bold">340</h4>
                        <p className="fw-semibold">Lives Helped</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PickupRequests;
