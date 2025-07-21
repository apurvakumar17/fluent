import { useEffect, useState } from "react";
import {
    collection,
    query,
    orderBy,
    onSnapshot,
    addDoc,
    serverTimestamp,
    doc,
    deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";
import { useAuth } from "../context";
import "@material/web/button/filled-button.js";
import "@material/web/textfield/filled-text-field.js";
import "@material/web/icon/icon.js";
import "@material/web/iconbutton/filled-icon-button.js";

const Feed = () => {
    const { currentUser } = useAuth();
    const [posts, setPosts] = useState([]);
    const [postText, setPostText] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const allPosts = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPosts(allPosts);
        });

        return () => unsubscribe();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        if (!postText.trim()) {
            setMessage("⚠️ Post cannot be empty.");
            setTimeout(() => setMessage(""), 3000); // Auto-clear after 3 seconds
            return;
        }

        try {
            await addDoc(collection(db, "posts"), {
                text: postText.trim(),
                displayName: currentUser?.displayName || "Anonymous",
                photoURL: currentUser?.photoURL || "",
                userId: currentUser?.uid,
                createdAt: serverTimestamp(),
            });

            setPostText("");
            setMessage("✅ Post added!");
            setTimeout(() => setMessage(""), 3000); // Auto-clear success message
        } catch (err) {
            console.error("Error adding post:", err);
            setMessage("❌ Failed to post.");
            setTimeout(() => setMessage(""), 3000); // Auto-clear error message
        }
    };

    const handleDelete = async (postId) => {
        if (!window.confirm("Are you sure you want to delete this post?"))
            return;

        try {
            await deleteDoc(doc(db, "posts", postId));
        } catch (err) {
            console.error("Failed to delete post:", err);
            alert("❌ Could not delete post.");
        }
    };

    return (
        <>
            <h2 className="text-xl font-semibold m-4 mb-1 mt-6 px-4">Feed</h2>
            <div className="h-[calc(100vh-150px)] grid grid-cols-1 lg:grid-cols-2 w-full">
                {currentUser && (
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-3 px-4 shrink-0"
                    >
                        <md-filled-text-field
                            type="textarea"
                            value={postText}
                            onChange={(e) => setPostText(e.target.value)}
                            placeholder="What's on your mind?"
                            rows="3"
                            className="w-full p-3 resize-y mb-0"
                        ></md-filled-text-field>
                        <md-filled-button
                            type="submit"
                            className="px-4 py-2 ml-3 mb-3"
                        >
                            Post
                        </md-filled-button>
                        {message && <div className="m-4"><span className="text-sm">{message}</span></div>}
                    </form>
                )}

                {/* Scrollable post list */}
                <div className="postlists overflow-y-auto px-4 space-y-4 pb-4 h-full">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-[var(--md-sys-color-surface)] border border-[var(--md-sys-color-outline-variant)] rounded-xl p-4 shadow"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <img
                                    src={
                                        post.photoURL ||
                                        "/assets/account-circle.svg"
                                    }
                                    alt="User Avatar"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <p className="font-medium text-[var(--md-sys-color-on-surface)]">
                                    {post.displayName}
                                </p>
                                {post.userId === currentUser?.uid && (
                                    <md-filled-icon-button
                                        onClick={() => handleDelete(post.id)}
                                        className="ml-auto text-sm text-red-400 hover:text-red-500"
                                        title="Delete Post"
                                    >
                                        <md-icon>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="24px"
                                                viewBox="0 -960 960 960"
                                                width="24px"
                                                fill="#e3e3e3"
                                            >
                                                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                                            </svg>
                                        </md-icon>
                                    </md-filled-icon-button>
                                )}
                            </div>
                            <p className="text-[var(--md-sys-color-on-surface-variant)]">
                                {post.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Feed;
