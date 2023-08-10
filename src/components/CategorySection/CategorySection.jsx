import { Navbar, Button, Row, Col } from "react-bootstrap";

const CategorySection = ({ selectedCategory, setSlectedCategory }) => {
  return (
    <Navbar bg="light" expand="sm" variant="light" className="sticky-top">
      <Row className="d-flex justify-content-center w-100">
        <Col xs={12} sm={6} md={4} lg={2}>
          <Button
            variant={
              selectedCategory === "All" ? "primary" : "outline-secondary"
            }
            className="w-100 mb-2"
            onClick={() => setSlectedCategory("All")}
          >
            All
          </Button>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2}>
          <Button
            variant={
              selectedCategory === "Breakfast" ? "primary" : "outline-secondary"
            }
            className="w-100 mb-2"
            onClick={() => setSlectedCategory("Breakfast")}
          >
            Breakfast
          </Button>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2}>
          <Button
            variant={
              selectedCategory === "Lunch" ? "primary" : "outline-secondary"
            }
            className="w-100 mb-2"
            onClick={() => setSlectedCategory("Lunch")}
          >
            Lunch
          </Button>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2}>
          <Button
            variant={
              selectedCategory === "Dinner" ? "primary" : "outline-secondary"
            }
            className="w-100 mb-2"
            onClick={() => setSlectedCategory("Dinner")}
          >
            Dinner
          </Button>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2}>
          <Button
            variant={
              selectedCategory === "Dessert" ? "primary" : "outline-secondary"
            }
            className="w-100 mb-2"
            onClick={() => setSlectedCategory("Dessert")}
          >
            Dessert
          </Button>
        </Col>
      </Row>
    </Navbar>
  );
};

export default CategorySection;
