import FooterDetails from "./FooterDetails";
//import { useEffect, useState } from "react"
import { CiPhone, CiMail } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";
function Footer() {
  // const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  // useEffect(() => {
  //      const darkMode = localStorage.getItem('darkMode');
  //      if (darkMode === 'true') {
  //           setIsDarkMode(true);
  //      } else {
  //           setIsDarkMode(false);
  //      }
  // }, []);
  return (
    <footer id="footer" className="p-4 md:px-0 bg-light-blue ">
      <div className="container px-4 md:px-8 py-8 mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-1/2 h-1/2">
            <img
              src="/fidel-maximus-logo.png"
              alt="logo"
              className="h-full w-full "
            />
          </div>
          <div className="grid grid-cols-2 text-white md:w-1/2 w-full justify-items-end md:justify-items-center gap-2 md:gap-0">
            <a
              href="/"
              className="justify-self-start md:justify-self-center font-semibold hover:text-bright-blue"
            >
              Home
            </a>
            <a
              href="https://www.linkedin.com/company/106349919/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BzqdsNmZ0QeG2CSEVnx5BGw%3D%3D"
              target="_blank"
              className="font-semibold hover:text-bright-blue"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/share/15MK5rNHMg/"
              target="_blank"
              className="justify-self-start md:justify-self-center font-semibold hover:text-bright-blue"
            >
              Facebook
            </a>
            <a
              href="https://x.com/eazifytech?t=2q9jIy-RSl8ncnFkihrYnw&s=09"
              target="_blank"
              className="font-semibold hover:text-bright-blue"
            >
              X
            </a>
            <a
              href="https://www.instagram.com/eazifyinnovations?igsh=cm52Ynd3bXdxN3Qy"
              target="_blank"
              className="justify-self-start md:justify-self-center font-semibold hover:text-bright-blue"
            >
              Instagram
            </a>
            <a
              href="https://vm.tiktok.com/ZMSecUcWp/"
              target="_blank"
              className="font-semibold hover:text-bright-blue"
            >
              Tiktok
            </a>
          </div>
        </div>

        <div className="my-10 border-t-2 border-b-2 py-6 border-gray-600 grid grid-cols-1 md:grid-cols-2 gap-8">
          <FooterDetails
            title="PHONE"
            details=""
            icon={<CiPhone size={22} strokeWidth={1.75} color="#00aeef" />}
          />
          <FooterDetails
            title="EMAIL"
            details="hello@eazifyinnovations.com"
            icon={<CiMail size={28} strokeWidth={1.75} color="#00aeef" />}
          />
          <FooterDetails
            title="ADDRESS"
            details="Awka South, Anambra State, Nigeria"
            icon={<LuMapPin size={28} strokeWidth={1.75} color="#00aeef" />}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
