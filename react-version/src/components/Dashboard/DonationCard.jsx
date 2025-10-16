function DonationCard({ image, title, quantity, time, status }) {
    const badgeClass = {
        "Available": "#bbdea5",
        "Scheduled": "#9bab9f",
        "Picked Up": "#5f7a66",
    }[status] || "bg-light";

    return (
        <div
            className="donation-card border mb-3 bg-white shadow-sm d-flex"
            style={{
                borderRadius: "2rem",
                borderColor: "#375840",
                overflow: "hidden",
                position: "relative",
            }}
        >
            <div style={{ flex: "0 0 140px" }}>
                <img
                    src={image}
                    alt={title}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                    }}
                />
            </div>

            <div
                className="d-flex flex-column flex-grow-1"
                style={{ marginLeft: "1rem", padding: "0.5rem 1rem" }}
            >
                <div className="d-flex justify-content-between align-items-start">
                    <h6 className="fw-bold mb-1">{title}</h6>
                    <span
                        className="badge rounded-4 fw-semibold p-2"
                        style={{
                            backgroundColor: badgeClass,
                            color: "#fff",
                        }}
                    >
                        {status}
                    </span>
                </div>

                <p className="small text-muted fw-semibold mb-1">{quantity}</p>
                <p className="small text-muted fw-semibold">
                    <i className="bi bi-calendar"></i> {time}
                </p>
            </div>
        </div>
    );
}

export default DonationCard;