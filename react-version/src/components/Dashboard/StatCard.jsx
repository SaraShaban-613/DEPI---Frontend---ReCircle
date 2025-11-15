function StatCard() {
    return (
        <>
            <div>

            </div>
            <section id="donations" className="d-flex flex-column justify-content-center w-50 mx-auto">
                <div className="d-flex flex-column flex-md-row gap-3 mb-4">
                    <div className="stat-card p-3 border rounded-4 text-center flex-fill">
                        <h3 className="fw-bold" style={{ color: "#375840" }}>12</h3>
                        <p className="fw-semibold" style={{ color: "#375840" }}>Total Donations</p>
                    </div>
                    <div className="stat-card p-3 border rounded-4 text-center flex-fill">
                        <h3 className="fw-bold" style={{ color: "#375840" }}>89</h3>
                        <p className="fw-semibold" style={{ color: "#375840" }}>Lives Helped</p>
                    </div>
                </div>
                <section className="p-4 border rounded-4">
                    <h5 className="fw-bold mb-3 text-start">
                        <i className="bi bi-box-seam mx-2"></i> Quick Donate
                    </h5>
                    <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
                        <div className="donation-btn d-flex flex-column align-items-center justify-content-center fw-semibold"
                            style={{ backgroundColor: "#375840", color: "white", minWidth: "150px", minHeight: "100px", borderRadius: "12px" }}>
                            <i className="bi bi-fork-knife fs-4 mb-2"></i>
                            <p className="fw-bold my-auto pb-5">Food Items</p>
                        </div>
                        <div className="donation-btn d-flex flex-column align-items-center justify-content-center fw-semibold"
                            style={{ backgroundColor: "#375840", color: "white", minWidth: "150px", minHeight: "100px", borderRadius: "12px" }}>
                            <i className="fa-solid fa-shirt fs-4 mb-2"></i>
                            <p className="fw-bold my-auto pb-4">Clothing</p>
                        </div>
                    </div>
                </section>

            </section>
        </>
    );
}

export default StatCard;