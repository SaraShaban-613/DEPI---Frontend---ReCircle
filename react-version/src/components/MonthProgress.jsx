function MonthProgress({ month, donations, prog, points }) {
    return (
        <div className="month mb-4" >
            <div className="progressLabels d-flex justify-content-between align-items-center mb-2">
                <h5 className="fs-3">{month}</h5>
                <p className="fs-5 fw-semibold mb-0 d-flex justify-content-end">{donations} Donations</p>
            </div>

            <div className="progress" role="progressbar" style={{ height: "20px" }}>
                <div
                    className="progress-bar rounded-3"
                    style={{
                        width: `${prog}%`,
                        backgroundColor: "#3d5a40",
                    }}
                ></div>
            </div>

            <p className="fw-semibold">{points} Impact points</p>
        </div>
    );
}

export default MonthProgress;