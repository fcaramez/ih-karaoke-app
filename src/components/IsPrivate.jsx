import { AuthProvider, useAuth } from "../context/auth.context";
import { Navigate } from "react-router-dom";

function IsPrivate({ children }) {
  const { isLoggedIn, isLoading } = useAuth(AuthProvider);

  if (isLoading) return <p>Loading ...</p>;

  if (!isLoggedIn) {
    return <Navigate to={`/login`} />;
  } else {
    return children;
  }
}

export default IsPrivate;
