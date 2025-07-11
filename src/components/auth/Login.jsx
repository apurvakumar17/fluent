import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../firebase/auth";
import { useAuth } from "../../context";

function Login() {
    const { userLoggedIn } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isSigningIn, setIsSigningIn] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithEmailAndPassword(email, password);
            } catch (err) {
                setErrorMessage(err.message);
            }
            setIsSigningIn(false);
        }
    };

    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        try {
            await doSignInWithGoogle();
        } catch (err) {
            setErrorMessage(err.message);
        }
    };

    if (userLoggedIn) return <Navigate to="/home" replace />;

    return (
        <main className="w-full h-screen flex items-center justify-center">
            <div className="w-96 space-y-5 p-4 shadow-xl border rounded-xl">
                <h3 className="text-gray-800 text-xl font-semibold text-center">
                    Welcome Back
                </h3>
                <form onSubmit={onSubmit} className="space-y-5">
                    <div>
                        <label className="text-sm font-bold">Email</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full mt-2 px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-bold">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full mt-2 px-3 py-2 border rounded-lg"
                        />
                    </div>
                    {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                    <button
                        type="submit"
                        disabled={isSigningIn}
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg"
                    >
                        {isSigningIn ? "Signing In..." : "Sign In"}
                    </button>
                </form>
                <p className="text-center text-sm">
                    Don't have an account?{" "}
                    <a href="/register" className="text-blue-600 underline font-bold">
                        Sign up
                    </a>
                </p>
                <div className="flex items-center">
                    <div className="flex-grow border-b"></div>
                    <span className="mx-2 text-sm font-bold">OR</span>
                    <div className="flex-grow border-b"></div>
                </div>
                <button
                    onClick={onGoogleSignIn}
                    disabled={isSigningIn}
                    className="w-full flex items-center justify-center gap-3 py-2 border rounded-lg"
                >
                    <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
                    Continue with Google
                </button>
            </div>
        </main>
    );
}

export default Login;
