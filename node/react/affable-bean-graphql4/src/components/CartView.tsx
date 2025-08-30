import { useContext } from "react";
import { CartContext } from "../App";
import { Link } from "react-router";
import { FaArrowLeft, FaCheckCircle, FaHome, FaTimesCircle, FaTrash } from "react-icons/fa";

export default function CartView() {
    const { clearCart, totalQuantity, removeFromCart } = useContext(CartContext);
    const { cartItems, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    return (
        <div className="w-[100vw] mx-auto mt-30 p-20">
            <p className="text-2xl font-semibold mb-2">your shopping cart contains {totalQuantity} items</p>
            <div className="flex justify-around align-item-center">
                <button className="btn btn-primary" onClick={clearCart}><FaTimesCircle /> Clear Cart</button>
                <Link to="/">
                    <button className="btn btn-primary">
                        <FaHome /> Continue Shopping</button>
                </Link>
                <Link to="/view-cart">
                    <button className="btn btn-primary"> <FaCheckCircle /> Proceed to Checkout</button>
                </Link>

          <Link to="/products/dairy" className="btn btn-primary btn-lg flex items-center justify-center gap-2">
            <FaArrowLeft /> Browse Products
          </Link>
            </div>

            <div className="overflow-x-auto">
                {
                    cartItems && cartItems.length > 0 &&
                <table className="table mt-20">

                    <thead>
                        <tr>
                            <th className="p-3">Product</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Price</th>
                            <th className="p-3">Quantity</th>
              <th className="p-3">Total</th>
              <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <img
                                            src={`/images/products/${item.name}.png`}
                                            alt="Image"
                                        />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        <button
                                            onClick={() => increaseQuantity(item)}
                                            className="btn btn-success"
                                        >
                                            +
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            onClick={() => decreaseQuantity(item)}
                                            className="btn btn-error"
                                        >
                                            -
                                        </button>
                                    </td>
                <td className="font-bold">${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => removeFromCart(item)}>
                   <FaTrash /> Remove</button>
                </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                }
                {
                    cartItems.length === 0 && <div className="text-2xl text-center mt-30">Your cart is empty</div>
                }
            </div>
        </div>
    );
}
