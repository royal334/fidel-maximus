
function Hero() {
  return (
     <section>
          <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-l from-bright-blue to-light-blue text-white text-center p-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to Fidel Maximus</h1>
          <p className="text-xl mb-8">Your one-stop solution for all things Fidel.</p>
          <button className="bg-white text-blue-500 hover:text-blue:300 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300 inter cursor-pointer">
               Get Started
          </button>
          </div>
     </section>
  )
}

export default Hero