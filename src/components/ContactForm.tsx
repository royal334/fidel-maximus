import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import {   Select,
          SelectContent,
          SelectItem,
          SelectTrigger,
  SelectValue, } from "./ui/select"

type FormDataTypes = {
  name:string
  email: string
  service:string
  laundryservice: string
  assetsandproperties:string
  cleaningservice: string
  carbrand: string
  message:string
  month: string
  day:''
}


function ContactForm() {
  
  const [error, setError] = useState('')
  const { register, setValue, watch, formState, reset,handleSubmit } = useForm<FormDataTypes>(
    {
      mode: "onBlur",
      defaultValues:{
        name:'',
        email:'',
        service:'',
        laundryservice: '',
        assetsandproperties: '',
        cleaningservice: '',
        carbrand: '',
        message:'', 
        month:'',
        day:'',
      }
    }
  )

  const { errors, isSubmitSuccessful, isValid } = formState

      async function onSubmit(data: FormDataTypes){

          const formData = new FormData();
          
          formData.append("access_key", '41aa55d7-3eb6-486a-8a1d-a1334526cafd');
          formData.append("name", data.name);
          formData.append("service", data.service);
          formData.append("laundry", data.laundryservice);
          formData.append("email", data.email);
          formData.append("Assets and Properties", data.assetsandproperties);
          formData.append("Cleaning Service", data.cleaningservice);
          formData.append("Message", data.message)
          formData.append("Month of birth", data.month)
          formData.append("Day of birth", data.day)

      try{
          const res = await fetch("https://api.web3forms.com/submit", {
               method: "POST",
               body: formData,
          }).then((res) => res.json());

          if (res.success) {
               console.log('Success', res)
        }
      } catch{
          setError('Failed to submit form ')
      }
      }




       useEffect(() => {
          if(isSubmitSuccessful){
               setTimeout(reset, 500)
          }
     }, [isSubmitSuccessful,reset])

  return (
    <section id="form" className="">
      <div className="container mx-auto py-10 md:py-20 px-4 md:px-0">
        <h2 className="text-3xl text-center font-semibold">Order A Service</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="md:w-3/4 mx-auto" noValidate>
          <div className="flex flex-col mt-2">
            <label htmlFor="name" className="inter">Name</label>
            <input
            type="text"
            placeholder="John Doe"
            {...register('name', {required: 'Name is reqiured'})}
            className="w-full border-2 border-gray-300 inter p-2 rounded-lg"
            />
          </div>
          {errors.name && <span className="text-red-500 font-semibold inter">{errors.name?.message}</span>}
          <div className="flex flex-col mt-2">
            <label htmlFor="name" className="inter">Email Address</label>
            <input
            type="email"
            placeholder="example@gmail.com"
            {...register('email', {required: 'Email is required',
              pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Email is not valid'
            }})}
            className="w-full border-2 border-gray-300 inter p-2 rounded-lg"
            />
          </div>
          {errors.email && <span className="text-red-500 inter font-semibold">{errors.email?.message}</span>}

            <div className="flex flex-col mt-2">
              <label className="inter">Month and Day</label>
              <div className="flex gap-2">
                <select
                  {...register('month', { required: 'Month is required' })}
                  className="border-2 border-gray-300 inter p-2 rounded-lg w-1/2"
                >
                  <option value="">Month</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                      {new Date(0, i).toLocaleString('default', { month: 'long' })}
                    </option>
                  ))}
                </select>
                <select
                  {...register('day', { required: 'Day is required' })}
                  className="border-2 border-gray-300 inter p-2 rounded-lg w-1/2"
                >
                  <option value="">Day</option>
                  {Array.from({ length: 31 }, (_, i) => (
                    <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              {errors.month && <span className="text-red-500 font-semibold inter">{errors.month.message}</span>}
              {errors.day && <span className="text-red-500 font-semibold inter">{errors.day.message}</span>}
            </div>
            <div className="mt-2">
              <label htmlFor="name" className="inter mt-2">Service</label>
                <Select
                  value={watch('service')}
                  onValueChange={val => setValue('service', val)}
                  required
                >
                <SelectTrigger className="w-full border-2 border-gray-300 font-semibold inter">
                           <SelectValue placeholder="Select a service"  />
                      </SelectTrigger>
                      <SelectContent className="font-semibold inter">
                           <SelectItem value="laundry">Laundry</SelectItem>
                           <SelectItem value="cleaning">Cleaning</SelectItem>
                           <SelectItem value="automobile">Automobile</SelectItem>
                           <SelectItem value="assets and properties">Assets and properties</SelectItem>
                      </SelectContent>
                 </Select>
            </div>

          {  watch('service') === 'cleaning' &&             
          <div className="mt-2">
            <label htmlFor="name" className="inter">Cleaning Service</label>
                <Select
                  value={watch('cleaningservice')}
                  onValueChange={val => setValue('cleaningservice', val)}
                >
                <SelectTrigger className="w-full border-2 border-gray-300 font-semibold inter">
                           <SelectValue placeholder="Select a cleaning service"  />
                      </SelectTrigger>
                      <SelectContent className="font-semibold inter">
                           <SelectItem value="Residenial Cleaning" >Residenial Cleaning</SelectItem>
                           <SelectItem value="Industrial CLeaning">Industrial Cleaning</SelectItem>
                           <SelectItem value="Commercial Cleaning">Commercial Cleaning</SelectItem>
                           <SelectItem value="Construction Cleaning">Construction Cleaning</SelectItem>
                      </SelectContent>
                 </Select>
          </div>
              }

          {  watch('service') === 'laundry' &&             
          <div className="mt-2">
            <label htmlFor="name" className="inter">Laundry Service</label>
                <Select
                  value={watch('laundryservice')}
                  onValueChange={val => setValue('laundryservice', val)}
                >
                <SelectTrigger className="w-full border-2 border-gray-300 font-semibold inter">
                           <SelectValue placeholder="Select a laundry service"  />
                      </SelectTrigger>
                      <SelectContent className="font-semibold inter">
                           <SelectItem value="student package" >Student Package</SelectItem>
                           <SelectItem value="the Billionare wash">The Billionare Wash</SelectItem>
                           <SelectItem value="bulk laundry">Bulk Laundry</SelectItem>
                           <SelectItem value="the bachelor guy">The Bachelor Guy Package</SelectItem>
                           <SelectItem value="cheat us for one week">Cheat Us for One Week</SelectItem>
                      </SelectContent>
                 </Select>
          </div>
              }

          {  watch('service') === 'automobile' &&             
          <div className="mt-2">
            <label htmlFor="name" className="inter">Car Brand</label>
                <Select
                  value={watch('carbrand')}
                  onValueChange={val => setValue('carbrand', val)}
                >
                <SelectTrigger className="w-full border-2 border-gray-300 font-semibold inter">
                           <SelectValue placeholder="Select a car brand"  />
                      </SelectTrigger>
                      <SelectContent className="font-semibold inter">
                           <SelectItem value="Toyata" >Toyata</SelectItem>
                           <SelectItem value="Lexus">Lexus</SelectItem>
                           <SelectItem value="Mercedes Benz">Mercedes Benz</SelectItem>
                           <SelectItem value="Honda">Honda</SelectItem>
                           <SelectItem value="others">Others (Specify below)</SelectItem>
                      </SelectContent>
                 </Select>
          </div>
              }

          {  watch('service') === 'assets and properties' &&             
          <div className="mt-2">
            <label htmlFor="name" className="inter">In what location</label>
                <Select
                  value={watch('assetsandproperties')}
                  onValueChange={val => setValue('assetsandproperties', val)}
                >
                <SelectTrigger className="w-full border-2 border-gray-300 font-semibold inter">
                           <SelectValue placeholder="Select a location"  />
                      </SelectTrigger>
                      <SelectContent className="font-semibold inter">
                           <SelectItem value="enugu">Enugu</SelectItem>
                           <SelectItem value="imo">Imo</SelectItem>
                           <SelectItem value="Port harcourt">Port Harcourt</SelectItem>
                           <SelectItem value="anambra">Anambra</SelectItem>
                           <SelectItem value="abia">Abia</SelectItem>
                           <SelectItem value="other-places">Other (Specify below)</SelectItem>
                      </SelectContent>
                 </Select>
          </div>
              }
          <div className="flex flex-col my-2">
            <label htmlFor="name" className="inter">Send a Custom Message</label>
              <textarea name="message" id="" className="w-full border-2 border-gray-300 inter p-4">

              </textarea>
          </div>
          {error && <span  className="text-red-500 font-semibold inter">{error}</span>}

          <div className="flex justify-end items-center"><button type="submit" disabled={!isValid} className="rounded bg-bright-blue px-5 py-2 text-white inter font-semibold cursor-pointer mt-4 mx-auto md:mx-0">Submit</button></div>
        </form>
      </div>
    </section>
  )
}

export default ContactForm