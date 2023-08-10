import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/routes.json";

const OrderConfirm = () => {
  const navigate = useNavigate();

  const [time, setTime] = useState(5);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  useEffect(() => {
    if (time === 0) {
      navigate(routes.HOME);
    }
  }, [time, navigate]);

  return (
    <>
      <Container className="d-flex flex-column justify-content-center align-items-center mt-5">
        <div
          className="text-center display-2 text-dark mb-5"
          style={{ fontWeight: "400" }}
        >
          Thank You
          <br />
          For your Order!
        </div>

        <div className="text-center text-success" style={{ fontSize: "20px" }}>
          We are redirecting you on Home page in{" "}
          <span className="text-danger font-weight-bold">{time} </span>
          seconds.
        </div>
      </Container>
    </>
  );
};

export default OrderConfirm;
