import { Link, useParams } from "react-router-dom";
import { useProductsByCategory } from "../apollo/ProductByCategoryName";
import { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../App";

export default function ProductsByCategory() {
  const { cartItems,addToCart } = useContext(CartContext);
  const { name } = useParams();
  const { products, loading } = useProductsByCategory(name!);

  // Local state to control spinner visibility
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      // Delay hiding spinner for at least 500ms
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 500);

      return () => clearTimeout(timer); // cleanup
    } else {
      // When loading starts again (e.g., param change)
      setShowLoading(true);
    }
  }, [loading]);



  return (
    <div className="w-[100vw] mt-50">
      <div className="flex justify-end">
        <Link to="/view-cart"><div className="flex mr-35 mb-3 items-center">
          <AiOutlineShoppingCart size={30} />
          <span className="text-2xl p-3">{cartItems.length}</span>
        </div>
        </Link>
      </div>
      {showLoading ? (
        <div className="flex justify-center items-center">
          <span className="loading loading-spinner loading-xl text-orange-900"></span>
        </div>
      ) : (
        <div className="grid grid-cols-12">
          <div className="col-span-4 ">
            <div className="flex flex-col justify-center items-center pt-10">
              <Link
                to="/products/dairy"
                className="btn btn-warning mb-3 w-50 text-white
                      hover:bg-white hover:text-black 
                       rounded-2xl transition duration-500"
              >
                Dairy
              </Link>
              <Link
                to="/products/meats"
                className="btn btn-warning mb-3 w-50 text-white
                      hover:bg-white hover:text-black  rounded-2xl transition duration-500"
              >
                Meats
              </Link>
              <Link
                to="/products/bakery"
                className="btn btn-warning mb-3 w-50 text-white
                      hover:bg-white hover:text-black  rounded-2xl transition duration-500"
              >
                Bakery
              </Link>
              <Link
                to="/products/fruit_veg"
                className="btn btn-warning mb-3 w-50 text-white
                      hover:bg-white hover:text-black  rounded-2xl transition duration-500"
              >
                Fruits & Vegetables
              </Link>
            </div>
          </div>
          <div className="col-span-8">
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <img
                          src={`/images/products/${product.name}.png`}
                          alt="image"
                        />
                      </td>
                      <td>{product.name}</td>
                      <td>${product.price}</td>
                      <td>
                        <button
                         onClick={() => addToCart(product)}
                          className="btn btn-warning text-white
                                        hover:bg-white hover:text-black"
                        >
                          Buy Now
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
