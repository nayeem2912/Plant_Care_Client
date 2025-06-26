const AirPurifyingPlants = () => {
  return (
    <div className="max-w-4xl mx-auto p-6  space-y-6">
      <h1 className="text-4xl font-bold text-green-700 mb-4">Air Purifying Houseplants That Improve Indoor Air Quality</h1>

      <p>
        Certain houseplants can filter harmful toxins from the air and improve your home's air quality. Here's a guide to some popular air purifiers.
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Spider Plant</h2>
          
          <p>
            Excellent at removing carbon monoxide and formaldehyde. Easy to care for and grows quickly.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Peace Lily</h2>
          <p>
            Removes mold spores and VOCs (volatile organic compounds). Prefers low to medium light.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Snake Plant</h2>
          <p>
            Known for oxygenating air at night and filtering toxins. Very drought tolerant.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Boston Fern</h2>
          <p>
            Humidifies the air and removes formaldehyde. Needs frequent watering and indirect light.
          </p>
        </div>
      </div>

      <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-lg mt-6">
        <h3 className="text-lg font-semibold text-green-700 mb-1">Tip:</h3>
        <p className="text-gray-800">
          Regularly wipe leaves to keep pores open and functioning well for air purification.
        </p>
      </div>
    </div>
  );
};

export default AirPurifyingPlants;
