import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";

const PrivacyPolicyPage = () => {
    return (
      <>
      <HeaderComponent />
      <div className="max-w-3xl mx-auto p-6 space-y-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-900">Privacy Policy</h1>
        <p className="text-center text-gray-600">Last updated: March 19, 2025</p>
  
        <section>
          <h2 className="text-xl font-semibold text-gray-800">1. Introduction</h2>
          <p className="text-gray-700">
            Welcome to our online shopify! We value your privacy and are committed to
            protecting your personal information. This Privacy Policy outlines how we
            collect, use, and protect your data when you visit our website or make a
            purchase.
          </p>
        </section>
  
        <section>
          <h2 className="text-xl font-semibold text-gray-800">2. Information We Collect</h2>
          <p className="text-gray-700">
            We may collect personal information when you:
          </p>
          <ul className="list-inside list-disc text-gray-700">
            <li>Make a purchase or place an order</li>
            <li>Sign up for an account</li>
            <li>Contact our customer service team</li>
            <li>Sign up for our newsletter or marketing communications</li>
            <li>Browse our website</li>
          </ul>
          <p className="text-gray-700">
            The types of personal information we collect may include:
          </p>
          <ul className="list-inside list-disc text-gray-700">
            <li>Name</li>
            <li>Email address</li>
            <li>Shipping and billing addresses</li>
            <li>Phone number</li>
            <li>Payment information</li>
          </ul>
        </section>
  
        <section>
          <h2 className="text-xl font-semibold text-gray-800">3. How We Use Your Information</h2>
          <p className="text-gray-700">
            We use your personal information for the following purposes:
          </p>
          <ul className="list-inside list-disc text-gray-700">
            <li>To process and fulfill your orders</li>
            <li>To send order updates and shipping confirmations</li>
            <li>To improve our website and customer service</li>
            <li>To send promotional and marketing communications (if you opt in)</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>
  
        <section>
          <h2 className="text-xl font-semibold text-gray-800">4. Data Security</h2>
          <p className="text-gray-700">
            We take the security of your personal data seriously. We implement
            appropriate technical and organizational measures to protect your
            information from unauthorized access, alteration, or destruction.
          </p>
          <p className="text-gray-700">
            However, no method of transmission over the internet or electronic
            storage is 100% secure, and we cannot guarantee its absolute security.
          </p>
        </section>
  
        <section>
          <h2 className="text-xl font-semibold text-gray-800">5. Sharing Your Information</h2>
          <p className="text-gray-700">
            We do not sell or rent your personal information to third parties. We may
            share your information in the following cases:
          </p>
          <ul className="list-inside list-disc text-gray-700">
            <li>With third-party service providers who help us operate our website or process orders</li>
            <li>With our affiliates or business partners for joint marketing efforts (if you opt in)</li>
            <li>To comply with legal obligations or respond to legal requests</li>
          </ul>
        </section>
  
        <section>
          <h2 className="text-xl font-semibold text-gray-800">6. Cookies</h2>
          <p className="text-gray-700">
            Our website uses cookies to enhance your shopping experience. Cookies are
            small files stored on your device that help us remember your preferences
            and improve website functionality.
          </p>
          <p className="text-gray-700">
            You can choose to disable cookies in your browser settings, but this may
            affect some features of our website.
          </p>
        </section>
  
        <section>
          <h2 className="text-xl font-semibold text-gray-800">7. Your Rights</h2>
          <p className="text-gray-700">
            You have the following rights regarding your personal information:
          </p>
          <ul className="list-inside list-disc text-gray-700">
            <li>The right to access the data we hold about you</li>
            <li>The right to correct any inaccurate information</li>
            <li>The right to request the deletion of your data</li>
            <li>The right to withdraw consent for marketing communications</li>
          </ul>
          <p className="text-gray-700">
            To exercise these rights, please contact us at <strong>support@shopify.com</strong>.
          </p>
        </section>
  
        <section>
          <h2 className="text-xl font-semibold text-gray-800">8. Changes to This Privacy Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time to reflect changes in
            our practices or for other operational, legal, or regulatory reasons. When
            we make changes, we will update the "Last Updated" date at the top of this
            page.
          </p>
        </section>
  
        <section>
          <h2 className="text-xl font-semibold text-gray-800">9. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions or concerns about this Privacy Policy or our
            practices, please contact us at:
          </p>
          <address className="text-gray-700">
            Email: <strong>support@shopify.com</strong>
            <br />
            Address: 123 Shop St, E-Commerce City, XYZ
          </address>
        </section>
      </div>
      <FooterComponent />
      </>
    );
  };
  
  export default PrivacyPolicyPage;