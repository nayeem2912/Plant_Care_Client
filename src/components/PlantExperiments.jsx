import React from "react";

const PlantExperiments = () => {
  const ideas = [
    { title: "Grow Herbs from Seeds", desc: "Start basil, mint, or cilantro indoors.", img: "https://i.ibb.co/qMz9DzC7/man-with-plants-that-have-been-cultivated-farmed-indoors.jpg" },
    { title: "Water Propagation", desc: "Propagate pothos or monstera in water jars.", img: "https://i.ibb.co/7N8K6qyh/download-7.jpg" },
    { title: "DIY Terrarium", desc: "Build your own succulent glass terrarium.", img: "https://i.ibb.co/mVJsqFJ0/download-8.jpg" },
    { title: "Sunlight Tracking", desc: "Test different window spots for plant growth.", img: "https://i.ibb.co/zhwSQjhy/background-with-window-blinds-shadow-golden-hour.jpg" },
    { title: "Compost Enrichment", desc: "Feed plants with homemade banana peel water.", img: "https://i.ibb.co/B2Svn8vJ/download-9.jpg" },
    { title: "Self-Watering System", desc: "Try a bottle drip system for vacation days.", img: "https://i.ibb.co/670qV6BW/download-10.jpg" },
    { title: "Humidity Test", desc: "Place plants near bathroom/showers for growth.", img: "https://i.ibb.co/20hvYtsk/download-11.jpg" },
    { title: "Eggshell Booster", desc: "Crush & sprinkle eggshells in pot soil.", img: "https://i.ibb.co/35p7RM0f/download-12.jpg" },
  ];
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-4">Plant Experiments</h2>
      <p className="text-center  mb-6">Try these fun and useful DIY plant ideas at home!</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {ideas.map((item, index) => (
          <div key={index} className="card  bg-gray-50 border-base-300 text-gray-800 shadow-md" data-aos="zoom-in" data-aos-delay={`${index * 100}`}>
            <figure><img className="w-full h-[120px] md:h-[160px] lg:h-[200px] object-cover rounded" src={item.img} alt={item.title} /></figure>
            <div className="card-body">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlantExperiments;