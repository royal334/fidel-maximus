function About() {
  return (
    <section id='about'>
     <div className='py-20 container mx-auto px-4 md:px-0 '>
          <h2 className='text-center text-3xl font-semibold mb-6 '>About Us</h2>
          <div className='flex justify-between'>
               <div></div>
               <div>
                    <img src="/vision.PNG" alt="vision" className='max-h-[450px]' />
               </div>
          </div>
          <div className='flex justify-between mt-10'>
               <div>
               <img src="/mission.PNG" alt="mission" className='max-h-[450px]' />
               </div>
               
               <div></div>

          </div>
     </div>
    </section>
  )
}

export default About