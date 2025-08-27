import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import  {topPicks} from '../data/data.jsx';


export default function TopPicksComponent() {
  return (
    <>
     <div className="max-w-[1520px] mx-auto px-4 py-4">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Top Picks
      </h1>
      <div className="py-2">
        <Splide
        options={{
          perPage:4,
          gap:'0.5rem',
          arrows:false,
          pagination:false,
          breakpoints:{
            640:{
              perPage:1
            },
            768:{
              perPage:2
            },
            1024:{
              perPage:3
            }
          }
        }} aria-label="Top Picks">
            {
              topPicks.map(item =>(
                <SplideSlide key={item.id}>
                  <div className='rounded-3xl relative overflow-hidden'>
                    <div className='absolute w-full h-full bg-black/50 rounded-3xl
                    text-white flex flex-col justify-between p-4'>
                      <div>
                        <p className='font-bold text-xl'>{item.title}</p>
                        <p className='font-bold tex-xl'>{item.price}</p>
                      </div>
                      <button className='border-dotted border-white text-white py-1
                      px-2 absolute bottom-4 left-4 rounded-full
                      hover:bg-white hover:text-black transition duration-300
                      ease-in-out'>Add To Cart</button>
                    </div>
                    <img src={item.img} alt={item.title} 
                    className='h-[200px] w-full object-cover rounded-3xl
                    cursor-pointer hover:scale-105  transition duration-300 ease-out'/>
                  </div>
                </SplideSlide>
              ))
            }
        </Splide>
      </div>
     </div>
    </>
  )
}