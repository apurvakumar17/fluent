import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context";
import { doSignOut } from "../firebase/auth";
import { Link } from "react-router-dom";
import "@material/web/button/filled-tonal-button.js";

const Header = () => {
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();

    const handleLogout = async () => {
        await doSignOut();
        navigate("/login");
    };

    return (
        <nav className="fixed top-0 w-full h-12 px-4 flex justify-between items-center gap-4 bg-[var(--md-sys-color-surface-container-highest)] border-b border-[var(--md-sys-color-outline)] text-[var(--md-sys-color-on-surface)]">
            {userLoggedIn ? (
                <>
                    <img
                        src="/assets/account-circle.svg"
                        className="w-9 rounded-full hover:shadow-[0_0_20px_var(--md-sys-color-primary)] transition-shadow duration-300 hover:cursor-pointer"
                        alt="Fluent Logo"
                    />
                    <img
                        src="/assets/fluent-logo-full-transparent.svg"
                        className="h-7"
                        alt="Full Fluent Logo"
                    />
                    <md-filled-tonal-button
                        className="h-8 px-3 text-sm"
                        onclick={handleLogout}
                    >
                        Logout
                    </md-filled-tonal-button>
                </>
            ) : (
                <>
                    <img
                        src="/assets/account-circle-off.svg"
                        className="w-9 rounded-full hover:shadow-[0_0_20px_var(--md-sys-color-primary)] transition-shadow duration-300 hover:cursor-pointer"
                        alt="Fluent Logo"
                    />

                    <div className="flex gap-4">
                        <Link to="/login" replace>
                            <md-filled-tonal-button className="h-8 px-3 text-sm">
                                Login
                            </md-filled-tonal-button>
                        </Link>
                        <Link to="/register" replace>
                            <md-filled-tonal-button className="h-8 px-3 text-sm">
                                Register
                            </md-filled-tonal-button>
                        </Link>
                    </div>
                </>
            )}
        </nav>
    );
};

export default Header;
