import { useGetAllProductQuery } from "@/redux/api/productApi/ProductApi";
import React from "react";
import { Link } from "react-router-dom";

const ProductList: React.FC = () => {
  const { data: response, error, isLoading } = useGetAllProductQuery(undefined);
  const products = response?.data || [];
  console.log("object=>", products);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <Link to="/products/add" className="mb-4 inline-block text-blue-500">
        Add New Product
      </Link>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Stock</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: any) => (
            <tr key={product._id}>
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">{product.category}</td>
              <td className="py-2 px-4 border-b">${product.price}</td>
              <td className="py-2 px-4 border-b">{product.stock}</td>
              <td className="py-2 px-4 border-b">
                <Link to={`/product/${product._id}`} className="text-blue-500">
                  Edit
                </Link>
                <Link to={`/product/${product._id}`}>
                  <button
                    className="text-red-500 ml-4"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  function handleDelete(id: string) {
    // Implement delete logic
  }
};

export default ProductList;
