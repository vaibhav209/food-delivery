import { createContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../reducers/cartSlice";
import routes from "../routes/routes.json";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isUserLogin, setIsUserLogin] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = () => {
    setIsUserLogin(true);
    navigate(routes.HOME);
  };
  const logoutHandler = () => {
    setIsUserLogin(false);
    navigate(routes.LOGIN);
    dispatch(clearCart());
  };

  return (
    <AuthContext.Provider value={{ isUserLogin, loginHandler, logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
