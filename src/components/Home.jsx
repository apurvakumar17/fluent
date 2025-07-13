import React from "react";
import { useAuth } from "../context";
import Header from "./Header";
import LeftMenu from "./LeftMenu";
import { Outlet } from "react-router-dom";

function Home() {
    const { currentUser } = useAuth();

    return (
        <div className="h-screen flex flex-col text-[var(--md-sys-color-on-background)] bg-[var(--md-sys-color-background)]">
            <Header />
            <div className="flex-1">
                {currentUser ? (
                    <div className="flex h-full">
                        <div className="left-pane px-2 md:pr-2 pt-20 w-[60px] md:w-1/6 lg:w-1/5 h-full bg-[var(--md-sys-color-surface)] text-[var(--md-sys-color-on-surface)] border-r border-[var(--md-sys-color-outline-variant)]">
                            <LeftMenu />
                            {/* Hello{" "}
                            {currentUser.displayName
                                ? currentUser.displayName
                                : currentUser.email}
                            , you are now logged in. */}
                        </div>
                        <div className="right-pane pt-12 w-full h-full p-4 bg-[var(--md-sys-color-surface-container)] text-[var(--md-sys-color-on-surface)]">
                            {/* Hello{" "}
                            {currentUser.displayName
                                ? currentUser.displayName
                                : currentUser.email}
                            , you are now logged in. */}
                            <Outlet />
                        </div>
                    </div>
                ) : (
                    <div className="p-4 pt-16">You are not logged in.</div>
                )}
            </div>
        </div>
    );
}

export default Home;
