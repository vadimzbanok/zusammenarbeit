import image from "../../public/images/Onlineshop-erstellen.jpeg";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent"

const AboutPage = () => {
  return (
    <>
      <HeaderComponent />
      <div className="flex items-center justify-center bg-gray-100 p-6">
        <div className="flex flex-row items-center bg-white rounded-2xl shadow-lg max-w-7xl p-6">
          <div className="w-2/3 p-4">
            <img
              src={image}
              alt="About Us"
              className="rounded-xl w-[100%] h-[100]"
            />
          </div>
          <div className="w-2/3 text-left p-4">
            <p className="text-lg text-gray-600 mb-4">
              At <span className="font-semibold">Shopify</span>, we believe
              shopping should be seamless, exciting, and hassle-free. Our online
              store is designed to bring you the latest trends, must-have
              essentials, and innovative products—all in one place.
            </p>

            <li className="list-none">
              ✔ <span className="font-semibold">Curated Selection</span> – We
              handpick high-quality products to ensure you get the best.
            </li>
            <li className="list-none">
              ✔ <span className="font-semibold">Fast & Secure Checkout</span> –
              Your time matters, and so does your security.
            </li>
            <li className="list-none">
              ✔{" "}
              <span className="font-semibold">
                Exceptional Customer Support
              </span>{" "}
              – We're here for you, every step of the way.
            </li>
            <li className="list-none">
              ✔ <span className="font-semibold">Worldwide Shipping</span> – No
              matter where you are, we deliver to your doorstep.
            </li>

            <p className="text-lg text-gray-600 mb-6 mt-6">
              Whether you’re looking for fashion, tech gadgets, home essentials,
              or unique gifts, <span className="font-semibold">Shopify</span> is
              your go-to destination.
            </p>
            <p className="text-lg font-semibold text-gray-800">
              👉 Shop Now & Experience the Future of Online Shopping!
            </p>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default AboutPage;
