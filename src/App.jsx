import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { AuthProvider } from "./context";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/Home";
import Header from "./components/Header";
import Routes from "./helper/Routes";
// const Routes = () => {
//     const routesArray = [
//         { path: "/", element: <Register /> },
//         { path: "/login", element: <Login /> },
//         { path: "/register", element: <Register /> },
//         { path: "/home", element: <Home /> },
//     ];
//     return useRoutes(routesArray);
// };

function App() {
    return (
        <AuthProvider>
            <div className="w-full h-screen flex flex-col">
                <Routes />
            </div>
        </AuthProvider>
    );
}

export default App;
