// src/components/PlantOfMonth.jsx
import React from "react";

const PlantOfMonth = () => {
  const featuredPlants = [
    {
      title: "January - Winter Fern",
      description: "Thrives in low light and adds lush greenery to cold days.",
      image: "https://i.ibb.co/kVHHmWVk/download-13.jpg"
    },
    {
      title: "February - Heartleaf Philodendron",
      description: "Symbol of love with heart-shaped leaves, perfect for Valentine’s.",
      image: "https://i.ibb.co/xqp5CZFC/download-14.jpg"
    },
    {
      title: "March - Lucky Bamboo",
      description: "Brings good luck and fresh vibes as spring approaches.",
      image: "https://i.ibb.co/jv39w19R/download-15.jpg"
    },
    {
      title: "April - Jade Plant",
      description: "Symbol of prosperity and thrives in bright indoor light.",
      image: "https://i.ibb.co/KzQtBp3c/download-16.jpg"
    },
    {
      title: "May - Geranium",
      description: "Colorful blooms ideal for windowsills and balconies.",
      image: "https://i.ibb.co/2RXVjdJ/download-17.jpg"
    },
    {
      title: "June - Aloe Vera",
      description: "Soothing summer plant with healing benefits.",
      image: "https://i.ibb.co/vxmg3MLP/download-6.jpg"
    },
    {
      title: "July - Calathea",
      description: "Striking leaf patterns and loves humidity.",
      image: "https://i.ibb.co/JFvhHTdB/download-18.jpg"
    },
    {
      title: "August - Cactus",
      description: "Low-maintenance and heat-loving plant for dry months.",
      image: "https://i.ibb.co/PZjffZLm/download-19.jpg"
    },
    {
      title: "September - Peace Lily",
      description: "Elegant plant that improves air quality and mood.",
      image: "https://i.ibb.co/GQxVRtzr/download-1.jpg"
    },
    {
      title: "October - Rubber Plant",
      description: "Glossy leaves and a strong autumn vibe.",
      image: "https://i.ibb.co/m5DTKFG1/download-20.jpg"
    }
  ];

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-4">Plant of the Month</h2>
      <p className="text-center text-gray-600 mb-6">
        Discover our special plant picks for each month of the year.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {featuredPlants.map((plant, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-md"
            data-aos="zoom-in"
            data-aos-delay={`${index * 100}`}
          >
            <figure>
              <img className="w-full h-[120px] md:h-[160px] lg:h-[200px] object-cover rounded" src={plant.image} alt={plant.title} />
            </figure>
            <div className="card-body">
              <h3 className="text-lg font-semibold">{plant.title}</h3>
              <p className="text-sm text-gray-600">{plant.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlantOfMonth;
