function MetricCard({ icon, value, label }) {
    return (
        <div className="metrics col-12 col-md-6 border border-2" >
            <div className="metrics-inner d-flex flex-column justify-content-center p-5" >
                <div className="icon d-flex justify-content-center align-items-center rounded-circle border border-2 mb-3"
                    style={{ width: "fit-content", height: "auto", padding: "1rem 1.55rem", backgroundColor: "#e8e7e784" }}>
                    <i className={`bi ${icon} fs-1`}></i>
                </div>
                <h4 className="fs-2 fw-bold">{value}</h4>
                <p className="fs-4 fw-semibold">{label}</p>
            </div>
        </div>
    );
}

export default MetricCard;

