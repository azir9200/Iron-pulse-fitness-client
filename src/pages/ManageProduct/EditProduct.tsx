import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetProductDetailsQuery,
  useUpdateProductMutation,
} from "@/redux/api/productApi/ProductApi";
import Swal from "sweetalert2";

const EditProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get product ID from the URL
  const {
    data: productDetails,
    isLoading,
    error,
  } = useGetProductDetailsQuery(id as string); // Fetch product details
  const [updateProduct] = useUpdateProductMutation();
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    name: "",
    category: "",
    price: 0,
    stock: 0,
  });

  useEffect(() => {
    if (productDetails) {
      setFormState({
        name: productDetails.name,
        category: productDetails.category,
        price: productDetails.price,
        stock: productDetails.stock,
      });
    }
  }, [productDetails]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateProduct({ id, ...formState }); // Update the product

      Swal.fire({
        title: "Product Updated!",
        text: "The product was updated successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
      navigate("/product");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading product details</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={formState.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={formState.price}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Stock
          </label>
          <input
            type="number"
            name="stock"
            value={formState.stock}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
