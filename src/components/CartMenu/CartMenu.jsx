import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { XCircle } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart
} from "../../reducers/cartSlice";
import routes from "../../routes/routes.json";

const CartMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const getTotalPrice = () => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    return total;
  };

  const handleOrderNow = () => {
    navigate(routes.ORDER_CONFIRM);
    dispatch(clearCart());
  };

  return (
    <Row className="mt-4 d-flex justify-content-around">
      <Col xs={12} md={8}>
        {cartItems.map((item) => {
          return (
            <div
              key={item.id}
              className="d-flex align-items-center mb-3 border-bottom border-primary"
            >
              <img
                src={item.url}
                alt="cart img"
                width="100"
                style={{ borderRadius: "10px" }}
              />
              <div className="ms-3 flex-grow-1">
                <p>{item.title}</p>
                <p>{(item.price * item.quantity).toLocaleString()} Rs</p>
              </div>

              <div className="d-flex align-items-center justify-content-center ms- me-5">
                <Button
                  variant="secondary"
                  size="sm"
                  className="me-2"
                  onClick={() => dispatch(decrementQuantity(item.id))}
                  disabled={item.quantity === 1}
                >
                  -
                </Button>
                <span>{item.quantity}</span>
                <Button
                  variant="secondary"
                  size="sm"
                  className="ms-2"
                  onClick={() => dispatch(incrementQuantity(item.id))}
                >
                  +
                </Button>
              </div>
              <div>
                <XCircle
                  size={25}
                  color="red"
                  onClick={() => dispatch(removeFromCart(item.id))}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          );
        })}
        <Row className="mt-4 d-flex justify-content-end">
          <div className="mt-3 d-flex justify-content-end me-4">
            Total Price : {getTotalPrice().toLocaleString()} ₹
          </div>
          <div className="mt-3 d-flex justify-content-end me-4">
            <Button
              variant="success"
              onClick={() => handleOrderNow()}
              disabled={cartItems.length === 0}
              className="mb-5"
            >
              Order Now
            </Button>
          </div>
        </Row>
      </Col>
    </Row>
  );
};

export default CartMenu;
