import React,{useState, useEffect, useRef} from 'react'
import Image from "next/image";
import Button from "./button/Button";
import styles from '../styles/Tabs.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var t = 0
const Tabs = ({tab, tab_content, bg}) => {
  
  // Code For tab
  const [i, setI] = useState(0)
  const sliderBlade = useRef(null);
  const [autoplayVal, setAutoplay] = useState(true);
  const [sliderSettings, setSliderSettings] = useState({
                                                          dots: false,
                                                          infinite: true,
                                                          autoplaySpeed: (autoplayVal == true ?  2000 :0),
                                                          speed: 1000,
                                                          slidesToShow:1,
                                                          slidesToScroll: 1,
                                                          swipe: true,
                                                          fade: true,
                                                        })

  const handler = (index, text) => {
   
    setAutoplay(false)
    sliderBlade.current.slickGoTo(index);
    
    setI(index)
    t=index
  }
  const handleChange = (index) => {
    index = (index ==3 ? -1 : index)
    setI(index + 1)
  }

  const [winWidth, setWinWidth] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setI((prevSlide) => (prevSlide + 1) % tab.length); // Advance to the next slide
  //   }, 2000); // Adjust the interval as needed
  //   return () => clearInterval(interval);
  // }, []);

  
 

  return (
    <section className={`tabs ${winWidth > 767 ? 'scrollTab' : ''} padding-medium ${styles.tabs} overflow-x-clip`}>
      <div className={`container ${styles.container} `} >
        <div className={`wrapp `}>
          <ul className={`relative w-full flex flex-wrap items-center bg-white z-[4] pt-[15px]`}>
            {tab.map((item, index) => {
              return (
                <li key={index} className={`list ${styles.list} flex justify-center py-[15px] sm:pb-[0] px-[10px] sm:px-[20px] w-[25%] phablet:w-[50%] sm:w-[100%]`}><h4 onClick={() => handler(index)} className={`${i === index ? ` ${styles.active} ` : ''} relative cursor-pointer text-center pb-[12px]`}>{item.tab_heading}</h4></li>
              );
            })}
          </ul>
          <div className={`tab-outer relative ${styles.tab_outer} pt-[29px]`}>
            <Slider ref={sliderBlade}   {...sliderSettings} autoplay={autoplayVal}  beforeChange={autoplayVal == true ?  handleChange :""} >
              {tab_content.map((item, index) => {
                return (
                  <div className='relative w-full'>
                    <div key={index} className={`tab-content transition-opacity duration-1000 overflow-hidden  flex flex-wrap`}>
                      <div className={`col-seven ${styles.col_seven} pr-[60px]`}>
                        <h2 className={`pr-[30px] md:pr-[0]`}>{item.tab_title}</h2>
                        <p className={`pt-[40px] md:pt-[30px] laptop:pt-[30px] tablet:pt-[30px]`}>{item.blurb}</p>
                        <div className={`btn-wrap pt-[20px]`}>
                          <Button buttonClass='btn-black' buttonText={item.btntext} url={item.btnlink} />
                        </div>
                      </div>
                      <div className={`col-hree ${styles.col_three} w-[486px] md:w-[320px] tablet:w-[300px] pt-[43px] relative laptopmid:pt-[30px] laptop:pt-[30px] tablet:pt-[30px] md:pt-[0] md:m-[auto]`}>
                        <div className={`image-wrap ${styles.image_wrap} absolute top-[114px] md:top-[50px] sm:left-[20px] flex justify-end h-[240px] md:h-[175px]`}>
                          <Image className={`h-[52px] w-full h-full object-cover max-w-[360px] max-h-[248px] md:max-w-[253px] md:max-h-[175px] tablet:max-w-[240px] tablet:max-h-[170px]`} src={item.imgpath} alt={item.alt} width={120} height={120} />
                        </div>
                        <div className={`image-wrap ${styles.image_wrap} flex justify-end w-full h-full sm:pr-[20px]`}>
                          <Image className={`h-[52px] w-full h-full object-cover max-w-[360px] max-h-[248px] md:max-w-[253px] md:max-h-[175px] tablet:max-w-[240px] tablet:max-h-[170px]`} src={item.imgpath2} alt={item.alt2} width={120} height={120} />
                        </div>
                      </div>
                      <div className={`content-outer ${styles.content_outer} pt-[4px] lg:pt-[60px] w-full flex flex-wrap`}>
                        <div className={`img-outer ${styles.imgOuter} relative top-[0] bottm-[0] m-[auto] w-[487px] h-[256px] sm:h-[auto] laptop:w-[350px] sm:w-[100%]`}>
                          <Image className={`h-[256px] w-[100%] h-full object-cover`} src={item.imgpath3} alt={item.alt3} width={120} height={120} />
                          <Image className={`logo absolute left-[0] top-[0] right-[0] bottom-[0] h-46px] w-[120px] m-auto z-10`} src={item.logo} alt={item.logo_alt} width={120} height={46} />
                        </div>
                        <div className={`content ${styles.content}`}>
                          <div className={`inner-content ${styles.innerContent} ${item.bg} pt-[47px] lg:pt-[70px] pb-[67px] lg:pb-[45px] pl-[255px] pr-[20px] h-full laptopmid:pl-[225px] laptop:pl-[150px] lg:pl-[20px]`}>
                            <div className={`inner-content-wrap`}>
                              <h3>{item.inner_title} </h3>
                              <p className={`max-w-[485px] pt-[14px]`}>{item.inner_blurb} </p>
                              <ul className={`flex pt-[5px]`}>
                                <li className={`relative`}><h6>{item.tag1}</h6></li>
                                <li className={`relative`}><h6>{item.tag2}</h6></li>
                              </ul>
                              <div className={`btn-wrap ${styles.btn_wrap} pt-[27px]`}>
                                <Button buttonClass={`${item.btnClass} mr-[23px] sm:mr-[0]`} buttonText={`${item.bottom_btn_text}`} url={`${item.bottom_btn_url}`} />
                                <Button buttonClass={`text-link-white sm:mt-[20px]`} buttonText={`${item.bottom_link_text}`} url={`${item.bottom_link_url}`} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </Slider>
           
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Tabs;