import CardItemComponent from "../components/CardItemComponent";
import CarouselComponent from "../components/CarouselComponent";
import FooterComponent from "../components/FooterComponent";
import NavLayoutComponent from "../components/NavLayoutComponent";
import AboutPage from "./AboutPage";

const HomePage = () => {
  return (
    <>
      <NavLayoutComponent />
      <CarouselComponent />
      <AboutPage />
      <CardItemComponent />
      <FooterComponent />
    </>
  );
};

export default HomePage;
