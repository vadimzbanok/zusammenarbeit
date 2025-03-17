import { useState, useEffect } from "react";

const CardItemComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setData(data));
    console.log(data);
  }, []);

  return (
    <div className="">
      {data.map((data) => (
        <img src={data.image} key={data.id} />
      ))}
    </div>
  );
};
export default CardItemComponent;
