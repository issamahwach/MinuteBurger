import React from "react";

function Contact() {
  return (
    <div>
      <h2 className="text-white font-bold text-2xl text-center mb-12">
        Contact Us
      </h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.6126626384453!2d35.618637575382955!3d33.95108912306531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f3f6d6fe2c497%3A0xe22aab437ca2566a!2sBurger%20King%20-%20Zouk%20Mosbeh!5e0!3m2!1sen!2slb!4v1699451779082!5m2!1sen!2slb"
            width="600"
            height="450"
            className="border-0 w-full h-full"
            loading="lazy"
          ></iframe>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-row items-center"></div>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-transparent border-gray-700 mb-8 placeholder:text-gray-300 text-white focus:border-white"
            />
            <input
              type="text"
              placeholder="Email"
              className="bg-transparent border-gray-700 mb-8 placeholder:text-gray-300 text-white focus:border-white"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-transparent border-gray-700 mb-8 placeholder:text-gray-300 text-white focus:border-white"
            />
            <textarea
              rows={5}
              placeholder="Message"
              className="bg-transparent border-gray-700 mb-8 placeholder:text-gray-300 text-white focus:border-white"
            ></textarea>
            <button
              type="submit"
              className="border border-white text-white px-6 py-2 transition-colors hover:bg-white hover:text-black"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
