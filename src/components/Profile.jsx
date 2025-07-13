import React, { useState } from "react";
import { useAuth } from "../context";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config"; // Make sure db is exported from here
import { updateProfile } from "firebase/auth";
import "@material/web/textfield/outlined-text-field.js";
import "@material/web/button/filled-button.js";

function Profile() {
    const { currentUser } = useAuth();

    const [displayName, setDisplayName] = useState(
        currentUser?.displayName || ""
    );
    const [photoURL, setPhotoURL] = useState(currentUser?.photoURL || "");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            // Update Firestore user profile
            await setDoc(
                doc(db, "users", currentUser.uid),
                {
                    displayName,
                    photoURL,
                    email: currentUser.email,
                    updatedAt: new Date(),
                },
                { merge: true }
            );

            // Update Firebase Auth user profile
            await updateProfile(currentUser, {
                displayName,
                photoURL,
            });

            setMessage("✅ Profile updated successfully.");
            // Force reload to reflect UI changes (optional)
            window.location.reload();
        } catch (error) {
            console.error("Error updating profile:", error);
            setMessage(`❌ Error updating profile: ${error.message}`);
        }
    };

    return (
        <div className="max-w-xl mx-auto pt-10 px-4">
            <h2 className="text-2xl font-bold mb-6 text-center">
                Hello{" "}
                {currentUser.displayName
                    ? currentUser.displayName
                    : currentUser.email}
            </h2>
            <div className="flex justify-center mb-4">
                <img
                    src={
                        currentUser?.photoURL
                            ? currentUser.photoURL
                            : "/assets/account-circle.svg"
                    }
                    className="size-24 md:size-50 rounded-full object-cover hover:shadow-[0_0_20px_var(--md-sys-color-primary)] transition-shadow duration-300 hover:cursor-pointer"
                    alt="User Avatar"
                />
            </div>

            <h2 className="text-2xl font-bold mb-4 text-center">
                Edit Profile
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <md-outlined-text-field
                        label="Display Name"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        className="w-full px-4 py-2"
                    ></md-outlined-text-field>
                </div>

                <div>
                    <md-outlined-text-field
                        label="Photo URL"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        className="w-full px-4 py-2"
                    ></md-outlined-text-field>
                </div>

                <div className="px-4 py-2">
                    <md-filled-button type="submit" className="w-full">
                        Save Changes
                    </md-filled-button>
                </div>
            </form>

            {message && <p className="mt-4 text-center">{message}</p>}
        </div>
    );
}

export default Profile;
