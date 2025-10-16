function AwardCard({ title, date, description, progress, bg, iconColor, border }) {
    return (
        <div
            className="award-card d-flex align-items-center rounded-4 p-3"
            style={{ border: "1px solid #3d5a40" }}
        >
            <div
                className="icon d-flex justify-content-center align-items-center rounded-circle me-3"
                style={{
                    width: "3rem",
                    height: "3rem",
                    backgroundColor: bg,
                    color: iconColor,
                    border: border ? border : "none",
                }}
            >
                <i className="bi bi-award fs-4"></i>
            </div>

            <div className="details flex-grow-1">
                <div className="d-flex justify-content-between align-items-center mb-1">
                    <h5 className="fw-semibold m-0">{title}</h5>
                    {date && (
                        <div className="date bg-success-subtle rounded-4 px-3 py-1">
                            <small className="fw-semibold">{date}</small>
                        </div>
                    )}
                </div>
                <p className="text-muted mb-0">{description}</p>
                {progress && (
                    <>
                        <div className="progress mx-auto" style={{ height: "0.6rem" }}>
                            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                        </div>
                        <p className="text-end fw-semibold mb-0 mt-1 small">{progress / 100 * 50}/50</p>
                    </>
                )}
            </div>
        </div >
    );
}

export default AwardCard;