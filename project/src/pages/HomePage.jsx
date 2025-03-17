import CardItemComponent from "../components/CardItemComponent";
import FooterComponent from "../components/FooterComponent"

const HomePage = () => {

  return (
    <>
    <div className="text-[red]">HomePage</div>
    <CardItemComponent/>
    {<FooterComponent />}
    </>
  )
};
export default HomePage;
