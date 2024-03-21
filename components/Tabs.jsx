import React,{useState, useEffect,} from 'react'
import Image from "next/image";
import Button from "./button/Button";
import styles from '../styles/Tabs.module.css';


const Tabs = ({tab, tab_content, bg}) => {

  // Code For tab
  const [i, setI] = useState(0)

  const handler = (index,text) => {
      setI(index)
  }

  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    let bladeHeight = document.querySelector(".tabs").offsetHeight
    let wrapperHeight = document.querySelector(".tabs .wrapp").offsetHeight
    let gap = ((bladeHeight - wrapperHeight) / (tab.length +1))

    let top = document.querySelector(".tabs").getBoundingClientRect().top - 100
    var loadCurrent = window.scrollY
    let first = top + gap
    let second = first + gap
    let third = second + gap
    let fourth = third + gap
    let fifth = fourth + gap
    if ((loadCurrent > first) && (loadCurrent < second)) {
      setI(0)
    } else if ((loadCurrent > second) && (loadCurrent < third)) {
      setI(1)
    } else if ((loadCurrent > third) && (loadCurrent < fourth)) {
      if (i <= (tab.length)) {
        setI(2)
      }
    } else if ((loadCurrent > fourth) && (loadCurrent < fifth)) {
      if (i <= (tab.length)) {
        setI(3)
      }
    }
    console.log("first", first, "second", second)
    function habdleScroll(){
      var current = window.scrollY
    //  console.log(current)
      if ((current > first) && (current < second)) {
       
        setI(0)
      } else if ((current > second) && (current < third)) {
      
        setI(1)
      } else if ((current > third) && (current < fourth)) {
     
        if (i <= (tab.length)) {
          setI(2)
        }
      } else if ((current > fourth) && (current < fifth)) {
        if (i <= (tab.length)) {
          setI(3)
        }
      } 
    }
    window.addEventListener("scroll", habdleScroll)
    return () => {
      window.removeEventListener('scroll', habdleScroll);
    };
  },[setI])

  return (
    <section className={`tabs padding-medium ${styles.tabs} overflow-x-clip`}>
      <div className={`container ${styles.container} min-h-[280vh]`} >
        <div className={`wrapp ${styles.wrapper}`}>
          <ul className={`w-full flex flex-wrap items-center`}>
            {tab.map((item, index) => {
              return (
                <li key={index} className={`list ${styles.list} sm:w-1/4 flex justify-center py-[15px] px-[10px] w-[25%]`}><h4 key={item.tab_heading} onClick={() => handler(index)} className={`${i === index ? ` ${styles.active} ` : ''} relative cursor-pointer text-center pb-[12px]`}>{item.tab_heading}</h4></li>
              );
            })}
          </ul>
          <div className={`tab-outer relative ${styles.tab_outer} pt-[29px]`}>
            {tab_content.map((item, index) => {
              return (
                <div key={index} className={`tab-content transition-all duration-500 overflow-hidden ${styles.tab_content} ${i === index ? `h-fit opacity-[1] ` : 'h-0 opacity-[0] '} flex flex-wrap`}>
                  <div className={`col-seven ${styles.col_seven} pr-[60px]`}>
                    <h2 className={`pr-[30px]`}>{item.tab_title}</h2>
                    <p className={`pt-[40px]`}>{item.blurb}</p>
                    <div className={`btn-wrap pt-[20px]`}>
                      <Button buttonClass='primary' buttonText={item.btntext} url={item.btnlink} />
                    </div>
                  </div>
                  <div className={`colThree w-[486px] pt-[43px] relative`}>
                    <div className={`imageWrap absolute top-[114px] left-0 flex justify-end h-[240px]`}>
                      <Image className={`h-[52px] w-full h-full object-cover max-w-[360px] max-h-[248px]`} src={item.imgpath} alt={item.alt} width={120} height={120} />
                    </div>
                    <div className={`imageWrap flex justify-end w-full h-full`}>
                      <Image className={`h-[52px] w-full h-full object-cover max-w-[360px] max-h-[248px]`} src={item.imgpath2} alt={item.alt2} width={120} height={120} />
                    </div>
                  </div>
                  <div className={`content-outer pt-[4px] w-full flex flex-wrap`}>
                    <div className={`img-outer ${styles.imgOuter} relative top-[0] bottm-[0] m-[auto] w-[487px] h-[256px]`}>
                      <Image className={`h-[256px] w-[100%] h-full object-cover`} src={item.imgpath3} alt={item.alt3} width={120} height={120} />
                      <Image className={`logo absolute left-[0] top-[0] right-[0] bottom-[0] h-46px] w-[120px] m-auto z-10`} src={item.logo} alt={item.logo_alt} width={120} height={46} />
                    </div>
                    <div className={`content ${styles.content}`}>
                      <div className={`inner-content ${styles.innerContent} ${item.bg} pt-[47px] pb-[67px] pl-[255px] pr-[20px] h-full`}>
                        <div className={`inner-content-wrap`}>
                          <h3>{item.inner_title} </h3>
                          <p className={`max-w-[485px] pt-[14px]`}>{item.inner_blurb} </p>
                          <ul className={`flex pt-[5px]`}>
                            <li className={`relative`}><h6>{item.tag1}</h6></li>
                            <li className={`relative`}><h6>{item.tag2}</h6></li>
                          </ul>
                          <div className={`btn-wrap pt-[27px]`}>
                            <Button buttonClass={`${item.btnClass} mr-[23px]`} buttonText={`${item.bottom_btn_text}`} url={`${item.bottom_btn_url}`} />
                            <Button buttonClass='text-link-white' buttonText={`${item.bottom_link_text}`} url={`${item.bottom_link_url}`} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Tabs;