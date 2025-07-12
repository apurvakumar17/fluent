import Home from "../components/Home";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import { useRoutes } from "react-router-dom";

function Routes() {
    const routesArray = [
        { path: "/", element: <Login/> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/home", element: <Home /> },
    ];
    return useRoutes(routesArray);
}

export default Routes;
