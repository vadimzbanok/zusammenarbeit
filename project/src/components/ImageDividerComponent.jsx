import { useState, useEffect } from "react";
import image from "../../public/images/girl-divider.jpeg";
import image2 from "../../public/images/store.jpeg";

const ImageDividerComponent = () => {
  const [separatorPosition, setSeparatorPosition] = useState(50);
  const [textIndex, setTextIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const leftTexts = [
    {
      title: "Our Spring Collection is already here",
      subtitle: "Fresh styles for the new season",
    },
    {
      title: "Exclusive Spring Deals",
      subtitle: "Members get 10% extra discount",
    },
  ];

  const rightTexts = [
    {
      title: "Spring Sale: Up to 50% Off",
      subtitle: "Limited Time Offer!",
    },
    {
      title: "Buy One Get One Free",
      subtitle: "This weekend only!",
    },
  ];

  const handleDrag = (event) => {
    if (!isDragging) return;

    const containerRect = document
      .querySelector(".image-divider-container")
      .getBoundingClientRect();
    const newPosition =
      ((event.clientX - containerRect.left) / containerRect.width) * 100;
    setSeparatorPosition(Math.min(Math.max(newPosition, 0), 100)); // Limita entre 0 y 100
  };

  const startDrag = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleDrag);
      window.addEventListener("mouseup", stopDrag);
    } else {
      window.removeEventListener("mousemove", handleDrag);
      window.removeEventListener("mouseup", stopDrag);
    }

    const textInterval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 5000);

    return () => {
      window.removeEventListener("mousemove", handleDrag);
      window.removeEventListener("mouseup", stopDrag);
      clearInterval(textInterval);
    };
  }, [isDragging]);

  return (
    <div className="relative w-[68%] h-screen overflow-hidden mx-auto mt-5 image-divider-container">
      <div
        className="absolute top-0 left-0 h-full bg-cover bg-center"
        style={{
          width: `${separatorPosition}%`,
          backgroundImage: `url(${image})`,
        }}
      >
        <div
          className={`absolute top-1/3 w-full text-center transition-opacity duration-1000 ${
            textIndex === 0 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-block bg-black bg-opacity-40 px-8 py-4 rounded-lg mx-4">
            <h2 className="text-white text-4xl font-sans font-semibold tracking-wide">
              {leftTexts[0].title}
            </h2>
            <p className="text-gray-200 text-xl mt-2">
              {leftTexts[0].subtitle}
            </p>
          </div>
        </div>

        <div
          className={`absolute top-1/3 w-full text-center transition-opacity duration-1000 ${
            textIndex === 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-block bg-purple-900 bg-opacity-70 px-8 py-4 rounded-lg mx-4">
            <h2 className="text-white text-4xl font-sans font-semibold tracking-wide">
              {leftTexts[1].title}
            </h2>
            <p className="text-pink-200 text-xl mt-2">
              {leftTexts[1].subtitle}
            </p>
          </div>
        </div>
      </div>

      <div
        className="absolute top-0 right-0 h-full bg-cover bg-center"
        style={{
          width: `${100 - separatorPosition}%`,
          backgroundImage: `url(${image2})`,
        }}
      >
        <div
          className={`absolute top-1/4 w-full text-center transition-opacity duration-1000 ${
            textIndex === 0 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-block bg-red-700 bg-opacity-80 px-6 py-3 rounded-lg mx-4">
            <h2 className="text-white text-3xl font-bold uppercase tracking-widest">
              {rightTexts[0].title}
            </h2>
            <p className="text-yellow-200 text-xl font-mono mt-2">
              {rightTexts[0].subtitle}
            </p>
          </div>
        </div>

        <div
          className={`absolute top-1/4 w-full text-center transition-opacity duration-1000 ${
            textIndex === 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-block bg-blue-800 bg-opacity-80 px-6 py-3 rounded-lg mx-4">
            <h2 className="text-white text-3xl font-bold uppercase tracking-widest">
              {rightTexts[1].title}
            </h2>
            <p className="text-orange-200 text-xl font-mono mt-2">
              {rightTexts[1].subtitle}
            </p>
          </div>
        </div>
      </div>

      <div
        className="absolute top-0 bottom-0 cursor-col-resize bg-gray-300 flex items-center justify-center"
        style={{
          left: `${separatorPosition}%`,
          width: "10px",
          transform: `translateX(-5px)`,
          zIndex: 10,
        }}
        onMouseDown={startDrag}
      >
        <div className="h-16 w-2 bg-white rounded-full opacity-70"></div>
      </div>
    </div>
  );
};

export default ImageDividerComponent;
