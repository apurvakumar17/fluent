import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import {
    doSignInWithEmailAndPassword,
    doSignInWithGoogle,
} from "../../firebase/auth";
import { useAuth } from "../../context";
import "@material/web/textfield/outlined-text-field.js";
import "@material/web/button/filled-button.js";
import { Link } from "react-router-dom";

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

    if (userLoggedIn) return <Navigate to="/home" replace />;

    return (
        <main className="min-h-screen w-full flex flex-col items-center justify-center px-4 bg-[var(--md-sys-color-background)]">
            <img
                src="/assets/fluent-logo-transparent.svg"
                className="w-24 md:w-32 mb-10 shadow-[0_0_20px_var(--md-sys-color-primary)] rounded-full"
                alt="Fluent Logo"
            />

            <div className="w-full max-w-sm sm:max-w-md p-6 sm:p-7 rounded-2xl shadow-xl space-y-5 border border-[var(--md-sys-color-outline-variant)] text-[var(--md-sys-color-on-surface)] bg-[var(--md-sys-color-surface-container)]">
                <h3 className="text-xl font-semibold text-center text-[var(--md-sys-color-on-background)]">
                    Welcome Back
                </h3>

                <form onSubmit={onSubmit} className="space-y-4">
                    <md-outlined-text-field
                        label="Email"
                        type="email"
                        required
                        value={email}
                        onInput={(e) => setEmail(e.target.value)}
                        className="w-full"
                    ></md-outlined-text-field>

                    <md-outlined-text-field
                        label="Password"
                        type="password"
                        required
                        value={password}
                        onInput={(e) => setPassword(e.target.value)}
                        className="w-full"
                    ></md-outlined-text-field>

                    {errorMessage && (
                        <p className="text-sm text-[var(--md-sys-color-error)]">
                            {errorMessage}
                        </p>
                    )}

                    <md-filled-button
                        type="submit"
                        disabled={isSigningIn}
                        className="w-full"
                    >
                        {isSigningIn ? "Signing In..." : "Sign In"}
                    </md-filled-button>
                </form>

                <p className="text-center text-sm text-[var(--md-sys-color-on-surface-variant)]">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="font-bold underline text-[var(--md-sys-color-primary)]"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </main>
    );
}

export default Login;
