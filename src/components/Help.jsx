import React from "react";

function Help() {
    return (
        <div className="h-[calc(100vh-80px)]">
            {" "}
            {/* Adjust this if you have a header */}
            <div className="max-w-2xl h-full mx-auto px-6 py-4 text-[var(--md-sys-color-on-background)] overflow-y-auto">
                <h1 className="text-2xl font-semibold mb-6">🆘 Help & FAQ</h1>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">
                        🔐 Authentication
                    </h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Login or sign up using your email and password.</li>
                        <li>
                            Once logged in, you’ll access your personalized feed
                            and profile.
                        </li>
                        <li>
                            If logged out, you’ll be redirected to the login
                            screen.
                        </li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">📝 Posting</h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>
                            You can create a post using the text area in the
                            Feed section.
                        </li>
                        <li>Empty posts are not allowed.</li>
                        <li>
                            Posts are displayed in reverse chronological order
                            (newest first).
                        </li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">
                        🗑️ Deleting Posts
                    </h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>
                            You can delete <strong>only your own posts</strong>{" "}
                            by clicking the 🗑️ icon.
                        </li>
                        <li>Once deleted, posts cannot be recovered.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">
                        🎨 Theme & Customization (To Be Implemented)
                    </h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>
                            Go to <strong>Settings</strong> to toggle between
                            Light and Dark mode.
                        </li>
                        <li>
                            You can also choose a primary color to customize the
                            app’s look.
                        </li>
                        <li>
                            Theme changes are saved automatically and persist
                            after reload.
                        </li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">
                        📄 Other Information
                    </h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>
                            This app is built using React, Firebase, and
                            Material Web Components.
                        </li>
                        <li>
                            For bugs or suggestions, visit the{" "}
                            <a
                                href="https://github.com/apurvakumar17/fluent"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--md-sys-color-primary)] underline"
                            >
                                GitHub repository
                            </a>
                            .
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default Help;
