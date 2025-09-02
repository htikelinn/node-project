import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div className="w-[100vw] p-5 mt-30">
        <div className="grid grid-cols-10 gap-4">
          <div className="col-span-4 p-4">
            <h3 className="p-3 text-3xl font-bold">
              Welcome to the online home of the Affable Bean Green Grocer.
            </h3>

            <p className="font-light p-3" style={{ textAlign: "justify" }}>
              browsing and learning more about our unique home delivery service
              bringing you fresh organic produce,dairy,meats,breads and other
              delicious and healthy items to you doorstep Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Aut fugiat velit iste fugit
              pariatur sint repudiandae officiis ullam architecto amet! Iure
              iste maxime omnis doloribus amet! Explicabo modi est totam. .
            </p>
          </div>
          <div className="col-span-6 p-4">
            <div className="flex flex-wrap w-full">
              {/* Bakery */}
              <div className="w-1/2 p-2">
                <div className="relative">
                  <Link to="/products/bakery"><img
                    src="/images/categories/bakery.jpg"
                    alt="Bakery"
                    className="p-2 shadow-2xl rounded-2xl mb-3 me-3 hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <h3 className="text-white text-xl font-bold drop-shadow-lg">
                      Bakery
                    </h3>
                  </div>
                  </Link>
                </div>
              </div>

              {/* Dairy */}
              <div className="w-1/2 p-2">
                <div className="relative">
                 <Link to="/products/dairy"> <img
                    src="/images/categories/dairy.jpg"
                    alt="Dairy"
                    className="p-2 shadow-2xl rounded-2xl mb-3 mr-2 hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <h3 className="text-white text-xl font-bold drop-shadow-lg">
                      Dairy
                    </h3>
                  </div>
                  </Link>
                </div>
              </div>

              {/* Meats */}
              <div className="w-1/2 p-2">
                <div className="relative">
                  <Link to="/products/meats"><img
                    src="/images/categories/meats.jpg"
                    alt="Meats"
                    className="p-2 shadow-2xl rounded-2xl mb-3 mr-3 hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <h3 className="text-white text-xl font-bold drop-shadow-lg">
                      Meats
                    </h3>
                  </div>
                  </Link>
                </div>
              </div>

              {/* Fruits & Vegetables */}
              <div className="w-1/2 p-2">
                <div className="relative">
                 <Link to="/products/fruit_veg"> <img
                    src="/images/categories/fruitveg.jpg"
                    alt="Fruits & Vegetables"
                    className="p-2 shadow-2xl rounded-2xl mb-3 mr-2 hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <h3 className="text-white text-xl font-bold drop-shadow-lg">
                      Fruits & Veg
                    </h3>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
