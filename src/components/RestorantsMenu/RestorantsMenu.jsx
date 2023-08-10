import React from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reducers/cartSlice";
import { useParams } from "react-router";
import shops from "../../data";

const RestorantsMenu = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const restorants = shops.find((resto) => resto.id === id);

  // if (!restorants) {
  //   return <div className="text-center">Restaurant not found</div>;
  // }

  return (
    <>
      <div className="d-flex flex-wrap justify-content-evenly gap-4 mt-5">
        {restorants.items.map((item) => {
          return (
            <Card style={{ width: "19rem" }} key={item.id}>
              <Card.Img
                variant="top"
                src={item.url}
                style={{ width: "100%", height: "75%" }}
              />
              <Card.Body>
                <Card.Text>{item.title}</Card.Text>
                <Card.Text style={{ color: "#1E90FF" }}>
                  ₹ {item.price}
                </Card.Text>

                <Button
                  className="mx-1"
                  variant="outline-warning"
                  size="md"
                  style={{ width: "100%" }}
                  onClick={() => dispatch(addToCart(item))}
                >
                  Add
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default RestorantsMenu;
