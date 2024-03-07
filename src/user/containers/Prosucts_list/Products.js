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
  const [searchTerm, setSearch] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    console.log(data);
    setPorductData(data);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const searchProducts = productData.filter((v) =>
    v.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className={Style.product}>
        <div className="row">
          <h2 className="text-center"> Product </h2>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          {searchProducts.map((v) => (
            <div className="col-md-4 gy-4">
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
                  <CardTitle tag="h5">{v.title.substring(0, 20)}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {v.description.substring(0, 50)}
                  </CardSubtitle>
                  <CardText>{v.price}</CardText>
                  <Button>Add To Cart</Button>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
