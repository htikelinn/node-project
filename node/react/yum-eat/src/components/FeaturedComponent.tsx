import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function FeaturedComponent() {
const sliders = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length -1 : currentIndex -1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () =>{
    const isLastSlide = currentIndex === sliders.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
  const moveToSlide = (slideIndex:number) => {
    setCurrentIndex(slideIndex);
  }
  return (
    <>
    <div className="max-w-[1920px] h-[500px] w-full py-4 relative">
      <div className="w-full h-full rounded-2xl bg-center bg-cover duration-300 ease-in-out" style={{
        backgroundImage:`url(${sliders[currentIndex].url})`
      }}>
        <div className="absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-4xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
          <BsChevronLeft onClick={prevSlide}/>
        </div>
        <div className="absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-4xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
          <BsChevronRight onClick={nextSlide}/>
        </div>
        <div className="absolute bottom-5 left-[50%] translate-x-[50%]">
          <div className="flex justify-center">
            {
              sliders.map((slide,index) => (
                <div key={index}
                  onClick={()=>moveToSlide(index)}
                  className="text-2xl cursor-pointer text-orange-800">
                    <RxDotFilled size={26} /> 
                  </div>
              ))
            }

          </div>

        </div>

      </div>

    </div>
    </>
  )

}
