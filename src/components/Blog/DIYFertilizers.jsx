const DIYFertilizers = () => {
  return (
    <div className="max-w-4xl mx-auto p-6  space-y-6">
      <h1 className="text-4xl font-bold text-green-700 mb-4">DIY Natural Fertilizers for Healthy Plants</h1>

      <p>
        Want to feed your plants without spending money on store-bought fertilizers? Nature already
        provides what your green friends need! These DIY options are easy to make, effective, and
        safe for the environment.
      </p>

      <div className="space-y-8">
        {/* Compost */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">1. Compost</h2>
          <p>
            Composting is the gold standard of natural fertilizers. Use food scraps like vegetable
            peels, coffee grounds, and eggshells. Let them decompose in a bin or pile to make rich,
            nutrient-dense compost.
          </p>
        </div>

        {/* Banana Peel Fertilizer */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">2. Banana Peel Fertilizer</h2>
          <p>
            Banana peels are packed with potassium and phosphorus—key nutrients for flowering plants.
            Cut them into small pieces and bury them around the plant base.
          </p>
        </div>

        {/* Eggshell Tea */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">3. Eggshell Tea</h2>
          <p>
            Rich in calcium, eggshells strengthen cell walls and help root development. Crush shells,
            soak in water for 3–5 days, and use the water to feed your plants.
          </p>
        </div>

        {/* Epsom Salt Solution */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">4. Epsom Salt Solution</h2>
          <p>
            Great for magnesium-loving plants like tomatoes and peppers. Mix 1 tbsp of Epsom salt in a
            liter of water and spray on leaves once a month.
          </p>
        </div>

        {/* Used Tea Leaves */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">5. Used Tea Leaves</h2>
          <p>
            Tea leaves improve soil texture and offer a slow nitrogen release. Dry them out before
            mixing into your soil.
          </p>
        </div>
      </div>

      {/* Tip Box */}
      <div className="bg-amber-100 border-l-4 border-amber-500 p-4 rounded-lg mt-6">
        <h3 className="text-lg font-semibold text-amber-700 mb-1">Tip:</h3>
        <p className="text-gray-800">
          Don’t overuse natural fertilizers—more is not always better. Apply every 4–6 weeks depending
          on plant needs.
        </p>
      </div>
    </div>
  );
};

export default DIYFertilizers;
