import { useGetAllProductQuery } from "@/redux/api/productApi/ProductApi";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: products, error, isLoading } = useGetAllProductQuery(undefined);

  console.log("Product ID from URL:", id);
  console.log("Fetched products:", products);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  // Check if product exists in the fetched products
  const product = products?.data?.find((product) => {
    console.log("Comparing product ID:", product.id, "with URL ID:", id);
    return product.id === id; // Convert IDs to string for comparison
  });

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      </div>
      {/* <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-auto mb-4"
      />
      <p className="text-lg mb-4">{product.description}</p>
      <p className="text-xl font-semibold mb-4">${product.price}</p> */}
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductDetails;
