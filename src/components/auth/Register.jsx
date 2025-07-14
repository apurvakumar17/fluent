import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";
import "@material/web/textfield/outlined-text-field.js";
import "@material/web/button/filled-button.js";
import { Link } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const { userLoggedIn } = useAuth();

    const onSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        setIsRegistering(true);
        try {
            await doCreateUserWithEmailAndPassword(email, password);
        } catch (err) {
            setErrorMessage(err.message);
        }
        setIsRegistering(false);
    };

    if (userLoggedIn) return <Navigate to="/home/feed" replace />;

    return (
        <main className="min-h-screen w-full flex flex-col items-center justify-center px-4 bg-[var(--md-sys-color-background)]">
            <img
                src="/assets/fluent-logo-transparent.svg"
                className="w-28 sm:w-32 md:w-36 mb-13 shadow-[0_0_20px_var(--md-sys-color-primary)] rounded-full"
                alt="Fluent Logo"
            />

            <div className="w-full max-w-sm sm:max-w-md p-6 sm:p-7 rounded-2xl shadow-xl space-y-5 border border-[var(--md-sys-color-outline-variant)] text-[var(--md-sys-color-on-surface)] bg-[var(--md-sys-color-surface-container)]">
                <h3 className="text-center text-xl font-semibold text-[var(--md-sys-color-on-background)]">
                    Create a New Account
                </h3>

                <form onSubmit={onSubmit} className="space-y-4">
                    <md-outlined-text-field
                        label="Email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full"
                    ></md-outlined-text-field>

                    <md-outlined-text-field
                        label="Password"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full"
                    ></md-outlined-text-field>

                    <md-outlined-text-field
                        label="Confirm Password"
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full"
                    ></md-outlined-text-field>

                    {errorMessage && (
                        <p className="text-red-600">{errorMessage}</p>
                    )}

                    <md-filled-button
                        type="submit"
                        disabled={isRegistering}
                        className="w-full"
                    >
                        {isRegistering ? "Signing Up..." : "Sign Up"}
                    </md-filled-button>

                    <p className="text-sm text-center text-[var(--md-sys-color-on-surface-variant)]">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-[var(--md-sys-color-primary)] underline font-bold"
                        >
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </main>
    );
};

export default Register;
