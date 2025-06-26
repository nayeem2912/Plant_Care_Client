const SunlightGuide = () => {
  return (
    <div className="max-w-4xl mx-auto p-6  space-y-6">
      <h1 className="text-4xl font-bold text-green-700 mb-4">Sunlight Needs for Common Houseplants</h1>

      <p>
        Light is one of the most essential resources your plant needs to survive and thrive. However,
        all plants don’t require the same intensity or duration of light. Understanding your plant's
        sunlight needs is crucial for long-term health and vibrant growth.
      </p>

      <div className="space-y-8">
        {/* Low Light Plants */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">1. Low Light Plants</h2>
          
          <p>
            These plants thrive in indirect light or areas with minimal sun exposure. Perfect for
            bathrooms or corners.
          </p>
          <ul className="list-disc ml-6 mt-2 ">
            <li>ZZ Plant</li>
            <li>Snake Plant</li>
            <li>Peace Lily</li>
          </ul>
        </div>

        {/* Medium Light Plants */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">2. Medium Light Plants</h2>
          
          <p>
            These plants enjoy filtered light, such as near an east or west-facing window with sheer
            curtains.
          </p>
          <ul className="list-disc ml-6 mt-2 ">
            <li>Pothos</li>
            <li>Spider Plant</li>
            <li>Philodendron</li>
          </ul>
        </div>

        {/* Bright Light Plants */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">3. Bright Indirect Light Plants</h2>
          
          <p>
            These plants require strong light but not direct sun rays. Ideal near south-facing windows
            where sunlight doesn't directly hit the leaves.
          </p>
          <ul className="list-disc ml-6 mt-2 ">
            <li>Fiddle Leaf Fig</li>
            <li>Areca Palm</li>
            <li>Rubber Plant</li>
          </ul>
        </div>

        {/* Direct Sunlight Plants */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">4. Direct Sunlight Plants</h2>
          <p>
            Some plants need full sun exposure for several hours a day. These are typically outdoor or
            balcony plants.
          </p>
          <ul className="list-disc ml-6 mt-2 ">
            <li>Succulents</li>
            <li>Cacti</li>
            <li>Geranium</li>
          </ul>
        </div>
      </div>

      {/* Tip Box */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg mt-6">
        <h3 className="text-lg font-semibold text-yellow-700 mb-1">Tip:</h3>
        <p className="text-gray-800">
          Rotate your plants weekly so all sides receive equal sunlight. This prevents lopsided
          growth.
        </p>
      </div>
    </div>
  );
};

export default SunlightGuide;
