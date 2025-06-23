
function Hero() {
  return (
     <section id="hero">
          <div className="flex flex-col items-center justify-center  text-white text-center px-4 md:px-0 md:h-[90vh] py-8 md:py-16 hero">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 mt-28 text-black">Welcome to Fidel Maximus</h1>
          <p className="text-lg md:text-3xl mb-8 text-black ">Your one-stop solution for all things Fidel.</p>
          <button className="bg-white text-blue-500 hover:text-blue:300 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300 inter cursor-pointer">
               Get Started
          </button>
          </div>
     </section>
  )
}

export default Hero