const AboutPage = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 p-6">
      <div className="flex flex-row items-center bg-white rounded-2xl shadow-lg max-w-2xl p-6">
        <div className="w-1/3 p-4">
          <img src="/path-to-your-image.jpg" alt="About Us" className="rounded-xl w-full h-auto" />
        </div>
        <div className="w-2/3 text-center p-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Shopify!</h1>
          <p className="text-lg text-gray-600 mb-4">
            At <span className="font-semibold">Shopify</span>, we believe shopping should be seamless, exciting, and hassle-free.
            Our online store is designed to bring you the latest trends, must-have essentials, and innovative products—all in one place.
          </p>
          <ul className="text-gray-700 text-left space-y-2 mb-4">
            <li>✔ <span className="font-semibold">Curated Selection</span> – We handpick high-quality products to ensure you get the best.</li>
            <li>✔ <span className="font-semibold">Fast & Secure Checkout</span> – Your time matters, and so does your security.</li>
            <li>✔ <span className="font-semibold">Exceptional Customer Support</span> – We're here for you, every step of the way.</li>
            <li>✔ <span className="font-semibold">Worldwide Shipping</span> – No matter where you are, we deliver to your doorstep.</li>
          </ul>
          <p className="text-lg text-gray-600 mb-6">
            Whether you’re looking for fashion, tech gadgets, home essentials, or unique gifts, <span className="font-semibold">Shopify</span> is your go-to destination.
          </p>
          <p className="text-lg font-semibold text-gray-800">👉 Shop Now & Experience the Future of Online Shopping!</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
