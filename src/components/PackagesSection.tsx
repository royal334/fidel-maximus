import Packages from "./Packages"

function PackagesSection() {

     const packages =[
          { id:1, title: "Student Package", description: "", img: "student-package.png", alt: "student package"},
          { id:2, title: "The Billionare Wash", description: "", img: "billionaire-wash.JPG", alt: "Automobile service"},
          { id:3, title: "Bulk Laundry", description: "", img: "bulk-laundry.JPG", alt: "Bulk Laundry"},
          { id:4, title: "The Bachelor Guy Package", description: "", img: "bachelor.JPG", alt: "Bachelor Package"},
          { id:5, title: "Cheat Us for One Week", description: "", img: "cheat-us.jpg", alt: "Cheat us for one week"},
          { id:6, title: "Faster, Better, Cheaper", description: "", img: "laundry.jpg", alt: "Unleach the fury"}
          ]

  return (
     <section id='packages' className="">
       <div className='container mx-auto px-4 py-20 md:px-0'>
            <h2 className="text-3xl font-bold mb-4 text-center ">Laundry Packages</h2>
            <p className="text-gray-700 mb-6 text-center inter">
               Explore our range of packages designed to enhance your experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {
               packages.map((packagee)=> (
                    <Packages 
                         key={packagee.id}
                         title={packagee.title}
                         description={packagee.description}
                         img={packagee.img}
                         alt={packagee.alt}
                    />
               ))
          }
          </div>
       </div>
     </section>
  )
}

export default PackagesSection