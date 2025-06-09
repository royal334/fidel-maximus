import ServiceCard from "./ServiceCard"

function Services() {

     const services =[
     { id:1, title: "Fidel Mobile Cleaning and Laundry", description: "Laundry at your doorsteep", img: "laundry.jpg", alt: "laundry service"},
     { id:2, title: "Fidel Automobile", description: "Fueling your automobile dreams", img: "automobile.jpg", alt: "Automobile service"},
     { id:3, title: "Fidel Mobile Laundry", description: "Laundry at your doorsteep", img: "laundry.jpg", alt: "Service One"}
     ]


  return (
     <section id="services" className=" bg-gray-100">
       <div className="container mx-auto px-4 py-20 md:px-0">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {
               services.map((service)=> (
                    <ServiceCard 
                         key={service.id}
                         title={service.title}
                         description={service.description}
                         img={service.img}
                         alt={service.alt}
                    />
               ))
          }
          </div>
       </div>
     </section>
  )
}

export default Services