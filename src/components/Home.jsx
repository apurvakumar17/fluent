import React from "react";
import { useAuth } from "../context";
import Header from "./Header";

function Home() {
    const { currentUser } = useAuth();

    return (
        <div className="text-2xl font-bold pt-14">
            <Header />
            {currentUser
                ? `Hello ${
                      currentUser.displayName
                          ? currentUser.displayName
                          : currentUser.email
                  }, you are now logged in.`
                : "You are not logged in."}
        </div>
    );
}

export default Home;
