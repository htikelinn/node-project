import { useState } from "react"
import { mealData } from "../data/data"
    
export default function MealComponent() {
    const [foods, setFood] = useState (mealData);
    const findByCategory = (category: string) => {
        setFood(mealData.filter((item) => item.category === category));
      };
  return (
    <>
        <div className="max-w-[1520px] mx-auto px-4 py-12">
            <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
                Our Meal
            </h1>
            <div className="flex flex-col lg:lex-row justify-center">
                <div className="flex justify-center md:justify-center my-3">
                    <button className="m-1 border-orange-700 text-white
                    bg-orange-700 hover:bg-white hover:text-orange-700 py-1 px-2
                    rounded-2xl cursor-pointer" onClick={() => setFood(mealData)}>All</button>

                    <button className="m-1 border-orange-700 text-white
                    bg-orange-700 hover:bg-white hover:text-orange-700 py-1 px-2
                    rounded-2xl cursor-pointer" onClick={() => findByCategory("pizza")}>Pizza</button>
                    
                    <button className="m-1 border-orange-700 text-white
                    bg-orange-700 hover:bg-white hover:text-orange-700 py-1 px-2
                    rounded-2xl cursor-pointer" onClick={() => findByCategory("chicken")}>Chicken</button>

                    <button className="m-1 border-orange-700 text-white
                    bg-orange-700 hover:bg-white hover:text-orange-700 py-1 px-2
                    rounded-2xl cursor-pointer" onClick={() => findByCategory("salad")}>Salad</button>
                </div>
                <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6">
                    {
                        foods.map((item) => (
                            <div key={item.id} className="border-none hover:scale-105 duration-300">
                                <img src={item.image} alt={item.name} className="w-full h-[200px] object-cover rounded-lg" />
                                <div className="flex justify-between px-4 py-2">
                                    <p>
                                        <span className="bg-orange-700 h-18 -mt-10 px-2 text-white py-4 border-8 rounded-full">{item.price}</span>
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}