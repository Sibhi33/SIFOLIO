import React, { useState } from "react";
import { MailIcon } from "@heroicons/react/solid";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email.js credentials
    const serviceId = "service_eus0gwc";
    const templateId = "template_vh5cb3m";
    const userId = "l2qPZsVM9v4nb49cH";

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("Success!", response.status, response.text);
        setSuccess(true);
        setError(false);
        setFormData({ name: "", email: "", message: "" }); // Reset form
      })
      .catch((err) => {
        console.error("Failed...", err.text || err.message);
        setError(true);
        setSuccess(false);
      });
  };

  return (
    <div id="Contact" className="pb-72 mt-16">

      <div className="table mx-12 lg:mx-60">
        <MailIcon className="h-5 w-5 mr-4 text-yellow_vs" />
        <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
          Get In Touch
        </code>
        <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5 mx-12 lg:mx-60 flex flex-col items-center text-justify">
        <code>
          Currently looking out for new opportunities, you can contact me using
          the form below. Whether you have a question or just want to say hi,
          feel free to drop a message!
        </code>

        <form
          onSubmit={handleSubmit}
          className="mt-10 w-full lg:w-2/3 mx-auto flex flex-col"
        >
          <div className="w-full">
            <label
              className="block text-lightblue_vs text-lg font-semibold mb-2"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full p-4 bg-transparent border border-[#e6f1ff] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-lightblue_vs mb-6 transition ease-in-out duration-200"
            />
          </div>

          <div className="w-full">
            <label
              className="block text-lightblue_vs text-lg font-semibold mb-2"
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
              className="w-full p-4 bg-transparent border border-[#e6f1ff] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-lightblue_vs mb-6 transition ease-in-out duration-200"
            />
          </div>

          <div className="w-full">
            <label
              className="block text-lightblue_vs text-lg font-semibold mb-2"
              htmlFor="message"
            >
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
              className="w-full p-4 bg-transparent border border-[#e6f1ff] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-lightblue_vs mb-6 transition ease-in-out duration-200"
              rows={6}
            />
          </div>

          <button
            type="submit"
            className="self-start p-4 bg-lightblue_vs text-white text-lg font-semibold rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-lightblue_vs transition ease-in-out duration-200"
          >
            Send Message
          </button>

          {/* Success or Error Messages */}
          {success && (
            <p className="text-green-500 text-lg font-semibold mt-6">
              Message sent successfully! Thank you for reaching out.
            </p>
          )}
          {error && (
            <p className="text-red-500 text-lg font-semibold mt-6">
              Failed to send the message. Please try again later.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
