import { Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  const socialLinks = [
    { name: "Home", href: "/" },
    { name: "Facebook", href: "https://www.facebook.com/share/16U7W46ahB/?mibextid=wwXIfr" },
    { name: "Instagram", href: "https://www.instagram.com/fidel_maximus_ltd?igsh=MWJiMzM5cDVic2xmag%3D%3D&utm_source=qr" },
    { name: "TikTok", href: "https://www.tiktok.com/@fidelservices?_t=ZM-8x5UYDlYaZx&_r=1" },
  ];

    const offices = [
    "Opp. Marvelous Junction",
    "Opp. Ella Suite Tezzers Junction",
    "Vimason Lodge Adj Holy Family Next Junction"
  ];

  return (
    <footer id="footer" className="p-4 md:px-0 bg-light-blue ">
      <div className="container px-4 md:px-8 py-8 mx-auto text-white inter">
        {/* Main Footer Content */}
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          {/* Company Logo & Info */}
          <div className="lg:col-span-1">
              <img
              src="/fidel-maximus-logo.png"
              alt="logo"
              
            />
            <p className="text-footer-text-secondary mb-4">
              Leading provider of innovative business solutions and property management services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-footer-text-secondary hover:text-white transition-colors duration-200 hover:pl-2"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 " />
                <span className="">Phone Available</span>
              </div>
              <div className="flex items-start">
                <Mail size={24} className=" mr-3 mt-0.5 text-white" />
                <a 
                  href="mailto:Fidelservicesandrealestate@gmail.com"
                  className=" hover:text-white transition-colors duration-200"
                >
                  Fidelservicesandrealestate@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Office Locations */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Our Offices</h3>
            <div className="space-y-3">
              <div className="mb-4">
                <h4 className="font-medium text-white mb-2">Landry Offices</h4>
                <div className="space-y-2">
                  {offices.map((office, index) => (
                    <div key={index} className="flex items-start">
                      <MapPin className="w-4 h-4 mr-2 mt-0.5 text-footer-text-secondary flex-shrink-0" />
                      <span className="text-sm text-footer-text-secondary">
                        Office {index + 1}: {office}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-footer-blue-light/30 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-footer-text-secondary text-sm mb-4 md:mb-0">
            © 2024 Fidel Maximus. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
