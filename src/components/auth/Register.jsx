import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";

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

    if (userLoggedIn) return <Navigate to="/home" replace />;

    return (
        <main className="w-full h-screen flex items-center justify-center">
            <div className="w-96 p-4 border rounded-xl shadow-xl space-y-5">
                <h3 className="text-center text-xl font-semibold">Create a New Account</h3>
                <form onSubmit={onSubmit} className="space-y-4">
                    <input
                        type="email"
                        required
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                    <input
                        type="password"
                        required
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                    <input
                        type="password"
                        required
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                    {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                    <button
                        type="submit"
                        disabled={isRegistering}
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg"
                    >
                        {isRegistering ? "Signing Up..." : "Sign Up"}
                    </button>
                    <p className="text-sm text-center">
                        Already have an account?{" "}
                        <a href="/login" className="text-blue-600 underline font-bold">Login</a>
                    </p>
                </form>
            </div>
        </main>
    );
};

export default Register;
