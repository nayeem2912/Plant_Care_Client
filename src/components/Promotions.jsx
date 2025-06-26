import React from "react";
import { Link } from "react-router";

const Promotions = () => {
  const offers = [
    { title: "Summer Sale - 20% Off", desc: "Enjoy 20% off all indoor plants this summer.", img: "https://i.ibb.co/xc31yYZ/120218-OPOVCB-481.jpg" },
    { title: "Buy 2 Get 1 Free", desc: "Choose from selected succulents.", img: "https://i.ibb.co/Fk1ncS5X/3a2661ab-9a65-4ba5-b91a-b6a139a290e1.jpg" },
    { title: "New Arrival Offer", desc: "Flat ৳100 off on new plants.", img: "https://i.ibb.co/CKVGQh2S/SL-110520-37650-09.jpg" },
    { title: "Free Shipping Weekend", desc: "Get delivery free for all orders above ৳500.", img: "https://i.ibb.co/cSyG6YVW/4192736.jpg" },
    { title: "Exclusive Members Deal", desc: "Sign up and get special discounts.", img: "https://i.ibb.co/hRhqY9Ts/6859563.jpg" },
    
  ];
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-4">Current Promotions</h2>
      <p className="text-center text-gray-500 mb-6">Don’t miss these limited-time plant offers and discounts!</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {offers.map((item, index) => (
          <div key={index} className="card bg-base-100 shadow-md" data-aos="zoom-in" data-aos-delay={`${index * 100}`}>
            <figure><img className="w-full h-[120px] md:h-[160px] lg:h-[200px] object-cover rounded" src={item.img} alt={item.title} /></figure>
            <div className="card-body">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
              <Link to='/addPlant'>
              <button className="btn w-full btn-success btn-sm mt-2">Claim Offer</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Promotions;