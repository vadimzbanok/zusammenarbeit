import { useState } from "react";
import CardItemComponent from "../components/CardItemComponent";
import CarouselComponent from "../components/CarouselComponent";
import FooterComponent from "../components/FooterComponent";
import NavLayoutComponent from "../components/NavLayoutComponent";
import ImageDividerComponent from "../components/ImageDividerComponent";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <NavLayoutComponent onSearch={setSearchTerm} />
      <CarouselComponent />
      <ImageDividerComponent />
      <CardItemComponent searchTerm={searchTerm} />
      <FooterComponent />
    </>
  );
};

export default HomePage;
