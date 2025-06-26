import { useState } from "react";
import Swal from "sweetalert2";


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   

     Swal.fire({
      title: " Thanks for contacting us! We will get back to you soon.",
      icon: "success",
      draggable: true
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-4">Contact Us</h1>
      <p className="text-center   mb-10">
        Have a question, suggestion, or just want to say hello? Send us a message!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">📍 Address</h2>
            <p>123 Green Street, Dhaka, Bangladesh</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">📞 Phone</h2>
            <p>+880 1575 162 723</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">📧 Email</h2>
            <p>omarnayeem32@gmail.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-gray-50 text-gray-800 p-6 shadow-xl rounded-xl"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="input bg-gray-50 border-base-300 text-gray-800 input-bordered w-full"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="input  bg-gray-50 border-base-300 text-gray-800 input-bordered w-full"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="textarea  bg-gray-50 border-base-300 text-gray-800  textarea-bordered w-full"
            required
          ></textarea>
          <button type="submit" className="btn hover:text-white  bg-gray-50 border-base-300 text-gray-800 hover:bg-[#0EA106] w-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
