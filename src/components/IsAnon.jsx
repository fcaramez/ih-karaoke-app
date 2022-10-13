import { AuthProvider, useAuth } from "../context/auth.context";
import { Navigate } from "react-router-dom";

function IsAnon({ children }) {
  const { isLoggedIn, isLoading } = useAuth(AuthProvider);

  if (isLoading) return <p>Loading ...</p>;

  if (!isLoggedIn) {
    return children;
  } else {
    return <Navigate to={`/`} />;
  }
}

export default IsAnon;
