
import React from "react";


const TopRated = () => {
  const items = [
    {
      title: "Fiddle Leaf Fig",
      description: "A bold statement plant with broad, violin-shaped leaves.",
      image: "https://i.ibb.co/ymkyw9gn/download-29.jpg"
    },
    {
      title: "Snake Plant",
      description: "Low maintenance and perfect for bedrooms.",
      image: "https://i.ibb.co/sd9zJfK9/download.jpg"
    },
    {
      title: "Peace Lily",
      description: "Beautiful white blooms and air purifying.",
      image: "https://i.ibb.co/GQxVRtzr/download-1.jpg"
    },
    {
      title: "Areca Palm",
      description: "Adds a tropical vibe to your living room.",
      image: "https://i.ibb.co/SX0J7wMX/download-2.jpg"
    },
    {
      title: "ZZ Plant",
      description: "Almost indestructible, perfect for beginners.",
      image: "https://i.ibb.co/nNsBS8wm/download-3.jpg"
    },
    {
      title: "Spider Plant",
      description: "Great for hanging baskets and propagation.",
      image: "https://i.ibb.co/Qjc1zs15/download-4.jpg"
    },
    {
      title: "Pothos",
      description: "Fast-growing and thrives in low light.",
      image: "https://i.ibb.co/wZYqZkRw/download-5.jpg"
    },
    {
      title: "Aloe Vera",
      description: "Medicinal use and sun-loving.",
      image: "https://i.ibb.co/vxmg3MLP/download-6.jpg"
    }
  ];
         
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-4">Top-Rated Plants</h2>
      <p className="text-center text-gray-600 mb-6">
        Our customers' all-time favorite indoor plants.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-md"
            data-aos="zoom-in"
            data-aos-delay={`${index * 100}`}
          >
            <figure>
              <img  className="w-full h-[120px] md:h-[160px] lg:h-[200px] object-cover rounded" src={item.image} alt={item.title} />
            </figure>
            <div className="card-body">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRated;
