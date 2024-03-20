import React,{useState} from 'react'
import Image from "next/image";
import Button from "./button/Button";
import styles from '../styles/Tabs.module.css';


const Tab_Grid = ({tab, tab_content}) => {

  // Code For tab
  const [i, setI] = useState(0)
  const handler = (index,text) => {
      setI(index)
  }
  
  return (
    <section className={`tabs padding-medium ${styles.tabs}`}>
      <div className={`container`}>
        <ul className={`w-full flex flex-wrap items-center`}>
        {tab.map((item, index) => {
              return (
                <li key={index} className={`list sm:w-1/4 flex justify-center py-[15px] px-[10px] w-[25%]`}><h4 key={item.tab_heading} onClick={() => handler(index)} className={`${i === index ? ` active ` : ''} cursor-pointer text-center`}>{item.tab_heading}</h4></li>
              );
            })}
        </ul>
        <div className={`tab-outer pt-[41px]`}>
          {tab_content.map((item, index) => {
                return (
              <div key={index} className={`tabContent ${i === index ? ` block ` : 'hidden'} flex flex-wrap`}>
                <div className={`col-seven w-[60%] pr-[90px]`}>
                  <h2 className={`pr-[30px]`}>{item.tab_title}</h2>
                  <p className={`pt-[50px]`}>{item.blurb}</p>
                  <div className={`btn-wrap pt-[30px]`}>
                    <Button buttonClass='primary' buttonText={item.btntext} url={item.btnlink} />
                  </div>
                </div>
                <div className={`colThree w-[436px] relative`}>
                  <div className={`imageWrap absolute top-[60px] left-0 flex justify-end h-[248px]`}>
                      <Image className={`h-[52px] w-full h-full object-cover max-w-[360px] max-h-[248px]`} src={item.imgpath}  alt={item.alt} width={120} height={120}/>
                  </div> 
                  <div className={`imageWrap flex justify-end w-full h-full`}>
                      <Image className={`h-[52px] w-full h-full object-cover max-w-[360px] max-h-[248px]`} src={item.imgpath2}  alt={item.alt2} width={120} height={120}/>
                  </div>
                </div>
								<div className={`content-outer w-full flex flex-wrap`}>
									<div className={`img-outer ${styles.imgOuter} relative top-[0] bottm-[0] m-[auto] w-[487px] h-[256px]`}>
										<Image className={`h-[256px] w-[100%] h-full object-cover`} src={item.imgpath3}  alt={item.alt3} width={120} height={120}/>
										<Image className={`logo absolute left-[0] top-[0] right-[0] bottom-[0] h-46px] w-[120px] m-auto z-10`} src={item.logo}  alt={item.logo_alt} width={120} height={46}/>
									</div>
									<div className={`content ${styles.content}`}>
										<div className={`inner-content ${styles.innerContent}  pt-[55px] pb-[67px] pl-[210px] pr-[20px] h-full`}>
											<div className={`inner-content-wrap max-w-[465px]`}>
                        <h3>{item.inner_title} </h3>
                        <p className={`pt-[10px]`}>{item.inner_blurb} </p>
                        <ul className={`flex pt-[10px]`}>
                          <li><h6>{item.tag1}</h6></li>
                          <li><h6>{item.tag2}</h6></li>
                        </ul> 
                        <div className={`btnWrap pt-[33px]`}>
                          <Button buttonClass='primary mr-[30px]' buttonText={'Learn more'} url={'/'} />
                          <Button buttonClass='text-link-white' buttonText={'View case studies'} url={'/'} />
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
    </section>
  );
}

export default Tab_Grid;