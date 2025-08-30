import { Link, useParams } from "react-router-dom";
import { useProductsByCategory } from "../apollo/ProductByCategoryName";
import { useContext, useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react" // 👈 import icon
import { CartContext } from "../App";

export default function ProductsByCategory() {
    const {cartItems, addToCart} = useContext(CartContext);
    const { name } = useParams();
    const { products, loading } = useProductsByCategory(name!);

    // Local state to control spinner visibility
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        if (!loading) {
            const timer = setTimeout(() => setShowLoading(false), 500);
            return () => clearTimeout(timer);
        } else {
            setShowLoading(true);
        }
    }, [loading]);

    return (
        <div className="w-[100vw] mt-50 min-h-screen bg-gray-50 p-6">
            {showLoading ? (
                <div className="flex justify-center items-center min-h-[60vh]">
                    <span className="loading loading-spinner loading-xl text-orange-600"></span>
                </div>
            ) : (
                <div className="grid grid-cols-12 gap-6">
                    {/* Sidebar */}
                    <div className="col-span-12 md:col-span-3 bg-white rounded-2xl shadow-lg p-6">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
                            Categories
                        </h2>
                        <div className="flex flex-col gap-3">
                            {[
                                { label: "Dairy", path: "dairy" },
                                { label: "Meats", path: "meats" },
                                { label: "Bakery", path: "bakery" },
                                { label: "Fruits & Vegetables", path: "fruit_veg" },
                            ].map((cat, i) => (
                                <Link
                                    key={i}
                                    to={`/products/${cat.path}`}
                                    className="btn w-full bg-orange-100 text-orange-800 border border-orange-200 
                 hover:bg-orange-500 hover:text-white transition rounded-xl"
                                >
                                    {cat.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Products */}
                    <div className="col-span-12 md:col-span-9">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">
                                {name?.replace("_", " ")} Products
                            </h2>

                            {/* Cart Icon */}
                            <div className="relative">
                                <button className="btn btn-circle bg-orange-500 hover:bg-orange-600 text-white">
                                    <ShoppingCart size={22} />
                                </button>
                                {/* Badge showing cart count */}
                                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                                    {cartItems.length}
                                </span>
                            </div>
                        </div>

                        {products.length === 0 ? (
                            <p className="text-gray-500 italic">No products found.</p>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {products.map((product) => (
                                    <div
                                        key={product.id}
                                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col items-center text-center"
                                    >
                                        <img
                                            src={`/images/products/${product.name}.png`}
                                            alt={product.name}
                                            className="w-32 h-32 object-contain mb-4"
                                        />
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {product.name}
                                        </h3>
                                        <p className="text-orange-600 font-bold mt-2">
                                            ${product.price}
                                        </p>
                                        
                                        <button className="mt-4 btn bg-orange-500 text-white hover:bg-orange-600 rounded-xl w-full" onClick={() => addToCart(product)}>
                                            Buy Now
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
