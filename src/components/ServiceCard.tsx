import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";


type ServiceCardProps = {
     title: string
     description: string
     img: string
     alt: string
     instagramurl: string | undefined
     tiktokurl:string | undefined
     facebookurl: string | undefined
}

function ServiceCard(props:ServiceCardProps) {
  return (
     <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 dark:text-black ">{props.title}</h3>
          <p className="text-gray-700 mb-4 inter">{props.description}</p>
          <img src={props.img} alt={props.alt} className="rounded" />
          <div className="mt-4 flex gap-4">
               <div className="p-1 bg-gray-200 rounded">
                    <a href={props.instagramurl} target="_blank">
                         <FaInstagram className="w-[40px] h-[40px]" color="#00aeef"/>
                    </a>
               </div>
               <div className="p-1 bg-gray-200 rounded">
                    <a href={props.tiktokurl}>
                         <FaTiktok className="w-[40px] h-[40px]" color="#00aeef"/>
                    </a>
               </div>
               <div className="p-1 bg-gray-200 rounded">
                    <a href={props.facebookurl}>
                         <FaFacebook className="w-[40px] h-[40px]" color="#00aeef"/>
                    </a>
               </div>
               
          </div>
     </div>
  )
}

export default ServiceCard