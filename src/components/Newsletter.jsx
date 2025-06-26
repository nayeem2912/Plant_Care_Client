// components/Newsletter.jsx
import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") return;
    setSubmitted(true);
    setEmail("");
    
  };

  return (
    <section className="py-10 px-4 max-w-3xl mx-auto text-center" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className=" mb-6">
        Get the latest plant care tips, offers, and updates straight to your inbox.
      </p>
      {submitted ? (
        <p className="text-green-600 font-semibold">Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full max-w-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn bg-green-600">
            Subscribe
          </button>
        </form>
      )}
    </section>
  );
};

export default Newsletter;
