import { useState, useEffect } from "react";
import RoleSelector from "./Dashboard/RoleSelector";
import DonorDashboard from "./DonorDashboard";
import VolunteerDashboard from "./VolunteerDashboard";
import Dashboard from "./Dashboard";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebaseConfig";

export default function MainDashboard() {
    const [user, loading] = useAuthState(auth);
    const [selectedRole, setSelectedRole] = useState("donor"); // default for new users

    // useEffect(() => {
    //     const fetchRole = async () => {
    //         const userRef = doc(db, "users", user.uid);
    //         const userSnap = await getDoc(userRef);
    //         if (userSnap.exists()) {
    //             setSelectedRole(userSnap.data().role || "donor");
    //         }
    //     };
    //     fetchRole();
    // }, [user]);


    useEffect(() => {
        const fetchRole = async () => {
            if (user) {
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const userRoles = docSnap.data().role;
                    if (Array.isArray(userRoles) && userRoles.length > 0) {
                        setSelectedRole(userRoles[0]);
                    }
                }
            }
        };

        fetchRole();
    }, [user]);


    if (loading) return <p>Loading…</p>;
    // if (!user) return <p>Please log in</p>;

    const handleRoleSelect = async (newRole) => {
        setSelectedRole(newRole);

        const userRef = doc(db, "users", user.uid);
        await updateDoc(userRef, {
            role: [newRole],
        });
    };


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

    return (
        <div>
            <RoleSelector onSelectRole={handleRoleSelect} />
            {renderDashboard()}
        </div>
    );
}
