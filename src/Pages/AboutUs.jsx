import Logo from "../components/Logo";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 ">
      {/* Logo and Name */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <Logo></Logo>
      </div>

      <h1 className="text-4xl font-bold text-center text-green-700 mb-6">About Plant Care</h1>

      <p className="text-lg text-center  mb-10">
        Helping you grow a greener world, one plant at a time.
      </p>

      <div className=" text-center ">
        
        
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-600">Our Mission</h2>
          <p>
            At Plant Care, our mission is to make plant care simple, accessible, and enjoyable for everyone. Whether you're a seasoned gardener or a curious beginner, we provide tools, tips, and top-notch plant selections to help you succeed.
          </p>
        </div>
      </div>

      <div className="text-center mt-16">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-600">What We Offer</h2>
          <ul className="list-disc text-center ml-5 space-y-2">
             ✔️Detailed plant care guides tailored to your plant types. <br />
            ✔️Top-rated indoor plants with delivery and support. <br />
            ✔️Blogs, tips, and seasonal plant care reminders. <br />
            ✔️User-friendly platform with watering schedules. <br />
          </ul>
        </div>
       
      </div>

      <div className="bg-green-50 p-8 rounded-xl mt-16 shadow">
        <h2 className="text-2xl font-semibold text-green-700 mb-3">Why Choose Us?</h2>
        <p className="text-gray-800">
          We're passionate about plants and committed to helping you keep them healthy. With 24/7 support, curated content, and an ever-growing community of plant lovers, Plant Care is your trusted partner in your plant journey.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
