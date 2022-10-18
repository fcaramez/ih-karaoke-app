import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./components/ForgotPassword";
import { Routes, Route } from "react-router-dom";
import IsAnon from "./components/IsAnon";
import IsPrivate from "./components/IsPrivate";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import { Queue } from "./pages/Queue";
import RequestForm from "./components/RequestForm";
import {Dashboard} from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
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
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <Profile />
            </IsPrivate>
          }
        />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route path="/queue" element={<Queue />} />
        <Route
          path="/add-request"
          element={
            <IsPrivate>
              <RequestForm />
            </IsPrivate>
          }
        />
          <Route path={"/super-secret-dashboard"} element={
                <Dashboard/>
          }  />
      </Routes>
    </div>
  );
}

export default App;
