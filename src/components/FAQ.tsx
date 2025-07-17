import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

function FAQ() {
  return (
    <section id="faq">
          <div className='container mx-auto px-4 md:px-0 py-8 md:py-16'>
               <h3 className='font-bold text-2xl md:text-4xl text-center text-charcoal-black'>Frequently Asked Questions</h3>
               <div className='mt-8'>
                    <div className='mb-6 flex flex-col gap-4'>
                         <Accordion type="single" collapsible>
                              <AccordionItem value="item-1" className="bg-[#F6F6F6] px-5 md:px-6 py-4 md:py-5 rounded-3xl">
                              <AccordionTrigger className="text-charcoal-black font-semibold">What digital services do you offer?</AccordionTrigger>
                              <AccordionContent>
                                   Yes. It adheres to the WAI-ARIA design pattern.
                              </AccordionContent>
                              </AccordionItem>
                         </Accordion>

                         <Accordion type="single" collapsible>
                              <AccordionItem value="item-1" className="bg-[#F6F6F6] px-5 md:px-6 py-4 md:py-5 rounded-3xl">
                              <AccordionTrigger className="text-charcoal-black font-semibold">How do you ensure the quality of your work?</AccordionTrigger>
                              <AccordionContent>
                                   Yes. It adheres to the WAI-ARIA design pattern.
                              </AccordionContent>
                              </AccordionItem>
                         </Accordion>

                         <Accordion type="single" collapsible>
                              <AccordionItem value="item-1" className="bg-[#F6F6F6] px-5 md:px-6 py-4 md:py-5 rounded-3xl">
                              <AccordionTrigger className="text-charcoal-black font-semibold">How does your UI/UX design process work?</AccordionTrigger>
                              <AccordionContent>
                                   Yes. It adheres to the WAI-ARIA design pattern.
                              </AccordionContent>
                              </AccordionItem>
                         </Accordion>

                         <Accordion type="single" collapsible>
                              <AccordionItem value="item-1" className="bg-[#F6F6F6] px-5 md:px-6 py-4 md:py-5 rounded-3xl">
                              <AccordionTrigger className="text-charcoal-black font-semibold">Can you improve my website’s search engine ranking?</AccordionTrigger>
                              <AccordionContent>
                                   Yes. It adheres to the WAI-ARIA design pattern.
                              </AccordionContent>
                              </AccordionItem>
                         </Accordion>

                         <Accordion type="single" collapsible>
                              <AccordionItem value="item-1" className="bg-[#F6F6F6] px-5 md:px-6 py-4 md:py-5 rounded-3xl">
                              <AccordionTrigger className="text-charcoal-black font-semibold">What industries do you serve?</AccordionTrigger>
                              <AccordionContent>
                                   Yes. It adheres to the WAI-ARIA design pattern.
                              </AccordionContent>
                              </AccordionItem>
                         </Accordion>

                         <Accordion type="single" collapsible>
                              <AccordionItem value="item-1" className="bg-[#F6F6F6] px-5 md:px-6 py-4 md:py-5 rounded-3xl">
                              <AccordionTrigger className="text-charcoal-black font-semibold">How can I get started on a project with you?</AccordionTrigger>
                              <AccordionContent>
                                   Yes. It adheres to the WAI-ARIA design pattern.
                              </AccordionContent>
                              </AccordionItem>
                         </Accordion>

                    </div>

               </div>
          </div>
    </section>
  )
}

export default FAQ