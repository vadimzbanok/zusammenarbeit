import CardItemComponent from "../components/CardItemComponent";
import CarouselComponent from "../components/CarouselComponent";
import FooterComponent from "../components/FooterComponent";
import NavLayoutComponent from "../components/NavLayoutComponent";
import ProductDetailsPage from "./ProductDetailsPage";

const HomePage = () => {
  return (
    <>
      <div className="text-[red]"></div>
      <NavLayoutComponent />

      <CarouselComponent />

      <CardItemComponent />

      {<FooterComponent />}



    </>
  );
};
export default HomePage;
