export default function DeliveryComponent() {
    return (
        <>
            <div className="w-[1920px] bg-white py-10 px-4">
                <h3 className="text-orange-500 font-bold text-2xl text-center">
                    Quick Delivery App
                </h3>
                <div className="w-full mx-auto grid md:grid-cols-2">
                    <img
                        src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
                        alt="Image"
                        className="w-[550px] mx-auto my-4"
                    />
                    <div className="flex flex-col justify-center">
                        <p className="text-[#00df9a] font-bold"></p>
                        Get The App
                        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                            Limitless Convenience on-demand
                        </h1>
                        <p style={{textAlign:'justify'}}>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem harum amet velit quam! Ipsum nihil ad, inventore quia voluptas atque laudantium ducimus vel quibusdam. Aperiam eius pariatur saepe laboriosam quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt libero animi modi eveniet officiis accusamus blanditiis aut velit error, minus itaque voluptate dolorum natus iusto a. Ipsam velit similique odio?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, id. Est sint in at soluta voluptate saepe earum ducimus! Molestiae nesciunt laboriosam eius eveniet dolores iste laudantium eum vel ipsa!
                        </p>
                        <button className="bg-black text-[#00df9a] rounded-md w-[200px] font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-gray-500 cursor-pointer transition ease-in duration-300 animate-bounce">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
}
