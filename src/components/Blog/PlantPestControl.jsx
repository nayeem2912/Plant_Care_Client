const PlantPestControl = () => {
  return (
    <div className="max-w-4xl mx-auto p-6  space-y-6">
      <h1 className="text-4xl font-bold text-green-700 mb-4">Dealing with Common Plant Pests Naturally</h1>

      <p>
        Pests can quickly damage your beloved plants if left unchecked. The good news is, many natural remedies exist that help keep pests away without harmful chemicals.
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">1. Identifying Common Pests</h2>
          
          <p>
            Watch for tiny aphids, spider mites, mealybugs, and fungus gnats. Each pest has unique signs like sticky leaves, webbing, or powdery residue.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">2. Natural Pest Remedies</h2>
          <p>
            Use neem oil sprays, insecticidal soap, or garlic and chili pepper sprays to repel pests. These are safe for plants and pets.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">3. Encouraging Beneficial Insects</h2>
          <p>
            Ladybugs and predatory mites can naturally control pest populations. Plant flowering herbs like dill or fennel to attract them.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">4. Regular Maintenance</h2>
          <p>
            Keep plants clean by wiping leaves and removing dead debris. Healthy plants resist pests better.
          </p>
        </div>
      </div>

      <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded-lg mt-6">
        <h3 className="text-lg font-semibold text-red-700 mb-1">Quick Tip:</h3>
        <p className="text-gray-800">
          Always test sprays on a small leaf section first to check for sensitivity before applying widely.
        </p>
      </div>
    </div>
  );
};

export default PlantPestControl;
