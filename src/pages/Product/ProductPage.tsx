import { useLocation } from "react-router-dom";
import ProductCard from "../Product/ProductCard";
import { useGetAllProductQuery } from "@/redux/api/productApi/ProductApi";

const Product = () => {
  const { data: products } = useGetAllProductQuery(undefined);
  const location = useLocation();

  // Get category from URL query params
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? products?.data.filter(
        (product: any) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    : products?.data;

  return (
    <div className="container mx-auto mt-16 p-4">
      <h1 className="text-4xl text-center font-bold my-2">
        {selectedCategory ? `${selectedCategory} Products` : "All Products"}
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {filteredProducts?.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-3">
            {selectedCategory
              ? `No products found for ${selectedCategory}`
              : "No products available"}
          </p>
        )}
      </div>
    </div>
  );
};

export default Product;
