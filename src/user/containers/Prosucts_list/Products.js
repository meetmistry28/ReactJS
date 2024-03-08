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
  const [cetegory,setCetegory] = useState([])

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    console.log(data);
    setPorductData(data);
  };

  // const handleSearch = (event) => {
  //   setSearch(event.target.value);
  // };

  const handleSearch = () => {
    let fData = productData.filter(
      (v) =>
        v.title.toLowerCase().includes(search) ||
        v.description.toLowerCase().includes(search) ||
        v.price.toString().includes(search)
    );

// if (cetegory) {
  
//   fData.filter((v) => (
//     v.cetegory === cetegory
//   ))
// }

    // <h3>{}</h3>

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

    return fData;
  };

  const finalData = handleSearch();
  console.log(finalData);

  return (
    <div className="container">
      <div className={Style.product}>
        <div className="row">
          <h2 className="text-center"> Product </h2>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <select onChange={(event) => setShort(event.target.value)}>
              <option value="0">--Select Cetegory--</option>
              <option value="lh">Price: Low To High</option>
              <option value="hl">Price: High To Low</option>
              <option value="az">Product: A -Z</option>
              <option value="za">Product: Z -A</option>
            </select>

            <br></br>

            <br></br>
                        
            {/* <button value={cetegory} onChange={(event) => setCetegory(event.target.value)}>cetegory</button> */}

          </div>

          {finalData.map((v) => (
            <div class="col-md-4 gy-4">
              {/* <img src={v.image} height={"150px"} width={"150px"} /> */}
              {/* <h2>{v.price}</h2> */}
              {/* <h3>{v.title}</h3> */}

              <div class="box">
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
