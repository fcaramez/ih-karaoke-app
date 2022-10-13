import { AuthProvider, useAuth } from "../context/auth.context";
import { Navigate } from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";

function IsAnon({ children }) {
  const { isLoggedIn, isLoading, currentUser } = useAuth(AuthProvider);

  const override = {
    display: "block",
    marginLeft: "50vw",
    marginRight: "50vw",
    marginTop: "50vh",
    marginBottom: "50vh",
    borderColor: "aqua",
  };

  if (isLoading)
    return (
      <DotLoader
        color={"aqua"}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );

  if (!isLoggedIn || !currentUser) {
    return children;
  } else {
    return <Navigate to={`/`} />;
  }
}

export default IsAnon;
