import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/";
import { doSignOut } from "../firebase/auth";

const Header = () => {
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();

    return (
        <nav
            className="fixed top-0 left-0 z-20 w-full h-12 px-4 flex items-center justify-center gap-x-4
                        bg-[var(--md-sys-color-surface-container-highest)]
                        border-b border-[var(--md-sys-color-outline-variant)]
                        text-[var(--md-sys-color-on-surface)]"
        >
            {userLoggedIn ? (
                <button
                    onClick={() => {
                        doSignOut().then(() => {
                            navigate("/login");
                        });
                    }}
                    className="text-sm font-medium transition hover:underline text-[var(--md-sys-color-primary)]"
                >
                    Logout
                </button>
            ) : (
                <>
                    <Link
                        to={"/login"}
                        className="text-sm font-medium transition hover:underline text-[var(--md-sys-color-primary)]"
                    >
                        Login
                    </Link>
                    <Link
                        to={"/register"}
                        className="text-sm font-medium transition hover:underline text-[var(--md-sys-color-primary)]"
                    >
                        Register New Account
                    </Link>
                </>
            )}
        </nav>
    );
};

export default Header;
