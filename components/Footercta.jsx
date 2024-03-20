'use client'
import React from "react";
import Link from  'next/link';
const Footercta = () => {
    return(
        <section className="footercta relative w-full py-[100px] bg-[#212121] ">
           <div className='container '>
          <div className="footerCta_content relative w-full text-center ">
            <h2 className= 'h1 leading-[111px] text-white font-light mb-[30px] desktop:text-[100px] desktop:leading-[92px] tablet:text-[80px] tablet:leading-[72px] phablet:text-[60px] phablet:leading-[50px] sm:text-[40px] sm:leading-[36px] '>
              Get AI that brings out the best in your teams.
            </h2>
            <p className=' leading-[33px] max-w-[741px] mx-auto text-white font-normal tablet:text-[22px] tablet:leading-[30px] phablet:text-[20px] phablet:leading-[26px] sm:text-[18px] sm:leading-[22px] '>
              Ready for proven, trusted enterprise AI solutions that turn
              possibilities into profits, deliver better results, and make your
              people better than ever before? Let’s talk.
            </p>
            <div className="button_wrapper relative w-full flex justify-center items-center mt-10 sm:flex-col ">
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