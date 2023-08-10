import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import CategorySection from "../CategorySection/CategorySection";
import routes from "../../routes/routes.json";
import { useNavigate } from "react-router";
import shops from "../../data";

const RestorantsList = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSlectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? shops
      : shops.filter((item) => item.category === selectedCategory);

  const handleExploreBtn = (shopId) => {
    navigate(`${routes.MENU}/${shopId}`);
  };

  return (
    <>
      <CategorySection
        selectedCategory={selectedCategory}
        setSlectedCategory={setSlectedCategory}
      />

      <div className="d-flex flex-row flex-wrap justify-content-evenly gap-4 mt-3 mb-3">
        {filteredItems.map((shop) => {
          return (
            <Card style={{ width: "19rem" }} key={shop.id}>
              <Card.Img
                variant="top"
                src={shop.url}
                style={{ width: "100%", height: "75%" }}
              />
              <Card.Body>
                <Card.Title>{shop.title}</Card.Title>
                <div className="d-flex justify-content-between mt-4">
                  <Card.Text style={{ color: "orange" }}>
                    Ratings: {shop.rate}*
                  </Card.Text>
                  <Card.Text style={{ color: "green" }}>
                    {shop.discount}
                  </Card.Text>
                </div>

                <Button
                  className="mx-1"
                  variant="outline-info"
                  size="md"
                  style={{ width: "100%" }}
                  onClick={() => handleExploreBtn(shop.id)}
                >
                  Explore
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default RestorantsList;
