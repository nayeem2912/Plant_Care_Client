const SeasonalPlantCare = () => {
  return (
    <div className="max-w-4xl mx-auto p-6  space-y-6">
      <h1 className="text-4xl font-bold text-green-700 mb-4">Seasonal Plant Care Tips for Year-Round Health</h1>

      <p>
        Plants need different care depending on the season. Adjust watering, light, and feeding to keep them thriving throughout the year.
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Spring: Growth and Repotting</h2>
          
          <p>
            As plants awaken from dormancy, increase watering slightly and consider repotting to fresh soil to encourage growth.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Summer: Watering and Feeding</h2>
          <p>
            Hotter weather means plants may need more water and fertilizer. Keep an eye out for signs of heat stress.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Fall: Preparing for Dormancy</h2>
          <p>
            Gradually reduce watering and feeding. Trim dead or yellowing leaves to prepare plants for slower growth.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Winter: Minimal Care</h2>
          <p>
            Most indoor plants slow down. Water sparingly, maintain humidity, and provide as much natural light as possible.
          </p>
        </div>
      </div>

      <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-lg mt-6">
        <h3 className="text-lg font-semibold text-blue-700 mb-1">Seasonal Tip:</h3>
        <p className="text-gray-800">
          Use a humidifier or pebble tray during dry winters to prevent leaf browning.
        </p>
      </div>
    </div>
  );
};

export default SeasonalPlantCare;
