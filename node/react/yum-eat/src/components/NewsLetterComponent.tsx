export default function NewsLetterComponent() {
  return (
    <div className="max-w-[1920px] m-auto text-white px-4 bg-[#24262b]">
      <div className="mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1>Need Advice on hot to improve your flow?</h1>
          <p>Sig up to our newsletter and stay up to date</p>
          <div className="flex flex-col sm:flex-row items-center justify-between w-full my-2">
            <input type="text" placeholder="Enter email address" 
            className="p-3 flex w-[50%] rounded-md text-white border-1"/>

          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-gray-500 cursor-pointer">Norfify Me</button>
        </div>
        <div className="lg:col-span-1 my-4">
          <p>We are concrends about the protection of your data.</p>
          <span className="text-[#00df9a]">Privacy Policy</span>
      </div>
      </div>
      <hr className="my-8 bg-gray-700 border-0" />
    </div>
  )
}