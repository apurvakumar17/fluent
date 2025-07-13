import Home from "../components/Home";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import { useRoutes } from "react-router-dom";
import Profile from "../components/Profile";

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
                // { path: "feed", element: <Feed /> },
                // { path: "settings", element: <Settings /> },
                // ...other nested routes
            ],
        },
    ];
    return useRoutes(routesArray);
}

export default AppRoutes;
