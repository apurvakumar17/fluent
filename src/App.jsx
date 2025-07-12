import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context";
import AppRoutes from "./helper/AppRoutes"; // renamed!

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <div className="w-full h-screen flex flex-col">
                    <AppRoutes />
                </div>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
