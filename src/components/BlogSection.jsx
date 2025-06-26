// src/components/BlogSection.jsx
import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      title: "Top 5 Indoor Plants for Beginners",
      excerpt: "Start your plant journey with these easy-to-grow beauties.",
      image: "https://via.placeholder.com/300x200?text=Indoor+Plants"
    },
    {
      title: "How to Water Plants the Right Way",
      excerpt: "Overwatering kills more plants than underwatering. Learn how much is enough.",
      image: "https://via.placeholder.com/300x200?text=Watering+Tips"
    },
    {
      title: "DIY Natural Fertilizers",
      excerpt: "Make compost, banana peels, and eggshell mixes at home for plant growth.",
      image: "https://via.placeholder.com/300x200?text=Fertilizer+DIY"
    },
    {
      title: "Sunlight Needs for Common Plants",
      excerpt: "Understand which plants thrive in low vs bright indirect light.",
      image: "https://via.placeholder.com/300x200?text=Sunlight+Guide"
    },
    {
      title: "Dealing with Common Plant Pests",
      excerpt: "Say goodbye to gnats and mites with these natural remedies.",
      image: "https://via.placeholder.com/300x200?text=Plant+Pests"
    },
    {
      title: "Decorating Small Spaces with Plants",
      excerpt: "Use hanging pots, shelves, and wall mounts for green interiors.",
      image: "https://via.placeholder.com/300x200?text=Decor+Ideas"
    },
    {
      title: "Air Purifying Houseplants",
      excerpt: "NASA-approved plants that clean the air while beautifying your room.",
      image: "https://via.placeholder.com/300x200?text=Air+Purifiers"
    },
    {
      title: "Seasonal Plant Care Tips",
      excerpt: "How to adjust watering and light for each season.",
      image: "https://via.placeholder.com/300x200?text=Seasonal+Care"
    }
  ];

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-4">From Our Blog</h2>
      <p className="text-center text-gray-600 mb-6">
        Learn tips, tricks, and inspiration to grow your indoor jungle.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-md"
            data-aos="zoom-in"
            data-aos-delay={`${index * 100}`}
          >
            <figure>
            </figure>
            <div className="card-body">
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <p className="text-sm text-gray-600">{blog.excerpt}</p>
              <button className="btn btn-sm btn-outline btn-primary mt-2">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
