import React, { useContext } from "react";
import { CartContext } from "../App";
import { Link } from "react-router-dom";
import { FaTrash, FaArrowLeft, FaTimesCircle, FaCheckCircle } from "react-icons/fa";

const CartView: React.FC = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * (item.quantity??0), 0);

  if (cartItems.length === 0)
    return (
      <div className="flex justify-center py-20">
        <div className="card shadow-lg p-10 text-center">
          <i className="fas fa-shopping-cart fa-4x text-gray-400 mb-4"></i>
          <h3 className="text-2xl font-semibold mb-2">Your Cart is Empty</h3>
          <p className="text-gray-500 mb-4">Looks like you haven't added any items yet.</p>
          <Link to="/products/dairy" className="btn btn-primary btn-lg flex items-center justify-center gap-2">
            <FaArrowLeft /> Browse Products
          </Link>
        </div>
      </div>
    );

  return (
    <div className="container mx-auto mt-50 p-10">
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="table-auto w-full text-center">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3">Price</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Total</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems && cartItems.length > 0 && cartItems.map((item) =>  (
              <tr key={item.name} className="border-b">
                <td className="p-2">
                  <img src={`/images/products/${item.name}.png`} alt={item.name} className="w-16 h-16 object-contain mx-auto" />
                </td>
                <td>{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <div className="flex justify-center items-center gap-2">
                    <button className="btn btn-sm btn-success" onClick={() => increaseQuantity(item.quantity)}>
                      +
                    </button>
                    <span>{item.quantity}</span>
                    <button className="btn btn-sm btn-danger" onClick={() => decreaseQuantity(item.quantity)}>
                      -
                    </button>
                  </div>
                </td>
                <td className="font-bold">${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => removeFromCart(item.name)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-6 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</h2>
        <div className="flex gap-3">
          <Link to="/products/dairy" className="btn btn-outline-primary flex items-center gap-2">
            <FaArrowLeft /> Continue Shopping
          </Link>
          <button onClick={clearCart} className="btn btn-outline-danger flex items-center gap-2">
            <FaTimesCircle /> Clear Cart
          </button>
          <Link to="/products/checkout" className="btn btn-success flex items-center gap-2">
            <FaCheckCircle /> Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartView;
