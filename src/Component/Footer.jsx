import React from "react";

 function Footer() {
  return (
    <footer className="bg-gray-300 text-black mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-3">villa Hotel</h2>
          <p className="text-sm">
           Your comfort is our priority.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/home" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p>Email: info@villahotel.com</p>
          <p>Phone: +9812345678</p>
          <p>Location: Nepal</p>
        </div>
      </div>

      <div className="text-center py-4 bg-gray-400 text-sm">
        ©  Villa Hotel. All rights reserved.
        
      </div>
    </footer>
  );
}
export default Footer;