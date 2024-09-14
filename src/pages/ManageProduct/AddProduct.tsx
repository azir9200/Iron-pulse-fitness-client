import { useAddProductMutation } from "@/redux/api/productApi/ProductApi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    category: "",
    stock: 0,
    image: "",
  });

  const [addProduct, { isLoading, isSuccess, isError, error }] =
    useAddProductMutation();
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // Convert price and stock to number, leave other fields as is
    setFormData({
      ...formData,
      [name]: name === "price" || name === "stock" ? +value : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addProduct(formData).unwrap();
      navigate("/manage/product"); // Redirect to product list after success
    } catch (err) {
      console.error("Failed to add product", err);
    }
  };

  return (
    <div className="container mx-auto p-16 mt-6">
      <div className="container mx-auto p-8 mt-10 bg-slate-400 ">
        <h1 className="text-2xl font-bold text-center mb-4">Add New Product</h1>

        {isSuccess && (
          <p className="text-green-500">Product added successfully!</p>
        )}
        {isError && (
          <p className="text-red-500">
            {(error as any).data?.message || "Failed to add product"}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="border p-2 w-full bg-slate-200 "
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Product Description"
            className="border p-2 w-full bg-slate-200"
            required
          />
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="border p-2 w-full bg-slate-200"
            required
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="border p-2 w-full bg-slate-200"
            required
          />
          <input
            type="text"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Stock"
            className="border p-2 w-full bg-slate-200"
            required
          />
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="border p-2 w-full bg-slate-200"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2"
            disabled={isLoading}
          >
            {isLoading ? "Adding Product..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
