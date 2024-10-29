import Button from "../components/Button";

const Project1 = () => {
  return (
    <section className="container">
      <div className="p-6 bg-white max-w-4xl mx-auto my-10 rounded-lg shadow-md">
        <h1 className="text-sm text-gray-700 my-1 font-semibold"><span className="cursor-pointer"><a href="/">Home</a></span> / xiaomistorecentre</h1>
        <h1 className="text-3xl font-bold text-secondary mb-4">
          Xiaomi Store Centre
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          A frontend e-commerce project for Xiaomi products. and Tailwind CSS.
        </p>

        <h2 className="text-2xl font-semibold text-secondary mb-3">Features</h2>
        <ul className="list-disc list-inside text-gray-700 mb-3">
          <li>Browse Xiaomi products with sleek UI components.</li>
          <li>Product filtering and sorting.</li>
          <li>Responsive design using Tailwind CSS.</li>
          <li>Interactive shopping cart with item management.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-secondary mb-3">
          Technologies Used
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-3">
          <li>
            <span className="font-bold">React.js</span>: For UI components and
            state management.
          </li>
          <li>
            <span className="font-bold">Tailwind CSS</span>: For responsive,
            utility-first styling.
          </li>
        </ul>
        <div className="mb-3">
          <Button label="View Code" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-secondary mb-3">
            Shopping Cart and Product Management
          </h2>
          <p className="text-gray-700">
            To enhance user experience on the e-commerce platform, I implemented
            local storage to manage cart functionality. When a user adds an item
            to the cart, it is stored directly in the browser's local storage.
            The cart count displayed in the header is updated in real-time,
            refreshed every 5 seconds by retrieving the latest cart items. On
            the dedicated "My Cart" page, users can view and manage their
            selected items, including the ability to remove products from their
            cart, which immediately updates local storage. <br /> <br />
            While local storage provides fast access and is effective for simple
            use cases, a more robust approach would involve handling cart data
            through the backend. Storing cart information in a secure cloud
            database (e.g., using a backend framework like Django) allows for
            data persistence across devices and provides better security. This
            approach enables users to log in and access their cart from any
            device, making it a more scalable solution, especially for larger
            e-commerce platforms.
            <br /> <br />
            Additionally, products are organized as a list in the constants
            folder, enabling different sections to display products by category.
            This approach makes it easy to retrieve and display relevant
            products dynamically across the website. Storing product data in a
            backend database could further enhance data management and security,
            allowing for efficient updates and access controls.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-secondary mt-6 mb-3">
            Challenges and Solutions
          </h2>
          <p className="text-gray-700">
            I encountered two primary challenges: implementing user
            authentication and handling payment processing securely. While
            authentication can be achieved through backend technologies like
            Django using JWT tokens, developing a secure and seamless
            authentication process on the frontend posed unique challenges. One
            potential solution I explored was using a JSON file to manage
            registered users, which could be an area for further development and
            testing. <br /> <br />
            For payment processing, I considered making transaction information
            downloadable; however, secure payment management is best handled
            through robust backend frameworks like Django, as sensitive
            information should be accessible only to authorized personnel. Using
            a backend-first approach for payments would ensure a secure,
            reliable experience for users.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project1;
