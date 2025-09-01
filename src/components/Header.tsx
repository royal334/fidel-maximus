import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuX } from "react-icons/lu";


function Header() {

     const [isOpen, setIsOpen] = useState(false)

     function toggleMenu(){
          setIsOpen(!isOpen)
     }

     function handleSmoothScroll(e:any, targetId:string){
          e.preventDefault();
          const targetElement = document.getElementById(targetId)
          if(targetElement){
              targetElement.scrollIntoView({behavior: 'smooth'})
          }
      }

     const style={
          backgroundColor: "rgba(255, 255, 255, 0.7)", // Transparent white background
          backdropFilter: "blur(10px)", // Apply blur effect
          WebkitBackdropFilter: "blur(10px)", // For Safari support
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
        }
  return (
     <>
          <header id='header' style={style} className="sticky top-0 left-0 right-0 z-50 ">
               <div className="container mx-auto flex justify-between items-center p-4 ">
                    <div>
                         <img src='/favicon.png' alt="logo" className="w-[50px] h-[50px]" />
                    </div>
                    <nav className="hidden md:block">
                         <ul className="flex items-center gap-4 font-semibold">
                                   
                                   <li className="font-semibold" onClick={toggleMenu}><a onClick={(e) => {handleSmoothScroll(e,'hero')}} href="/" className=" hover:text-bright-blue">Home</a></li>
                                   <li className="font-semibold" onClick={toggleMenu}><a onClick={(e) => {handleSmoothScroll(e,'about')}} href="#about"  className=" hover:text-bright-blue">About</a></li>
                                   <li className="font-semibold" onClick={toggleMenu}><a onClick={(e) => {handleSmoothScroll(e,'services')}} href="#services" className=" hover:text-bright-blue">Services</a></li>
                                   <li className="font-semibold" onClick={toggleMenu}><a onClick={(e) => {handleSmoothScroll(e,'footer')}} href="#footer"  className=" hover:text-bright-blue">Contact</a></li>
                         </ul>
                    </nav>
                    <nav className="md:hidden flex items-center gap-2 ">
                    <RxHamburgerMenu onClick={toggleMenu}/>
                    </nav>
                    {
                         isOpen && (
                              <div className="absolute top-0 left-0 right-0 h-[50vh] pt-4 bg-white shadow-lg rounded-xl md:hidden" >
                              <div className="flex justify-end px-4 mt-6  w-[96%]">
                                   
                                   <LuX onClick={toggleMenu}/>
                              </div>
                              <ul className="flex flex-col items-center justify-center gap-4 p-4">
                                   <li className="font-semibold" onClick={toggleMenu}><a onClick={(e) => {handleSmoothScroll(e,'hero')}} href="/" className="text-bright-blue">Home</a></li>
                                   <li className="font-semibold" onClick={toggleMenu}><a onClick={(e) => {handleSmoothScroll(e,'about')}} href="#about"  className="text-bright-blue">About</a></li>
                                   <li className="font-semibold" onClick={toggleMenu}><a onClick={(e) => {handleSmoothScroll(e,'services')}} href="#services" className="text-bright-blue">Services</a></li>
                                   <li className="font-semibold" onClick={toggleMenu}><a onClick={(e) => {handleSmoothScroll(e,'footer')}} href="#footer"  className="text-bright-blue">Contact</a></li>
                              </ul>
                         </div>
                         )
                    }
               </div>
          </header>
     
     
     </>
  )
}

export default Header