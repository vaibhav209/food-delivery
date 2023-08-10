import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const RegisterResto = () => {
  const [ownerName, setOwnerName] = useState("");
  const [mobNumber, setMobNumber] = useState("");
  const [address, setAddress] = useState("");
  const [opningHrs, setOpningHrs] = useState("");
  const [cuisineSelection, setCuisineSelection] = useState("");

  const resetField = () => {
    setOwnerName("");
    setMobNumber("");
    setAddress("");
    setOpningHrs("");
    setCuisineSelection("");
  };

  const mobilePattern = /^[6-9]\d{9}$/;

  const submitHandler = () => {
    if (
      !mobilePattern.test(mobNumber) ||
      ownerName.length <= 2 ||
      address.length <= 5
    ) {
      alert("Please fill the details correctly!");
      return;
    }

    alert("Registration successful. We will be in touch!");
    resetField();
  };

  return (
    <Container className="d-flex justify-content-center mt-3 p-4 border-2 w-100">
      <div className="d-flex flex-column" style={{ width: "50%" }}>
        <Form>
          <h4>Register Your Restorant</h4>
          <Form.Group className="mt-4" controlId="ownerName">
            <Form.Label>Owner Name</Form.Label>
            <Form.Control
              type="text"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mt-4" controlId="ownerMobile">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="number"
              value={mobNumber}
              onChange={(e) => setMobNumber(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mt-4" controlId="ownerAddress">
            <Form.Label>Restaurant Address</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              rows={2}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>

          <Form.Group
            className="mt-4"
            controlId="exampleForm.SelectCustomSizeSm"
          >
            <Form.Label>Cuisine Type</Form.Label>
            <Form.Control
              as="select"
              custom
              value={cuisineSelection}
              onChange={(e) => setCuisineSelection(e.target.value)}
            >
              <option default>Select</option>
              <option>Italian</option>
              <option>Asian</option>
              <option>Indian</option>
              <option>American</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="mt-4" controlId="openingHours">
            <Form.Label>Opening Hours</Form.Label>
            <Form.Control
              type="text"
              value={opningHrs}
              onChange={(e) => setOpningHrs(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Button
          variant="outline-success"
          className="mt-3 w-100"
          disabled={
            !(
              ownerName &&
              mobNumber &&
              address &&
              cuisineSelection &&
              opningHrs
            )
          }
          onClick={() => submitHandler()}
        >
          Submit
        </Button>
      </div>
    </Container>
  );
};

export default RegisterResto;
