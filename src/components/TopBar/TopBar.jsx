import React, { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import routes from "../../routes/routes.json";

const TopBar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === routes.HOME;
  const isLoginPage = location.pathname === routes.LOGIN;

  const { logoutHandler } = useContext(AuthContext);

  const navigateHandler = (e) => {
    if (cartItems.length === 0) {
      e.preventDefault();
      alert("Your cart is empty! Please add items before proceeding.");
    } else {
      navigate(routes.CART);
    }
  };

  const handleLogoutBtn = () => {
    logoutHandler();
  };

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="sm"
        fixed="top"
        className="sticky-top"
      >
        <Container>
          <Nav.Link as={NavLink} to={routes.HOME}>
            <Navbar.Brand>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#1E90FF"
                }}
              >
              Food-Delivery
              </span>
            </Navbar.Brand>
          </Nav.Link>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse>
            <Nav className="mr-auto">
              {!isLoginPage && (
                <Nav.Link
                  as={NavLink}
                  to={routes.CART}
                  onClick={navigateHandler}
                >
                  Carts
                </Nav.Link>
              )}
            </Nav>
            {isHomePage && (
              <Nav
                className="d-flex align-items-center"
                style={{ marginLeft: "auto" }}
              >
                <NavLink to={routes.REGISTER}>List Your Restaurant</NavLink>

                <Button
                  className="text-white mx-2"
                  variant="outline-danger"
                  onClick={handleLogoutBtn}
                >
                  Logout
                </Button>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;
