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
  const [search, setSearch] = useState("");
  const [sort, setShort] = useState("");
  const [category, setCategory] = useState([]);
  const [selectCetagory, setSelectCetagory] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    let unicatData = [];

    data.map((v) => {
      if (!unicatData.includes(v.category)) {
        unicatData.push(v.category);
      }
    });

    setCategory(unicatData);

    setPorductData(data);
  };

  const handleSearch = () => {
    let fData = productData.filter(
      (v) =>
        v.title.toLowerCase().includes(search) ||
        v.description.toLowerCase().includes(search) ||
        v.price.toString().includes(search)
    );

    fData = fData.sort((a, b) => {
      if (sort === "lh") {
        return a.price - b.price;
      } else if (sort === "hl") {
        return b.price - a.price;
      } else if (sort === "az") {
        return a.title.localeCompare(b.title);
      } else if (sort === "za") {
        return b.title.localeCompare(a.title);
      }
    });

    if (selectCetagory) {
      fData = fData.filter((v) => v.category === selectCetagory);
    }

    return fData;
  };

  const finalData = handleSearch();

  return (
    <div className="container">
      <div className={Style.product}>
        <div className="row">
          <h2 className="text-center"> Product </h2>
          <div className="box">
            <div className="mb-3">
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />

              <select onChange={(event) => setShort(event.target.value)}>
                <option value="0">--Select Filter--</option>
                <option value="lh">Price: Low To High</option>
                <option value="hl">Price: High To Low</option>
                <option value="az">Product: A -Z</option>
                <option value="za">Product: Z -A</option>
              </select>

              <br></br>

              <br></br>

              <div className="">
                <button style={{background: selectCetagory === '' ? 'green' : 'none' }} onClick={() => setSelectCetagory('')}>All</button>

                {category.map((v) => (
                  <button style={{backgroundColor : v === selectCetagory ? 'blue' : 'white' }} onClick={() => setSelectCetagory(v)}>{v}</button>
                ))}
              </div>
            </div>
          </div>

          {finalData.map((v) => (
            <div class="col-md-4 gy-4">
              <div class="box-1">
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
                    <CardSubtitle class="mb-2 text-muted" tag="h6">
                      {v.description.substring(0, 50)}
                      ...
                    </CardSubtitle>
                    <CardText>{v.price}</CardText>
                    <Button>Add To Cart</Button>
                  </CardBody>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
