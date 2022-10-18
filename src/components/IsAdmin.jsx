import React from "react";
import { useAuth, AuthProvider } from "../context/auth.context";
import { DotLoader } from "react-spinners";
import { Navigate } from "react-router-dom";

export const IsAdmin = ({ children }) => {
  const { isLoading, admin } = useAuth(AuthProvider);

  const override = {
    display: "block",
    marginLeft: "50vw",
    marginRight: "50vw",
    marginTop: "50vh",
    marginBottom: "50vh",
    borderColor: "var(--chakra-colors-blue-400)",
  };

  if (isLoading)
    return (
      <DotLoader
        color={"var(--chakra-colors-blue-400)"}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );

  if (admin !== null) {
    return children;
  } else {
    return <Navigate to={`/login`} />;
  }
};
