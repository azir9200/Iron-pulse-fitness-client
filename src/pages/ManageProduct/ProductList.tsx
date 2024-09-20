import {
  useDeleteProductMutation,
  useGetAllProductQuery,
} from "@/redux/api/productApi/ProductApi";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductList: React.FC = () => {
  const {
    data: response,
    error,
    isLoading,
    refetch,
  } = useGetAllProductQuery(undefined);
  const [deleteProduct] = useDeleteProductMutation();
  const products = response?.data || [];
  const [remain, setRemain] = useState(products);

  useEffect(() => {
    setRemain(products);
  }, [products]);

  // Delete product
  const handleDelete = async (_id: string) => {
    // Confirmation before deletion
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data: deletedProduct } = await deleteProduct(_id);
          if (deletedProduct) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Product has been deleted",
              showConfirmButton: false,
              timer: 1500,
            });

            // Update remaining products after deletion
            const remaining = remain.filter(
              (product: any) => product._id !== _id
            );
            setRemain(remaining);

            // Optionally refetch the list to ensure fresh data
            refetch();
          }
        } catch (err) {
          Swal.fire(
            "Error!",
            "There was a problem deleting the product.",
            "error"
          );
        }
      }
    });
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div className="mx-auto ">
      <h1 className="text-4xl text-white text-center font-bold py-4 bg-slate-700">
        Product List
      </h1>

      <table className="min-w-full text-white bg-slate-500 border border-gray-200">
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
          {remain.map((product: any) => (
            <tr key={product._id}>
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">{product.category}</td>
              <td className="py-2 px-4 border-b">${product.price}</td>
              <td className="py-2 px-4 border-b">{product.stock}</td>
              <td className="py-2 px-4 border-b">
                <Link
                  to={`/product/update/${product._id}`}
                  className="font-bold text-xl hover:text-black"
                >
                  Edit
                </Link>
                <button
                  className="text-red-500 font-extrabold text-xl ml-4 hover:text-black"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
