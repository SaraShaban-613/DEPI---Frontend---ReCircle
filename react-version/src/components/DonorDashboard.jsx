// import StatCard from './Dashboard/StatCard';
// import RoleSelector from './Dashboard/RoleSelector';
// import DonationCard from './Dashboard/DonationCard';

// function DonorDashboard() {
//     const donations = [
//         {
//             image: "/assets/plastic-recycle.jpg",
//             title: "Fresh Vegetables & Fruits",
//             quantity: "15 kg",
//             time: "Today, 3:00 PM",
//             status: "Available"
//         },
//         {
//             image: "/assets/download.jpeg",
//             title: "Winter Clothing Bundle",
//             quantity: "10 Items",
//             time: "Today, 10:00 AM",
//             status: "Scheduled"
//         },
//         {
//             image: "/assets/download2.jpeg",
//             title: "Packaged Meals",
//             quantity: "20 Portions",
//             time: "Completed",
//             status: "Picked Up"
//         },
//     ];


//     return (
//         <main className="container my-5 text-center">
//             {/* <RoleSelector /> */}

//             <StatCard />

//             <section className="my-5 text-start w-50 mx-auto">
//                 <div className="d-flex justify-content-between align-items-center mb-3">
//                     <h5 className="fw-bold fs-3">Your Donations</h5>
//                     <button className="btn fw-semibold fs-5 text-white"
//                         style={{ backgroundColor: " #375840" }}>+ Add New</button>
//                 </div>
//                 {donations.map((donation, i) => (
//                     <DonationCard key={i} {...donation} />
//                 ))}
//             </section>
//         </main>
//     );
// }

// export default DonorDashboard;


import React, { useState } from "react";
import StatCard from './Dashboard/StatCard';
import DonationCard from './Dashboard/DonationCard';

function DonorDashboard() {
    const [donations, setDonations] = useState([
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
    ]);

    const [showPopup, setShowPopup] = useState(false);
    const [newDonation, setNewDonation] = useState({
        image: "",
        title: "",
        quantity: "",
        time: "",
        status: "Available"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewDonation({ ...newDonation, [name]: value });
    };

    const handleAdd = () => {
        setDonations([newDonation, ...donations]);
        setNewDonation({
            image: "",
            title: "",
            quantity: "",
            time: "",
            status: "Available"
        });
        setShowPopup(false);
    };

    return (
        <main className="container my-5 text-center">
            {/* <RoleSelector /> */}

            <StatCard />

            <div className="d-flex justify-content-between align-items-center my-3 w-50 mx-auto">
                <h5 className="fw-bold fs-3">Your Donations</h5>
                <button
                    className="btn fw-semibold fs-5 text-white"
                    style={{ backgroundColor: "#375840" }}
                    onClick={() => setShowPopup(true)}
                >
                    + Add New
                </button>
            </div>

            {showPopup && (
                <div
                    className="popup-overlay"
                    style={{
                        position: "fixed",
                        top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: "rgba(0,0,0,0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000
                    }}
                >
                    <div className="bg-white p-4 rounded" style={{ minWidth: "400px" }}>
                        <h5>Add New Donation</h5>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={newDonation.title}
                            onChange={handleChange}
                            className="form-control mb-2"
                        />
                        <input
                            type="text"
                            name="quantity"
                            placeholder="Quantity (e.g., 10 kg)"
                            value={newDonation.quantity}
                            onChange={handleChange}
                            className="form-control mb-2"
                        />
                        <input
                            type="text"
                            name="time"
                            placeholder="Time (e.g., Today, 3:00 PM)"
                            value={newDonation.time}
                            onChange={handleChange}
                            className="form-control mb-2"
                        />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        setNewDonation({ ...newDonation, image: reader.result });
                                    };
                                    reader.readAsDataURL(file);
                                }
                            }}
                            className="form-control mb-2"
                        />
                        <select
                            name="status"
                            value={newDonation.status}
                            onChange={handleChange}
                            className="form-select mb-3"
                        >
                            <option value="Available">Available</option>
                            <option value="Scheduled">Scheduled</option>
                            <option value="Picked Up">Picked Up</option>
                        </select>

                        <div className="d-flex justify-content-between mb-3">
                            <button className="btn btn-success" onClick={handleAdd}>
                                Add
                            </button>
                            <button className="btn btn-secondary" onClick={() => setShowPopup(false)}>
                                Cancel
                            </button>
                        </div>

                        <h6 className="mb-2">Preview:</h6>
                        <DonationCard {...newDonation} />
                    </div>
                </div>
            )}

            <section className="my-5 text-start w-50 mx-auto">
                {donations.map((donation, i) => (
                    <DonationCard key={i} {...donation} />
                ))}
            </section>
        </main>
    );
}

export default DonorDashboard;
