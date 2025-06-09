

function Header() {

     const style={
          backgroundColor: "rgba(255, 255, 255, 0.7)", // Transparent white background
          backdropFilter: "blur(10px)", // Apply blur effect
          WebkitBackdropFilter: "blur(10px)", // For Safari support
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
        }
  return (
     <>
          <header id='header' style={style}>
               <div className="container mx-auto flex justify-between items-center p-4 ">
                    <div>
                         <img src="favicon.JPG" alt="" className="w-[40px] h-[40px]" />
                    </div>
                    <nav>
                         <ul className="flex gap-4 font-semibold">
                              <li><a href="#home" className="hover:text-bright-blue">Home</a></li>
                              <li><a href="#about" className="hover:text-bright-blue">About</a></li>
                              <li><a href="#services" className="hover:text-bright-blue">Services</a></li>
                              <li><a href="#contact" className="hover:text-bright-blue">Contact</a></li>
                         </ul>
                    </nav>
               </div>
          </header>
     
     
     </>
  )
}

export default Header