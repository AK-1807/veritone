'use client'
import React from "react";
import Link from  'next/link';
const Footercta = () => {
    return(
        <section className="footercta padding-large relative w-full py-[100px] bg-[#212121] ">
           <div className='container '>
          <div className="footerCta_content relative w-full text-center ">
            <h2 className= 'h1  text-white font-light mb-[65px]'>
              Get AI that brings out the best in your teams.
            </h2>
            <p className=' max-w-[1003px] mx-auto text-white font-normal'>
              Ready for proven, trusted enterprise AI solutions that turn
              possibilities into profits, deliver better results, and make your
              people better than ever before? Let’s talk.
            </p>
            <div className="button_wrapper relative w-full flex justify-center items-center mt-[50px] sm:flex-col ">
              <Link
                href='/'
                className=' default mr-[30px]'
              >
                Let’s join forces
              </Link>
              <Link
                href='/'
                className=' transparent sm:!hidden'
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
        </section>
    )
}
export default Footercta;