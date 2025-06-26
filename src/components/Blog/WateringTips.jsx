const WateringTips = () => {
  return (
    <div className="max-w-4xl mx-auto p-6  space-y-6">
      <h1 className="text-4xl font-bold text-green-700 mb-4">How to Water Plants the Right Way</h1>

      <p>
        Watering your plants may seem simple, but it’s one of the most common areas where plant
        parents make mistakes. Overwatering or underwatering can lead to root rot, wilting, or even
        plant death. Let’s explore the correct way to water indoor plants.
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">1. Know Your Plant’s Needs</h2>
          <p>
            Different plants need different amounts of water. Cacti need very little, while ferns love
            moisture. Understand the natural habitat of your plant to better mimic its needs indoors.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">2. Use the Finger Test</h2>
          <p>
            Stick your finger into the soil about 1 inch deep. If it feels dry, it’s time to water.
            If it’s moist, wait a day or two. This is the simplest and most effective method to
            determine watering needs.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">3. Water Thoroughly but Infrequently</h2>
          <p>
            When you water, do it deeply so that water reaches the roots. Let excess water drain out
            completely. Avoid small sips every day—this causes shallow root growth.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">4. Choose the Right Time</h2>
          <p>
            Morning is the best time to water. This gives your plants time to absorb moisture before
            the heat of the day, and reduces the risk of fungal growth overnight.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">5. Watch for Warning Signs</h2>
          <p>
            Yellow leaves often signal overwatering. Crispy brown edges may mean too little. Adjust
            your schedule based on these signs.
          </p>
        </div>
      </div>

      {/* Summary Box */}
      <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-lg mt-6">
        <h3 className="text-lg font-semibold text-blue-700 mb-1">Quick Tip:</h3>
        <p className="text-gray-800">
          Always use pots with drainage holes. Standing water leads to root rot, one of the leading
          killers of houseplants.
        </p>
      </div>
    </div>
  );
};

export default WateringTips;
