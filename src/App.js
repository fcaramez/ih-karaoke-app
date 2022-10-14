import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./components/ForgotPassword";
import { Routes, Route, useNavigate } from "react-router-dom";
import IsAnon from "./components/IsAnon";
import IsPrivate from "./components/IsPrivate";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import { useAuth, AuthProvider } from "./context/auth.context";

function App() {
  const { logOutUser } = useAuth(AuthProvider);
  /* const navigate = useNavigate();
  const out = () => {
    logOutUser();
    navigate("/");
  }; */
  return (
    <div className="App">
      <Navbar />
      {/* <button onClick={() => logOutUser()}>Logout</button> */}
      <Routes>
        <Route
          path="/"
          element={
            <IsAnon>
              <Landing />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <Login />
            </IsAnon>
          }
        />
        <Route
          path="/register"
          element={
            <IsAnon>
              <Signup />
            </IsAnon>
          }
        />
        <Route path="/reset-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
