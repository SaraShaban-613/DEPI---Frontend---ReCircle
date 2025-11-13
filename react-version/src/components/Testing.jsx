import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../components/firebaseConfig";

function Testing() {
    useEffect(() => {
        signOut(auth)
            .then(() => console.log("User signed out for testing"))
            .catch(err => console.error("Sign out error:", err));
    }, []);

    return <p>Testing logout… check console for status.</p>;
}

export default Testing;