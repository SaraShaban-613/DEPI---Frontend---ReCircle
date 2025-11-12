import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');

    return (
        <main className="container my-5">
            <div class="wrapper p-3">
                <div id="signup-box1" class="box" style={{ backgroundColor: "white" }}>
                    <h2 className="fw-bold mb-3 fs-1">ReCircle</h2>
                    <p>Sign up to see photos and videos of your friends.</p>

                    <button id="sign-up-btn" className="btn btn-outline-dark w-100 d-flex gap-2 justify-content-center align-content-center mt-3"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>
                        <span style={{ paddingTop: "0.1rem" }}>
                            Continue with google</span>
                    </button>
                    <div className="sign-up-div d-flex justify-content-around align-items-center">
                        <hr />
                        <p className="pt-3">OR</p>
                        <hr />
                    </div>

                    <form>
                        <input type="email" className="form-control mb-3" placeholder="Email" required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" className="form-control mb-3" placeholder="Full Name" required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input type="text" className="form-control mb-3" placeholder="Username" required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input type="password" className="form-control mb-3" placeholder="Password" required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" className="btn btn-primary w-100 mb-3 rounded-4 fw-semibold p-2">Sign Up</button>
                    </form>

                    {error && <p style={{ color: "red" }}>{error}</p>}
                    {message && <p style={{ color: "green" }}>{message}</p>}


                    <p>By signing up, you agree to our Terms, Data Policy and Cookies Policy.</p>
                </div>
                <div id="signup-box2" class="box d-flex justify-content-around align-items-center p-3 pt-4" style={{ backgroundColor: "white" }}>
                    <p id="has-an-account">Already have an account? </p>
                    <Link to="/login">
                        <p id="loginText">Log in</p>
                    </Link>
                </div>
            </div>

        </main>
    );
}

export default SignUp;