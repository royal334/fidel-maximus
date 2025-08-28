import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

function FAQ() {
  return (
    <section id="faq">
          <div className='container mx-auto px-4 md:px-0 py-8 md:py-16'>
               <h3 className='font-bold text-2xl md:text-4xl text-center text-charcoal-black'>Frequently Asked Questions</h3>
               <div className='mt-8'>
                    <div className='mb-6 flex flex-col gap-4 inter'>
                         <Accordion type="single" collapsible>
                              <AccordionItem value="item-1" className="bg-[#F6F6F6] px-5 md:px-6 py-4 md:py-5 rounded-3xl">
                              <AccordionTrigger className="text-charcoal-black font-semibold">What services does Fidel Automobile offer?</AccordionTrigger>
                              <AccordionContent>
                                   We provide auto sales, vehicle repairs and servicing, spare parts, importation of cars and general car consultancy for both individuals and corporate clients.
                              </AccordionContent>
                              </AccordionItem>
                         </Accordion>

                         <Accordion type="single" collapsible>
                              <AccordionItem value="item-1" className="bg-[#F6F6F6] px-5 md:px-6 py-4 md:py-5 rounded-3xl">
                              <AccordionTrigger className="text-charcoal-black font-semibold">Can I trade in my old car for a new one?</AccordionTrigger>
                              <AccordionContent>
                                   Yes, we offer trade-in services. Our experts will evaluate your vehicle and offer a fair market value that can be used towards your next purchase.
                              </AccordionContent>
                              </AccordionItem>
                         </Accordion>

                         <Accordion type="single" collapsible>
                              <AccordionItem value="item-1" className="bg-[#F6F6F6] px-5 md:px-6 py-4 md:py-5 rounded-3xl">
                              <AccordionTrigger className="text-charcoal-black font-semibold">Do you offer vehicle financing or installment payment options?</AccordionTrigger>
                              <AccordionContent>
                                   Yes, we partner with select financial institutions to offer flexible auto financing options for qualified buyers.
                              </AccordionContent>
                              </AccordionItem>
                         </Accordion>

                         <Accordion type="single" collapsible>
                              <AccordionItem value="item-1" className="bg-[#F6F6F6] px-5 md:px-6 py-4 md:py-5 rounded-3xl">
                              <AccordionTrigger className="text-charcoal-black font-semibold">What brands or types of cars do you sell?</AccordionTrigger>
                              <AccordionContent>
                                   We deal in a wide range of local and foreign vehicles including Toyota, Lexus, Honda, Mercedes-Benz, BMW, and more.
                              </AccordionContent>
                              </AccordionItem>
                         </Accordion>

                         <Accordion type="single" collapsible>
                              <AccordionItem value="item-1" className="bg-[#F6F6F6] px-5 md:px-6 py-4 md:py-5 rounded-3xl">
                              <AccordionTrigger className="text-charcoal-black font-semibold">Can I book a car service appointment online?</AccordionTrigger>
                              <AccordionContent>
                                   Absolutely. You can schedule an appointment through our website or by calling our service line.
                              </AccordionContent>
                              </AccordionItem>
                         </Accordion>

                         <Accordion type="single" collapsible>
                              <AccordionItem value="item-1" className="bg-[#F6F6F6] px-5 md:px-6 py-4 md:py-5 rounded-3xl">
                              <AccordionTrigger className="text-charcoal-black font-semibold inter">What services do you offer at Fidel Laundry?</AccordionTrigger>
                              <AccordionContent>
                                   Our services include washing, drying, ironing, stain removal, dry cleaning, and pickup & delivery.
                              </AccordionContent>
                              </AccordionItem>
                         </Accordion>

                         <Accordion type="single" collapsible>
                              <AccordionItem value="item-1" className="bg-[#F6F6F6] px-5 md:px-6 py-4 md:py-5 rounded-3xl">
                              <AccordionTrigger className="text-charcoal-black font-semibold">What are your pickup and delivery hours?</AccordionTrigger>
                              <AccordionContent>
                                   Pickup and delivery are available from 8AM to 6PM, Monday to Saturday. You can schedule via call or WhatsApp.
                              </AccordionContent>
                              </AccordionItem>
                         </Accordion>

                         <Accordion type="single" collapsible>
                              <AccordionItem value="item-1" className="bg-[#F6F6F6] px-5 md:px-6 py-4 md:py-5 rounded-3xl">
                              <AccordionTrigger className="text-charcoal-black font-semibold">How long does it take to process laundry?</AccordionTrigger>
                              <AccordionContent>
                                   Standard turnaround is 24 to 72 hours, depending on the item and service type. Express service is also available.
                              </AccordionContent>
                              </AccordionItem>
                         </Accordion>

                         <Accordion type="single" collapsible>
                              <AccordionItem value="item-1" className="bg-[#F6F6F6] px-5 md:px-6 py-4 md:py-5 rounded-3xl">
                              <AccordionTrigger className="text-charcoal-black font-semibold">Do you clean special fabrics or delicate items?</AccordionTrigger>
                              <AccordionContent>
                                   Yes, we handle all types of fabrics including lace, silk, suits, wedding gowns, agbadas, curtains, and upholstery with utmost care.
                              </AccordionContent>
                              </AccordionItem>
                         </Accordion>

                         <Accordion type="single" collapsible>
                              <AccordionItem value="item-1" className="bg-[#F6F6F6] px-5 md:px-6 py-4 md:py-5 rounded-3xl">
                              <AccordionTrigger className="text-charcoal-black font-semibold">Where are your laundry outlets located?</AccordionTrigger>
                              <AccordionContent>
                                   Our offices are located at Marvelous Junction, Teezers Junction, and Next Level Junction — all along Ifite Road.
                              </AccordionContent>
                              </AccordionItem>
                         </Accordion>

                         <Accordion type="single" collapsible>
                              <AccordionItem value="item-1" className="bg-[#F6F6F6] px-5 md:px-6 py-4 md:py-5 rounded-3xl">
                              <AccordionTrigger className="text-charcoal-black font-semibold">What types of properties do you deal in?</AccordionTrigger>
                              <AccordionContent>
                                   We handle residential, commercial, and industrial properties — from rental units to outright sales and land acquisitions.
                              </AccordionContent>
                              </AccordionItem>
                         </Accordion>

                         <Accordion type="single" collapsible>
                              <AccordionItem value="item-1" className="bg-[#F6F6F6] px-5 md:px-6 py-4 md:py-5 rounded-3xl">
                              <AccordionTrigger className="text-charcoal-black font-semibold">Do you offer property management services?</AccordionTrigger>
                              <AccordionContent>
                                   Yes, we offer full-scale property management including tenant sourcing, rent collection, facility maintenance, and legal documentation.
                              </AccordionContent>
                              </AccordionItem>
                         </Accordion>

                         <Accordion type="single" collapsible>
                              <AccordionItem value="item-1" className="bg-[#F6F6F6] px-5 md:px-6 py-4 md:py-5 rounded-3xl">
                              <AccordionTrigger className="text-charcoal-black font-semibold">Is it safe to invest in properties through Fidel Assets?</AccordionTrigger>
                              <AccordionContent>
                                   Yes, we prioritize transparency and due diligence in all our real estate transactions. All documents are verified, and client interests are well protected.
                              </AccordionContent>
                              </AccordionItem>
                         </Accordion>

                         <Accordion type="single" collapsible>
                              <AccordionItem value="item-1" className="bg-[#F6F6F6] px-5 md:px-6 py-4 md:py-5 rounded-3xl">
                              <AccordionTrigger className="text-charcoal-black font-semibold">Can you help me find land to buy and build on?</AccordionTrigger>
                              <AccordionContent>
                                   Definitely. We have verified land listings in prime locations and also assist with land banking for investment purposes.
                              </AccordionContent>
                              </AccordionItem>
                         </Accordion>

                         <Accordion type="single" collapsible>
                              <AccordionItem value="item-1" className="bg-[#F6F6F6] px-5 md:px-6 py-4 md:py-5 rounded-3xl">
                              <AccordionTrigger className="text-charcoal-black font-semibold">Do you provide real estate advisory services?</AccordionTrigger>
                              <AccordionContent>
                                   Yes, we offer expert guidance on property investment, market trends, land use, and documentation.
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