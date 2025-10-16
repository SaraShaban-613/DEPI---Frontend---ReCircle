function StepCard({ stepNo, icon, title, description }) {
    return (
        <div className="info-card col-12 col-md-4 pt-5">
            {stepNo && (
                <div className="step-number rounded-circle d-flex align-items-center justify-content-center">
                    {stepNo}
                </div>
            )}
            <div className="icon-circle d-flex align-items-center justify-content-center mx-auto mb-3">
                <i className={`bi ${icon} fs-4`}></i>
            </div>
            <h5 className="fw-bold">{title}</h5>
            <p className="fw-semibold px-3 py-3">{description}</p>
        </div>
    );
}

export default StepCard;