import React from 'react';

const TopIndoorPlants = () => {
    return (
        <div>
              <div className="max-w-4xl mx-auto p-6  space-y-6">
      <h1 className="text-4xl font-bold text-green-700 mb-4">Top 5 Indoor Plants for Beginners</h1>

      <p>
        Starting your plant parenting journey? These 5 indoor plants are not only beautiful but also
        extremely easy to care for. Whether you live in a sunny apartment or a shady room, these
        plants are your perfect green companions.
      </p>

      <div className="space-y-8">
        {/* Peace Lily */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">1. Peace Lily</h2>
          <img
            src="https://i.ibb.co/GQxVRtzr/download-1.jpg"
            alt="Peace Lily"
            className="rounded-lg mb-2"
          />
          <p>
            Peace Lily is a forgiving plant that can thrive in low-light conditions. It blooms
            beautiful white flowers and is known to purify indoor air.
          </p>
          <p className="mt-2"><strong>Care Tips:</strong> Water when the soil is dry. Keep away from direct sunlight.</p>
        </div>

        {/* Snake Plant */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">2. Snake Plant</h2>
          <img
            src="https://i.ibb.co/sd9zJfK9/download.jpg"
            alt="Snake Plant"
            className="rounded-lg mb-2"
          />
          <p>
            Known as “mother-in-law’s tongue,” the Snake Plant is one of the hardest plants to kill.
            It tolerates low light and infrequent watering.
          </p>
          <p className="mt-2"><strong>Care Tips:</strong> Water every 2-3 weeks. Tolerates neglect.</p>
        </div>

        {/* Pothos */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">3. Pothos</h2>
          <img
            src="https://i.ibb.co/wZYqZkRw/download-5.jpg"
            alt="Pothos"
            className="rounded-lg mb-2"
          />
          <p>
            Also called Devil’s Ivy, Pothos is a fast-growing vine that’s perfect for hanging baskets or
            shelves. Its green leaves add instant jungle vibes to your home.
          </p>
          <p className="mt-2"><strong>Care Tips:</strong> Water when the top inch of soil is dry. Thrives in indirect light.</p>
        </div>

        {/* ZZ Plant */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">4. ZZ Plant</h2>
          <img
            src="https://i.ibb.co/nNsBS8wm/download-3.jpg"
            alt="ZZ Plant"
            className="rounded-lg mb-2"
          />
          <p>
            ZZ Plant is almost unkillable. It survives on neglect, needs very little light and water, and
            still looks amazing with its glossy leaves.
          </p>
          <p className="mt-2"><strong>Care Tips:</strong> Water once every 2–3 weeks. Very drought-tolerant.</p>
        </div>

        {/* Spider Plant */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">5. Spider Plant</h2>
          <img
            src="https://i.ibb.co/Qjc1zs15/download-4.jpg"
            alt="Spider Plant"
            className="rounded-lg mb-2"
          />
          <p>
            Spider Plant grows fast and produces baby offshoots called “pups.” It’s perfect for
            hanging pots and adds a lot of greenery.
          </p>
          <p className="mt-2"><strong>Care Tips:</strong> Keep soil moist but not soggy. Likes bright, indirect light.</p>
        </div>
      </div>

      {/* Summary Box */}
      <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-lg mt-6">
        <h3 className="text-lg font-semibold text-green-700 mb-1">Beginner Tip:</h3>
        <p className='text-gray-800'>
          Always check the soil before watering. Overwatering is the number one killer of indoor plants.
          Use a finger test — if the top inch is dry, it's time to water.
        </p>
      </div>
    </div>
        </div>
    );
};

export default TopIndoorPlants;