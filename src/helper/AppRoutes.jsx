import Home from "../components/Home";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import { useRoutes } from "react-router-dom";
import Profile from "../components/Profile";
import Feed from "../components/Feed";
import About from "../components/About";
import Settings from "../components/Settings";
import Help from "../components/Help";

function AppRoutes() {
    const routesArray = [
        { path: "/", element: <Login /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        {
            path: "/home",
            element: <Home />,
            children: [
                { path: "profile", element: <Profile /> },
                { path: "feed", element: <Feed /> },
                { path: "about", element: <About /> },
                { path: "settings", element: <Settings /> },
                { path: "help", element: <Help />}
                // ...other nested routes
            ],
        },
    ];
    return useRoutes(routesArray);
}

export default AppRoutes;
