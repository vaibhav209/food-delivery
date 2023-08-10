import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import routes from "../routes/routes.json";

const PrivateRoute = () => {
  const { isUserLogin } = useContext(AuthContext);

  return isUserLogin ? <Outlet /> : <Navigate to={routes.LOGIN} />;
};

export default PrivateRoute;
