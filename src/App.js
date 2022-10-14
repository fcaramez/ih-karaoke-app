import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./components/ForgotPassword";
import { Routes, Route } from "react-router-dom";
import IsAnon from "./components/IsAnon";
import IsPrivate from "./components/IsPrivate";
import { logout } from "./firebaseFuntions/auth.firebase";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <button onClick={() => logout()}>Logout</button>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <IsPrivate>
              <Landing />
            </IsPrivate>
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
