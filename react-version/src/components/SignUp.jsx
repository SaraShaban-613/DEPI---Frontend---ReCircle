import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../components/firebaseConfig";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, sendEmailVerification, GoogleAuthProvider, signInWithPopup, getAdditionalUserInfo } from "firebase/auth";


export default function SignUp() {

    async function ensureUserDocument(user) {
        const ref = doc(db, "users", user.uid);
        const snap = await getDoc(ref);

        if (!snap.exists()) {
            await setDoc(ref, {
                email: user.email,
                role: "donor",   // default role
                createdAt: new Date(),
            });
        }

        return ref;
    }


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');

    const navigate = useNavigate();


    const handleSignUp = async (e) => {
        e.preventDefault();
        setError(null);
        setMessage('');

        try {
            // 1. Create user with email/password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            // 2. Send verification email
            await sendEmailVerification(userCredential.user);

            setMessage("Check your inbox to confirm your email!");
            setEmail('');
            setPassword('');
            setName('');
            setUsername('');

            await ensureUserDocument(userCredential.user);

            // then update additional info
            await setDoc(doc(db, "users", userCredential.user.uid), {
                email,
                full_name: name,
                username,
                role: ["donor"], // default
            }, { merge: true }); // <-- merge ensures we don’t overwrite


            navigate('/login');
        } catch (err) {
            if (err.code === "auth/email-already-in-use") {
                setError("This email is already registered. Please log in instead.");
            } else {
                setError(err.message);
            }
        }
    };

    const handleGoogleSignUp = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const info = getAdditionalUserInfo(result);

            // if (info.isNewUser) {
            //     await setDoc(doc(db, "users", result.user.uid), {
            //         email: result.user.email,
            //         full_name: result.user.displayName,
            //         username: result.user.displayName.toLowerCase().replace(/\s+/g, ""),
            //         role: ["donor"], // default
            //     });
            //     navigate("/");
            // }
            await ensureUserDocument(result.user);

            if (info.isNewUser) {
                await setDoc(doc(db, "users", result.user.uid), {
                    full_name: result.user.displayName,
                    username: result.user.displayName.toLowerCase().replace(/\s+/g, ""),
                    role: ["donor"], // default
                }, { merge: true });
                navigate("/profile");
            } else {
                setError("You've already signed up with this account. Please log in.");
                await auth.signOut();
            }
        } catch (err) {
            if (err.code === "auth/account-exists-with-different-credential") {
                setError("This Google account is already linked to another login method. Try signing in with that method.");
            } else {
                setError(err.message);
            }
        }
    };

    return (
        <main className="container my-5">
            <div className="wrapper p-3">
                <div id="signup-box1" className="box" style={{ backgroundColor: "white" }}>
                    <h2 className="fw-bold mb-3 fs-1">ReCircle</h2>
                    <p>Sign up to see photos and videos of your friends.</p>

                    <button id="sign-up-btn" className="btn btn-outline-dark w-100 d-flex gap-2 justify-content-center align-content-center mt-3"
                        onClick={handleGoogleSignUp}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>
                        <span style={{ paddingTop: "0.1rem" }}>Continue with Google</span>
                    </button>

                    <div className="sign-up-div d-flex justify-content-around align-items-center">
                        <hr />
                        <p className="pt-3">OR</p>
                        <hr />
                    </div>

                    <form onSubmit={handleSignUp}>
                        <input type="email" className="form-control mb-3" placeholder="Email" required
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" className="form-control mb-3" placeholder="Full Name" required
                            value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="text" className="form-control mb-3" placeholder="Username" required
                            value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" className="form-control mb-3" placeholder="Password" required
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit" className="btn btn-primary w-100 mb-3 rounded-4 fw-semibold p-2">Sign Up</button>
                    </form>

                    {error && <p style={{ color: "red" }}>{error}</p>}
                    {message && <p style={{ color: "green" }}>{message}</p>}

                    <p>By signing up, you agree to our Terms, Data Policy and Cookies Policy.</p>
                </div>

                <div id="signup-box2" className="box d-flex justify-content-around align-items-center p-3 pt-4" style={{ backgroundColor: "white" }}>
                    <p id="has-an-account">Already have an account? </p>
                    <Link to="/login">
                        <p id="loginText">Log in</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
