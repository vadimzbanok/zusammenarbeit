import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import productData from "../utilities/data.js";

const CardItemComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(productData)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container mt-4   ">
      <div className="row">
        {productData.map((item) => (
          <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex">
            <div className="card d-flex flex-column h-100">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">${item.price}</p>
                <a href="#" className="btn btn-primary mt-auto">
                  View Product
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardItemComponent;
