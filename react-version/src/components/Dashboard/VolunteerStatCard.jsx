function VolunteerStatCard() {
    return (
        <div className="volstatcard row mb-5 justify-content-center w-75 mx-auto">
            <div className="col-12 col-md-6 d-flex justify-content-center">
                <div className="volunteerStatCard d-flex align-items-start gap-4 p-3 rounded"
                    style={{ width: "300px", height: "130px" }}>
                    <div
                        className="icon d-flex align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: "40px", height: "40px" }}
                    >
                        <i className="bi bi-check fs-2"></i>
                    </div>
                    <div className="volText text-start">
                        <h4 className="fw-bold mb-2 fs-1" style={{ fontWeight: "bolder" }}>47</h4>
                        <p className="mb-0 fw-semibold">Pickups Completed</p>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-6 d-flex justify-content-center">
                <div className="volunteerStatCard d-flex align-items-start gap-4 p-3 rounded"
                    style={{ width: "300px", height: "130px" }}>
                    <div
                        className="icon d-flex align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: "40px", height: "40px" }}
                    >
                        <i className="bi bi-cursor fs-4"></i>
                    </div>
                    <div className="volText text-start">
                        <h4 className="fw-bold mb-2 fs-1" style={{ fontWeight: "bolder" }}>132</h4>
                        <p className="mb-0 fw-semibold">Miles Traveled</p>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-6 d-flex justify-content-center">
                <div className="volunteerStatCard  d-flex align-items-start gap-4 p-3 rounded"
                    style={{ width: "300px", height: "130px" }}>
                    <div
                        className="icon d-flex align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: "40px", height: "40px" }}
                    >
                        <i className="bi bi-box-seam fs-4"></i>
                    </div>
                    <div className="volText text-start">
                        <h4 className="fw-bold mb-2 fs-1" style={{ fontWeight: "bolder" }}>284</h4>
                        <p className="mb-0 fw-semibold">Items Delivered</p>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-6 d-flex justify-content-center">
                <div className="volunteerStatCard d-flex align-items-start gap-4 p-3 rounded"
                    style={{ width: "300px", height: "130px" }}>
                    <div
                        className="icon d-flex align-items-center justify-content-center rounded-circle bg-light mt-0"
                        style={{ width: "40px", height: "40px" }}
                    >
                        <i className="bi bi-graph-up-arrow fs-4"></i>
                    </div>
                    <div className="volText text-start">
                        <h4 className="fw-bold mb-2 fs-1" style={{ fontWeight: "bolder" }}>8</h4>
                        <p className="mb-0 fw-semibold">This Week</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VolunteerStatCard;
