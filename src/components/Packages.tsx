

type PackagesProps = {
     title: string
     description: string
     img: string
     alt: string
}
function Packages(props:PackagesProps) {
  return (
    <div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
               <h3 className="text-2xl font-semibold mb-4">{props.title}</h3>
               <p className="text-gray-700 mb-4 inter">{props.description}</p>
          <img src={props.img} alt={props.alt} className="rounded h-[450px] w-full" />
     </div>
    </div>
  )
}

export default Packages