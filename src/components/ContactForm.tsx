import { useForm } from "react-hook-form"


function ContactForm() {

  const { register } = useForm()

  return (
    <section id="form" className="">
      <div className="container mx-auto py-20 px-4 md:px-0">
        <h2 className="text-3xl text-center font-semibold">Contact Us</h2>
        <form action="" className="md:w-1/2 mx-auto" noValidate>
          <div className="flex flex-col my-2">
            <label htmlFor="name" className="inter">Name:</label>
            <input
            type="text"
            placeholder="John Doe"
            {...register('name', {required: 'Name is reqiured'})}
            className="w-full border-2 border-gray-300 inter px-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="name" className="inter">Email Address</label>
            <input
            type="email"
            placeholder="example@gmail.com"
            {...register('name', {required: 'Email is required',
              pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Email is not valid'
            }})}
            className="w-full border-2 border-gray-300 inter px-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="inter">Name:</label>
            <input
            type="text"
            placeholder="John Doe"
            {...register('name', {required: 'Name is reqiured'})}
            className="w-full border-2 border-gray-300 inter px-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="inter">Name:</label>
            <input
            type="text"
            placeholder="John Doe"
            {...register('name', {required: 'Name is reqiured'})}
            className="w-full border-2 border-gray-300 inter px-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="inter">Name:</label>
            <input
            type="text"
            placeholder="John Doe"
            {...register('name', {required: 'Name is reqiured'})}
            className="w-full border-2 border-gray-300 inter px-2 rounded-lg"
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactForm