import { useState, useEffect } from "react"
import { Toggle } from "./ui/toggle"
import { LuSun,LuMoon } from "react-icons/lu";


function DarkModeToggle() {

     const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

     useEffect(()=>{
          if(isDarkMode){
               document.documentElement.classList.add('dark')
          }
          else{
               document.documentElement.classList.remove('dark')
          }
     }, [isDarkMode])

  return (
    <Toggle onClick={() => {setIsDarkMode(!isDarkMode)}}>
          {isDarkMode ? <LuSun/>: <LuMoon/>}
    </Toggle>
  )
}

export default DarkModeToggle