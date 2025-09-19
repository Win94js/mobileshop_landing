import React from "react";
import contactImg from "../assets/Photos/customersImg.jpg"; // your image here

function ContactUs() {
  return (
    <section
      id="contact"
      className="relative w-full bg-gray-50 py-16 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-lg overflow-hidden">
        
        {/* Image Section */}
        <div className="hidden md:block">
          <img
            src={contactImg}
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-6">
            Have questions or want to work with us? Fill out the form and
            we’ll get back to you soon.
          </p>

          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
