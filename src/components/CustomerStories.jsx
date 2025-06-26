
import React from "react";

const CustomerStories = () => {
  const stories = [
    {
      name: "Ayesha Rahman",
      location: "Dhaka",
      feedback: "I never thought I could keep a plant alive, but the tips on this site made it easy!",
      img: "https://i.ibb.co/Z1v5vqk8/close-up-portrait-indian-hindu-girl-traditional-violet-saree-posed-street.jpg"
    },
    {
      name: "Tanvir Ahmed",
      location: "Chattogram",
      feedback: "Their succulents collection is amazing. Fast delivery and great quality.",
      img: "https://i.ibb.co/vxVC9nmX/closeup-young-hispanic-man-casuals-studio.jpg"
    },
    {
      name: "Rina Akter",
      location: "Khulna",
      feedback: "Loved the Plant of the Month idea. Now I have a plant buddy every month!",
      img: "https://i.ibb.co/N2H5ZkTQ/beautiful-young-girl-leather-jacket-scarf-sitting-streets-chicago.jpg"
    },
    {
      name: "Shuvo Sarkar",
      location: "Sylhet",
      feedback: "Excellent service and plant care guides helped my pothos thrive.",
      img: "https://i.ibb.co/SXtC7kgq/young-bearded-man-with-striped-shirt.jpg"
    },
    {
      name: "Mou Rahman",
      location: "Barisal",
      feedback: "I ordered a combo pack during promotion. All plants arrived healthy and fresh!",
      img: "https://i.ibb.co/Z1v5vqk8/close-up-portrait-indian-hindu-girl-traditional-violet-saree-posed-street.jpg"
    },
    {
      name: "Arif Ullah",
      location: "Rangpur",
      feedback: "Blog section taught me how to make compost. Super useful!",
      img: "https://i.ibb.co/vxVC9nmX/closeup-young-hispanic-man-casuals-studio.jpg"
    },
    {
      name: "Tania Sultana",
      location: "Rajshahi",
      feedback: "Their beginner’s guide is so simple, even my kids love taking care of the plants now.",
      img: "https://i.ibb.co/N2H5ZkTQ/beautiful-young-girl-leather-jacket-scarf-sitting-streets-chicago.jpg"
    },
    {
      name: "Hasan Mahmud",
      location: "Narsingdi",
      feedback: "Received my bonsai in perfect condition. Will shop again soon.",
      img: "https://i.ibb.co/SXtC7kgq/young-bearded-man-with-striped-shirt.jpg"
    }
  ];

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-4">Customer Stories</h2>
      <p className="text-center text-gray-500 mb-6">Real experiences from plant lovers across Bangladesh.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {stories.map((s, index) => (
          <div key={index} className="card bg-base-100 shadow-md" data-aos="zoom-in" data-aos-delay={`${index * 100}`}>
            <figure><img className="w-full h-[120px] md:h-[160px] lg:h-[200px] object-cover rounded" src={s.img} alt={s.name} /></figure>
            <div className="card-body">
              <h3 className="text-lg font-semibold">{s.name}</h3>
              <p className="text-sm text-gray-500 italic">{s.location}</p>
              <p className="text-sm text-gray-700">“{s.feedback}”</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerStories;
