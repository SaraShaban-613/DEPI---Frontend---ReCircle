import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebaseConfig";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";


export default function Profile() {
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);

    if (loading) return <p style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh", fontSize: "1.2rem" }}>Loading…</p>;

    if (!user) {
        return (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "60vh", padding: "1rem", backgroundColor: "#f5f5f5", textAlign: "center" }}>
                <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", fontWeight: "500", color: "#375840" }}>Don't have an account?</h2>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                    <button style={{ padding: "0.6rem 1.5rem", fontSize: "0.9rem", fontWeight: "500", border: "0.1rem solid #375840", borderRadius: "0.3rem", backgroundColor: "white", color: "#375840", cursor: "pointer", marginTop: "0.5rem" }}>
                        Sign Up
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "60vh",
                padding: "1rem",
                backgroundColor: "#f5f5f5",
                textAlign: "center"
            }}>
                <h2 style={{ fontSize: "1.5rem", marginBottom: "0.4rem", fontWeight: "500", color: "#375840" }}>
                    Welcome, {user.displayName || user.email}!
                </h2>
                <p style={{ marginTop: "0.6rem", marginBottom: "2rem", fontStyle: "italic", color: "#777" }}>
                    "Every small action counts. Keep making a difference!"
                </p>

                <button
                    onClick={() => navigate("/mainDashboard")} // route to MainDashboard
                    style={{
                        padding: "0.6rem 1.5rem",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        border: "0.1rem solid #375840",
                        borderRadius: "0.3rem",
                        backgroundColor: "white",
                        color: "#375840",
                        cursor: "pointer",
                        marginBottom: "1.5rem"
                    }}
                >
                    Go to Dashboard
                </button>

                <button
                    onClick={() => signOut(auth)}
                    style={{
                        padding: "0.6rem 1.5rem",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        border: "0.1rem solid #375840",
                        borderRadius: "0.3rem",
                        backgroundColor: "white",
                        color: "#375840",
                        cursor: "pointer"
                    }}
                >
                    Sign Out
                </button>
            </div>
        </div >
    );
}
