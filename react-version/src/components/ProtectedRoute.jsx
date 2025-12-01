import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../components/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import SpinningLoader from "./SpinningLoader";

export default function ProtectedRoute() {
    const [user, loading] = useAuthState(auth);

    if (loading) return <SpinningLoader />;

    if (!user) return <Navigate to="/signup" replace />; // redirect if not signed in

    return <Outlet />; // render child route if logged in
}
