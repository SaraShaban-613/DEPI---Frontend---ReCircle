function PickupCard({ pickup }) {
    let priorityClass = "";
    if (pickup.priority === "High") priorityClass = "bg-danger-subtle text-danger fw-semibold";
    else if (pickup.priority === "Medium") priorityClass = "bg-warning-subtle text-warning fw-semibold";
    else if (pickup.priority === "Low") priorityClass = "bg-success-subtle text-success fw-semibold";

    return (
        <div className={`pickup-card card p-3 rounded-5 mb-4 `} style={{ width: "100%" }}>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
                <div className="w-75">
                    <div className="d-flex flex-column align-items-start ms-2">
                        <h6 className="fw-bold mb-1 fs-4" style={{ color: "#2d4a30" }}>{pickup.name}</h6>
                        <p className="text-muted small fw-semibold mb-2">{pickup.description}</p>
                    </div>

                    <div className="pickup-details d-flex justify-content-between ms-2 ">
                        <div className="pickup-locations d-flex flex-column gap-1">
                            <div className="d-flex gap-3">
                                <i className="bi bi-geo-alt fs-5" style={{ color: "#2d4a30" }}></i>
                                <div className="text d-flex flex-column align-items-start">
                                    <p className="fw-bold mb-1" style={{ color: "#2d4a30" }}>Pickup</p>
                                    <p className="text-muted"> {pickup.pickup}</p>
                                </div>
                            </div>
                            <div className="d-flex gap-3">
                                <i className="bi bi-geo-alt fs-5" style={{ color: "#2d4a30" }}></i>
                                <div className="text d-flex flex-column align-items-start">
                                    <p className="fw-bold mb-1" style={{ color: "#2d4a30" }}>Deliver To</p>
                                    <p className="text-muted"> {pickup.deliverTo}</p>
                                </div>
                            </div>
                        </div>
                        <div className="pickup-time d-flex flex-column">
                            <div className="time d-flex gap-3">
                                <i class="bi bi-clock text-muted "></i>
                                <p className="text-muted small mb-1 fw-semibold"> {pickup.time}</p>

                            </div>
                            <div className="weight d-flex gap-3">
                                <i class="bi bi-box-seam text-muted"></i>
                                <p className="text-muted small mb-1 fw-semibold">{pickup.weight}</p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column align-items-end mt-3 mt-md-0">
                    <button className="pickUp-btn-avail btn btn-sm rounded-3 w-100 mb-2">
                        Available
                    </button>

                    <span className={`badge rounded-pill px-3 py-2  ${priorityClass}`}>
                        {pickup.priority} Priority
                    </span>
                </div>

            </div>
        </div>
    );
}

export default PickupCard;
