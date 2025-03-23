import { useState, useEffect } from "react";
import image from "../../public/images/Onlineshop-erstellen.jpeg";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [listItems, setListItems] = useState([false, false, false, false]);
  const navigate = useNavigate();

  useEffect(() => {
    // Set initial animation after component mount
    setIsLoaded(true);

    // Cascade text animation after image loads
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 600);

    // Cascade list items one by one
    const listTimers = listItems.map((_, index) => {
      return setTimeout(() => {
        setListItems((prev) => {
          const newItems = [...prev];
          newItems[index] = true;
          return newItems;
        });
      }, 1000 + index * 200);
    });

    return () => {
      clearTimeout(textTimer);
      listTimers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <>
      <HeaderComponent />
      <div className="flex items-center justify-center bg-gray-100 p-6 min-h-screen overflow-hidden">
        <div
          className={`flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg max-w-7xl p-6 transform transition-all duration-700 ease-out ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="w-full md:w-2/3 p-4 overflow-hidden">
            <div className="overflow-hidden rounded-xl">
              <img
                src={image}
                alt="About Us"
                className={`rounded-xl w-full h-auto transition-all duration-1000 ease-out transform ${
                  isLoaded ? "scale-100 blur-0" : "scale-110 blur-sm"
                }`}
                onLoad={() => setIsLoaded(true)}
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 text-left p-4">
            <p
              className={`text-lg text-gray-600 mb-4 transition-all duration-700 ease-out ${
                textVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              At <span className="font-semibold text-blue-500">Online Shop</span>, we believe
              shopping should be seamless, exciting, and hassle-free. Our online
              store is designed to bring you the latest trends, must-have
              essentials, and innovative products—all in one place.
            </p>

            <ul className="space-y-3 my-6">
              {[
                <>
                  <span className="font-semibold">Curated Selection</span> – We
                  handpick high-quality products to ensure you get the best.
                </>,
                <>
                  <span className="font-semibold">Fast & Secure Checkout</span>{" "}
                  – Your time matters, and so does your security.
                </>,
                <>
                  <span className="font-semibold">
                    Exceptional Customer Support
                  </span>{" "}
                  – We're here for you, every step of the way.
                </>,
                <>
                  <span className="font-semibold">Worldwide Shipping</span> – No
                  matter where you are, we deliver to your doorstep.
                </>,
              ].map((item, index) => (
                <li
                  key={index}
                  className={`list-none flex items-center transition-all duration-500 ease-out transform ${
                    listItems[index]
                      ? "translate-x-0 opacity-100"
                      : "translate-x-10 opacity-0"
                  }`}
                >
                  <span className="text-green-500 mr-2 text-xl">✔</span> {item}
                </li>
              ))}
            </ul>

            <p
              className={`text-lg text-gray-600 mb-6 mt-6 transition-all duration-700 ease-out delay-100 ${
                textVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Whether you're looking for fashion, tech gadgets, home essentials,
              or unique gifts, <span className="font-semibold text-blue-500">Online Shop</span> is
              your go-to destination.
            </p>

            <div
              className={`transition-all duration-700 ease-out delay-200 transform ${
                textVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-5 opacity-0 scale-95"
              }`}
            >
              <button
                onClick={() => navigate("/")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center"
              >
                <span className="mr-2">Shop Now</span>
                <span className="animate-pulse">👉</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default AboutPage;
