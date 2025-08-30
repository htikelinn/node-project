import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <>
            <div className="w-full p-6 lg:p-12 bg-gray-50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-green-800 leading-tight">
                            Welcome to the online home of the Affable Bean Green Grocer
                        </h1>
                        <p className="font-light text-lg text-gray-700 leading-relaxed">
                            Explore our unique home delivery service, bringing you the freshest
                            organic produce, artisan dairy, ethically sourced meats, freshly baked
                            breads, and other delicious, healthy items right to your doorstep. Our
                            commitment is to quality, sustainability, and making healthy eating easy
                            and accessible for everyone.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                        <Link to="/products/dairy">
                            <div className="relative flex flex-col items-center group">
                                <img
                                    src="/images/categories/dairy.jpg"
                                    alt="Assortment of fresh dairy products"
                                    className="w-full h-auto object-cover rounded-2xl shadow-lg transition-transform transform group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center rounded-2xl transition-opacity opacity-0 group-hover:opacity-100">
                                    <h3 className="text-xl font-bold text-white">Dairy</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to="/products/bakery">
                            <div className="relative flex flex-col items-center group">
                                <img
                                    src="/images/categories/bakery.jpg"
                                    alt="Freshly baked breads and pastries"
                                    className="w-full h-auto object-cover rounded-2xl shadow-lg transition-transform transform group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center rounded-2xl transition-opacity opacity-0 group-hover:opacity-100">
                                    <h3 className="text-xl font-bold text-white">Bakery</h3>
                                </div>
                            </div>
                        </Link>

                        <Link to="/products/meats">
                            <div className="relative flex flex-col items-center group">
                                <img
                                    src="/images/categories/meats.jpg"
                                    alt="Selection of high-quality meats"
                                    className="w-full h-auto object-cover rounded-2xl shadow-lg transition-transform transform group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center rounded-2xl transition-opacity opacity-0 group-hover:opacity-100">
                                    <h3 className="text-xl font-bold text-white">Meats</h3>
                                </div>
                            </div>
                        </Link>
                        <Link to="/products/fruit_veg">
                            <div className="relative flex flex-col items-center group">
                                <img
                                    src="/images/categories/fruitveg.jpg"
                                    alt="A vibrant mix of fresh vegetables"
                                    className="w-full h-auto object-cover rounded-2xl shadow-lg transition-transform transform group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center rounded-2xl transition-opacity opacity-0 group-hover:opacity-100">
                                    <h3 className="text-xl font-bold text-white">Vegetables</h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
