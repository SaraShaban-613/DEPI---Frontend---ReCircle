function RoleSelector() {
    const roles = [
        { icon: "bi-heart", title: "Donor", text: "List and Donate items", active: true },
        { icon: "bi-box-seam", title: "Volunteer", text: "Pickup & deliver donations" },
        { icon: "bi-truck", title: "Recipient", text: "Browse & request items" },
    ];

    return (
        <section className="my-4 w-100">
            <h2 className="fw-bold fs-1">Select Your Role</h2>
            <p className="fw-semibold" style={{ fontSize: "1.2rem" }}>Choose how you'd like to participate in the ReCircle Community</p>

            <div className="d-flex flex-wrap justify-content-center gap-5 my-5 w-100">
                {roles.map((role, i) => (
                    <div
                        key={i}
                        className="role p-2 rounded-5 border"
                        style={{
                            width: "16rem", cursor: "pointer",
                            borderColor: role.active ? "#375840" : "#d6d6d6ff"
                        }}
                    >
                        <div className="icon border mx-auto rounded-circle" style={{ width: "fit-content", padding: "0.5rem 1.1rem", backgroundColor: "rgba(239, 239, 239, 1)" }}>
                            <i className={`bi ${role.icon} fs-3`}></i>
                        </div>
                        <h5 className="mt-4 fw-bold">{role.title}</h5>
                        <p className="small fw-semibold">{role.text}</p>
                    </div>
                ))}
            </div>

            <div id="dashboard" className="mx-auto mt-4 mb-5 d-flex justify-content-around py-2">
                <div className="house">
                    <i class="bi bi-house-door"></i>
                </div>
                <div className="location">
                    <i class="bi bi-geo-alt"></i>
                </div>
                <div className="donation-box">
                    <i class="bi bi-box-seam"></i>
                </div>
                <div className="graph">
                    <i class="bi bi-graph-up"></i>
                </div>
                <div className="people">
                    <i class="bi bi-people"></i>
                </div>
            </div>
        </section>
    );
}

export default RoleSelector;