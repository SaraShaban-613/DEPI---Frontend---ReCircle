import { useState, useEffect } from "react";
import RoleSelector from "./Dashboard/RoleSelector";
import DonorDashboard from "./DonorDashboard";
import VolunteerDashboard from "./VolunteerDashboard";
import Dashboard from "./Dashboard";
import SpinningLoader from "./SpinningLoader";

export default function MainDashboard({ userId }) {
    const [selectedRole, setSelectedRole] = useState(
        localStorage.getItem("selectedRole") || "donor");


    const handleRoleSelect = (newRole) => {
        setSelectedRole(newRole);
        localStorage.setItem("selectedRole", newRole);
    }

    const [loading, setLoading] = useState(true);

    const renderDashboard = () => {
        switch (selectedRole) {
            case "donor":
                return <DonorDashboard />;
            case "volunteer":
                return <VolunteerDashboard />;
            case "recipient":
                return <Dashboard />;
            default:
                return <DonorDashboard />;
        }
    };

    useEffect(() => {// creating a small delay
        const timer = setTimeout(() => setLoading(false), 300);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <SpinningLoader />;

    return (
        <div>
            <RoleSelector onSelectRole={handleRoleSelect} selectedRole={selectedRole} />
            {renderDashboard()}
        </div>
    );
}
