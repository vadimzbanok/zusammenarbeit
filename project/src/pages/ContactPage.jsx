import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import about from "../../public/images/about-contact.png";

const ContactPage = () => {
  return (
    <>
      <HeaderComponent />
      <div className="flex items-center justify-center bg-blue-60 m-4 ">
      <div className="w-1/4 pr-2 mr-2 ">
          <img src={about} alt="Contact Us" className="rounded-xl w-[100%] h-[100]" />
        </div>
      <section className="ml-28 bg-white rounded-2xl shadow-lg pl-auto p-6 w-1/3">
        <form action="#" method="POST" enctype="multipart/form-data">
          <div className="mb-6">
            <label
              htmlFor="fc-generated-1-name"
              className="block text-gray-700 font-semibold"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="fc-generated-1-name"
              placeholder="Your first and last name"
              className="w-full h-10 mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="fc-generated-1-email"
              className="block text-gray-700 font-semibold"
            >
              Your Email Address
            </label>
            <input
              type="email"
              name="email"
              id="fc-generated-1-email"
              placeholder="john@doe.com"
              className="w-full h-10 mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="fc-generated-1-message"
              className="block text-gray-700 font-semibold"
            >
              Your message
            </label>
            <textarea
              name="message"
              id="fc-generated-1-message"
              placeholder="Enter your message..."
              className="w-full min-h-[188px] mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="w-full h-10 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send
            </button>
          </div>
        </form>
      </section>
      </div>
      <FooterComponent />
    </>
  );
};
export default ContactPage;
