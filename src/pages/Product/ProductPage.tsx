import ProductCard from "../Product/ProductCard";
import { useGetAllProductQuery } from "@/redux/api/productApi/ProductApi";

const Product = () => {
  const { data: products } = useGetAllProductQuery(undefined);
  console.log("azir ", products);
  return (
    <div className="container mx-auto mt-16 p-4">
      <h1 className="text-4xl text-center font-bold my-2">All Products</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {products?.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
