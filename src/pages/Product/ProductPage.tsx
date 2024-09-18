/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../Product/ProductCard";
import { useGetAllProductQuery } from "@/redux/api/productApi/ProductApi";

const Product = () => {
  const { data: products, error, isLoading } = useGetAllProductQuery(undefined);
  const location = useLocation();

  // Local state for search, selected categories, price filter, and sorting
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // Extract query parameters for category filters (optional)
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get("category");

  // Set initial selected category from URL if present
  useEffect(() => {
    if (initialCategory && !selectedCategories.includes(initialCategory)) {
      setSelectedCategories([...selectedCategories, initialCategory]);
    }
  }, [initialCategory]);

  // Search functionality to filter products by name
  const filteredProducts = products?.data
    .filter((product: any) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    // Filter by selected categories
    .filter((product: any) =>
      selectedCategories.length
        ? selectedCategories.includes(product.category.toLowerCase())
        : true
    )
    // Filter by price range
    .filter(
      (product: any) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    )
    // Sort by price
    .sort((a: any, b: any) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  // Handle category selection (multiple selections)
  const handleCategorySelection = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Handle price range filter
  const handlePriceRange = (min: number, max: number) => {
    setPriceRange({ min, max });
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setPriceRange({ min: 0, max: Infinity });
    setSortOrder("asc");
  };

  // Loading and error handling
  if (isLoading)
    return <p className="text-center text-xl">Loading products...</p>;
  if (error)
    return (
      <p className="text-center text-xl text-red-500">Error loading products</p>
    );

  return (
    <div className=" mx-auto mt-16 py-4 w-full">
      <h1 className="text-4xl text-white text-center font-bold p-4 bg-slate-700">
        {selectedCategories.length > 0
          ? `${selectedCategories.join(", ")} Products`
          : "All Products"}
      </h1>

      {/* Search and filter options */}
      <div className="flex justify-between p-4 bg-slate-200">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-1/3"
        />

        {/* Sort Order */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
          className="border p-2 rounded"
        >
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>

        {/* Price Range */}
        <div>
          <label className="mr-2">Price Range:</label>
          <input
            type="number"
            placeholder="Min"
            value={priceRange.min === 0 ? "" : priceRange.min}
            onChange={(e) => handlePriceRange(+e.target.value, priceRange.max)}
            className="border p-2 w-20 rounded"
          />
          <input
            type="number"
            placeholder="Max"
            value={priceRange.max === Infinity ? "" : priceRange.max}
            onChange={(e) => handlePriceRange(priceRange.min, +e.target.value)}
            className="border p-2 w-20 rounded ml-2"
          />
        </div>

        <button
          onClick={clearFilters}
          className="bg-red-500 text-white p-2 rounded"
        >
          Clear Filters
        </button>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 p-4">
        {[
          "Cardio",
          "Strength",
          "Bicep",
          "Dumbell",
          "Kettlebell",
          "Accessories",
        ].map((category) => (
          <button
            key={category}
            onClick={() => handleCategorySelection(category.toLowerCase())}
            className={`p-2 rounded border ${
              selectedCategories.includes(category.toLowerCase())
                ? "bg-blue-500 text-white"
                : "bg-white text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 bg-slate-400 p-2">
        {filteredProducts?.length > 0 ? (
          filteredProducts.map((product: any) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-3 text-xl text-white">
            {selectedCategories.length > 0
              ? `No products found for categories: ${selectedCategories.join(
                  ", "
                )}`
              : "No products available"}
          </p>
        )}
      </div>
    </div>
  );
};

export default Product;
