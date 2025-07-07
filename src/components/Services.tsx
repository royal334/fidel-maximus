import ServiceCard from "./ServiceCard"

function Services() {

     const services =[
     { id:1, title: "Fidel Mobile Cleaning and Laundry", description: "Laundry at your doorsteep", img: "laundry1.JPG", alt: "laundry service", instagramurl:'https://www.instagram.com/fidellaundryandcleaningservice/profilecard/?igsh=YWVlM24xdTU3cnh1', tiktokurl:'https://www.tiktok.com/@fidellaundryandcleanings?_t=ZM-8x5S3lj97dF&_r=1', facebookurl:'https://www.facebook.com/share/19XYNYcUbs/?mibextid=wwXIfr'},
     { id:2, title: "Fidel Automobile", description: "Fueling your automobile dreams", img: "automobile.jpg", alt: "Automobile service", instagramurl: "https://www.instagram.com/fidel_car_gallery?igsh=MTB5MTlxcnA2eXF2cA%3D%3D&utm_source=qr", tiktokurl: 'https://www.tiktok.com/@fidelautomobile?_t=ZM-8x5Tu2M0FTa&_r=1',  facebookurl:'https://www.facebook.com/share/16NmmzxDjt/?mibextid=wwXIfr'},
     { id:3, title: "Fidel Assets and Properties", description: "Laundry at your doorsteep", img: "assets-and-props.png", alt: "Service One", instagramurl: "https://www.instagram.com/fidel_asset_and_properties?igsh=MWlxZXNvejNxaDZnNw%3D%3D&utm_source=qr", tiktokurl:'https://www.tiktok.com/@fidelassetandproperties?_t=ZM-8x5Pk6Vv7xu&_r=1',  facebookurl:'https://www.facebook.com/share/1AmtCFYHzZ/?mibextid=wwXIfr'}
     ]


  return (
     <section id="services" className=" bg-gray-100">
       <div className="container mx-auto px-4 py-20 md:px-0">
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-black">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {
               services.map((service)=> (
                    <ServiceCard 
                         key={service.id}
                         title={service.title}
                         description={service.description}
                         img={service.img}
                         alt={service.alt}
                         instagramurl={service.instagramurl}
                         tiktokurl={service.tiktokurl}
                         facebookurl={service.facebookurl}
                    />
               ))
          }
          </div>
       </div>
     </section>
  )
}

export default Services