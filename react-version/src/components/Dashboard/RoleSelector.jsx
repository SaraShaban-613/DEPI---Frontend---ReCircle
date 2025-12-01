function RoleSelector({ onSelectRole, selectedRole }) {
    const roles = [
        { icon: "bi-heart", title: "Donor", text: "List and Donate items" },
        { icon: "bi-box-seam", title: "Volunteer", text: "Pickup & deliver donations" },
        { icon: "bi-truck", title: "Recipient", text: "Browse & request items" },
    ];

    return (
        <section className="my-4 w-100">
            <h2 className="fw-bold fs-1 text-center" style={{ color: "#375840" }}>Select Your Role</h2>
            <p className="fw-semibold text-center" style={{ fontSize: "1.2rem", color: "#375840" }}>
                Choose how you'd like to participate in the ReCircle Community
            </p>

            <div id="roles-select" className="d-flex flex-wrap justify-content-center gap-5 my-5">
                {roles.map((role, i) => (
                    <div
                        key={i}
                        className={`role p-2 pt-3 rounded-5 border ${selectedRole === role.title.toLowerCase() ? "active-user-role" : "inactive-user-role"}`}
                        style={{
                            width: "16rem",
                            cursor: "pointer"
                        }}
                        onClick={() => onSelectRole(role.title.toLowerCase())}
                    >
                        <div className={`icon border mx-auto rounded-circle ${selectedRole === role.title.toLowerCase() ? "active-user-role-i" : "inactive-user-role-i"}`}
                            style={{ width: "fit-content", padding: "0.5rem 1.1rem", backgroundColor: "rgba(226, 226, 226, 1)" }}>
                            <i className={`bi ${role.icon} fs-3`}></i>
                        </div>
                        <h5 className="mt-4 fw-bold">{role.title}</h5>
                        <p className="small fw-semibold text-center" style={{ color: "#375840" }}>{role.text}</p>
                    </div>
                ))}
            </div>

            <div id="dashboard" className="mx-auto mt-4 mb-5 d-flex justify-content-around py-2 w-75">
                <div className="house"><i className="bi bi-house-door"></i></div>
                <div className="location"><i className="bi bi-geo-alt"></i></div>
                <div className="donation-box"><i className="bi bi-box-seam"></i></div>
                <div className="graph"><i className="bi bi-graph-up"></i></div>
                <div className="people"><i className="bi bi-people"></i></div>
            </div>
        </section>
    );
}

export default RoleSelector;
