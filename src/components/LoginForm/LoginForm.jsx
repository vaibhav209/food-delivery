import React, { useContext, useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginHandler } = useContext(AuthContext);

  const handleLoginBtn = () => {
    const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
    if (password === "admin") {
      loginHandler();
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={8} lg={6}>
          <div className="p-3 border rounded">
            <h4
              className="mb-4"
              style={{ fontSize: "25px", fontWeight: "bold", color: "#1E90FF" }}
            >
              Login to Get Started
            </h4>
            <Form>
              <Form.Group controlId="email" className="mt-4">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  required
                  value={email}
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="password" className="mt-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mt-4">
                <Form.Text className="text-muted">
                  Email: Any valid email | Password: admin
                </Form.Text>
              </Form.Group>
              <div className="mt-4">
                <Button
                  style={{ width: "100%" }}
                  variant="outline-primary"
                  onClick={handleLoginBtn}
                  disabled={!email || !password}
                >
                  Login
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
