import { Link } from "react-router-dom";

const CategorySection = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Categories</h2>
      <div className="flex gap-4 justify-center">
        <Link
          to="/products?category=Cardio Equipment"
          className="bg-blue-500 text-white p-3 rounded-lg"
        >
          Cardio Equipment
        </Link>
        <Link
          to="/products?category=Strength Training"
          className="bg-blue-500 text-white p-3 rounded-lg"
        >
          Strength Equipment
        </Link>
        <Link
          to="/products?category=Wearables"
          className="bg-blue-500 text-white p-3 rounded-lg"
        >
          Accessories
        </Link>
      </div>
    </div>
  );
};

export default CategorySection;
