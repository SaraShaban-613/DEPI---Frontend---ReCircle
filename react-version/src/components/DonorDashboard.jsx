import StatCard from './Dashboard/StatCard';
import RoleSelector from './Dashboard/RoleSelector';
import DonationCard from './Dashboard/DonationCard';
// import './donorVolunteer.css';

function DonorDashboard() {
    const donations = [
        {
            image: "/assets/plastic-recycle.jpg",
            title: "Fresh Vegetables & Fruits",
            quantity: "15 kg",
            time: "Today, 3:00 PM",
            status: "Available"
        },
        {
            image: "/assets/download.jpeg",
            title: "Winter Clothing Bundle",
            quantity: "10 Items",
            time: "Today, 10:00 AM",
            status: "Scheduled"
        },
        {
            image: "/assets/download2.jpeg",
            title: "Packaged Meals",
            quantity: "20 Portions",
            time: "Completed",
            status: "Picked Up"
        },
    ];


    return (
        <main className="container my-5 text-center">
            <RoleSelector />

            <StatCard />

            <section className="my-5 text-start w-50 mx-auto">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="fw-bold fs-3">Your Donations</h5>
                    <button className="btn fw-semibold fs-5 text-white"
                        style={{ backgroundColor: " #375840" }}>+ Add New</button>
                </div>
                {donations.map((donation, i) => (
                    <DonationCard key={i} {...donation} />
                ))}
            </section>
        </main>
    );
}

export default DonorDashboard;