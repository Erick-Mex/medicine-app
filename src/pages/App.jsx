//Paleta de colores: https://colorhunt.co/palette/f0d9e7ff94cca239ea5c33f6
import { HashRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "../context/AuthProvider";
import PrivateRoute from "../components/PrivateRoute";
import LandingPage from "./LandingPage";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  return (
    <main className="bg-primary h-full font-sans">
      <HashRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<PrivateRoute />}>
              <Route path="" element={<Dashboard />} />
            </Route>
            {/* TODO: Make a route to see the details of a patient */}
          </Routes>
        </AuthProvider>
      </HashRouter>
    </main>
  );
}

export default App;
