import CardItemComponent from "../components/CardItemComponent";
import FooterComponent from "../components/FooterComponent";
import NavLayoutComponent from "../components/NavLayoutComponent";

const HomePage = () => {
  return (
    <>
      <div className="text-[red]"></div>
      <NavLayoutComponent />

      <CardItemComponent />

      {<FooterComponent />}
    </>
  );
};
export default HomePage;
