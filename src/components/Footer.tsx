import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 px-8 mb-7 border-t border-gray-500">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left section */}
        <div>
          <h2 className="font-extrabold text-3xl">Funiro.</h2>
          <address className="mt-4 not-italic text-gray-700">
            400 University Drive Suite 200 <br />
            Coral Gables, <br />
            FL 33134 USA
          </address>
        </div>

        {/* Middle section */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Links</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#" className="hover:text-black">Home</a></li>
              <li><a href="#" className="hover:text-black">Shop</a></li>
              <li><a href="#" className="hover:text-black">About</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Help</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#" className="hover:text-black">Payment Options</a></li>
              <li><a href="#" className="hover:text-black">Returns</a></li>
              <li><a href="#" className="hover:text-black">Privacy Policies</a></li>
            </ul>
          </div>
        </div>

        {/* Right section */}
        <div>
          <h3 className="font-semibold mb-2">Newsletter</h3>
          <p className="text-gray-700 mb-4">Enter Your Email Address</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border border-gray-300 p-2 w-full rounded-l-md focus:outline-none"
            />
            <button className="bg-black text-white p-2 rounded-r-md">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
