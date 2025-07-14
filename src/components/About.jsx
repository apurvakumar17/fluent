import React from "react";

function About() {
    return (
        <div className="max-w-2xl mx-auto mt-24 px-6 py-10 rounded-xl shadow-lg bg-[var(--md-sys-color-background)] text-[var(--md-sys-color-on-surface)]">
            <h2 className="text-2xl font-bold mb-4 text-[var(--md-sys-color-primary)]">About This Project</h2>
            <p className="text-lg mb-4 leading-relaxed">
                This is an <span className="font-semibold">open source</span> social app project
                developed by <span className="font-semibold">Apurva Kumar</span>. It showcases modern
                frontend development using React, Firebase, and Material Web components.
            </p>
            <p className="text-lg">
                View the source code on{" "}
                <a
                    href="https://github.com/apurvakumar17/fluent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--md-sys-color-primary)] hover:underline hover:text-pink-300"
                >
                    GitHub
                </a>.
            </p>
        </div>
    );
}

export default About;
