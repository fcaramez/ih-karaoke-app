import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/auth.context";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <h1>hello</h1>
    /*  <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}></Route> */
  );
};
