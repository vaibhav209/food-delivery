import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import TopBar from "../components/TopBar/TopBar";
import Cart from "../pages/Cart";
import Confirm from "../pages/Confirm";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import RegisterForm from "../pages/RegisterFrom";
import PrivateRoute from "./PrivateRoutes";
import routes from "./routes.json";

const PageRoutes = () => {
  const location = useLocation();

  const isOrderConfirmPage = location.pathname === routes.ORDER_CONFIRM;

  return (
    <>
      {!isOrderConfirmPage && <TopBar />}
      <Routes>
        <Route path={routes.HOME} element={<PrivateRoute />}>
          <Route path={routes.HOME} element={<Home />} />
        </Route>

        <Route path={routes.REGISTER} element={<RegisterForm />} />
        <Route path={`${routes.MENU}/:id`} element={<Menu />} />
        <Route path={routes.CART} element={<Cart />} />
        <Route path={routes.ORDER_CONFIRM} element={<Confirm />} />
        <Route path={routes.LOGIN} element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
