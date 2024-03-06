import React, { useEffect, useState } from "react";
import Style from "./Products.module.css";

import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

function Products() {
  const [productData, setPorductData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    console.log(data);
    setPorductData(data);
  };

  return (
    <div className={Style.product}>
      <div className="row">
        <h1>Products</h1>
        {productData.map((v) => (
          <div className="col-md-4">
            {/* <img src={v.image} height={"150px"} width={"150px"} /> */}
            {/* <h2>{v.price}</h2> */}
            {/* <h3>{v.title}</h3> */}

            <Card
              style={{
                width: "18rem",
              }}
            >
              <img
                alt="Sample"
                src={v.image}
                height={"250px"}
                width={"250px"}
              />
              <CardBody>
                <CardTitle tag="h5">{v.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {v.description}
                </CardSubtitle>
                <CardText>{v.price}</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
