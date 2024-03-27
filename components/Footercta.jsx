'use client'
import React from "react";
import Link from  'next/link';
import Button from "./button/Button";
const Footercta = () => {
   
    return(
        <section className="footercta padding-large relative w-full py-[100px] bg-cosmos ">
           <div className='container '>
          <div className="footerCta_content relative w-full text-center ">
            <h2 className= 'h1  text-white font-light '>
              Get AI that brings out the best in your teams.
            </h2>
            <p className=' max-w-[1003px] mx-auto text-white font-normal mt-[65px] sm:mt-[40px]'>
              Ready for proven, trusted enterprise AI solutions that turn
              possibilities into profits, deliver better results, and make your
              people better than ever before? Let’s talk.
            </p>
            <div className="button_wrapper relative w-full flex justify-center items-center mt-[50px] sm:flex-col ">
              <Button buttonText={'Let’s join forces'} url={'/'} buttonClass={'default mr-[30px] sm:w-full sm:mr-0'} />
              <Button buttonText={'Contact us'} url={'/'} buttonClass={'transparent mr-[30px] sm:mt-[20px] sm:w-full sm:mr-0'} />
            </div>
          </div>
        </div>
        </section>
    )
}
export default Footercta;