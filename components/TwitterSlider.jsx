import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from "next/link";
import Button from "./button/Button";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageTextCarousel = ({
    imageSrc,
    imageName,
    desc,
    client,
    clientImage,
    userName,
    url,
    comments,
    refresh,
    likes,
    share,
    categories,
    index
}) => {
    return (
        <div className={`sliderCard mx-[20px] sm:max-w-[360px]`}>
            <Link className='emptyLink' href={url}>.</Link>
            <div className="imageWrap max-w-[360px] xxl-up:max-w-[600px] max-h-[340px] w-full h-full overflow-hidden">
                <Image
                    src={imageSrc}
                    width={2000}
                    height={2000}
                    alt={imageName}
                    className={`w-full h-full`}
                />
            </div>
            <div className="contentWrap">
                <div className="clientWrap my-[30px] flex w-full">
                    <div className="clientImage max-w-[59px] max-h-[59px] h-[59px] w-full rounded-[50%] overflow-hidden bg-gray">
                        {/* <Image
                            src={clientImage}
                            width={300}
                            height={300}
                            alt={client}
                            className={`w-full h-full object-cover`}
                        /> */}
                    </div>
                    <div className="details ml-[20px]">
                        <span className='text-[20px] block text-cosmos'>{client}</span>
                        <span className='text-[16px] block text-cosmos'>{userName}</span>
                    </div>
                </div>
                <p className='text-cosmos small'>{index } , {desc}</p>
            </div>
            <div className="postDetailWrap flex mt-[35px]">
                <div className="comments flex items-center mr-[39px]">
                    <div className="icon">
                        <Image
                            src={`/images/icons/comment_icon.svg`}
                            width={50}
                            height={50}
                            alt={client}
                            className={`max-w-[20px] max-h-[20px] w-full h-full`}
                        />
                    </div>
                    <span className='inline-block ml-[10px]'>{comments}</span>
                </div>
                <div className="refresh flex items-center mr-[39px]">
                    <div className="icon">
                        <Image
                            src={`/images/icons/refresh_icon.svg`}
                            width={50}
                            height={50}
                            alt={client}
                            className={`max-w-[20px] max-h-[20px] w-full h-full`}
                        />
                    </div>
                    <span className='inline-block ml-[10px]'>{refresh}</span>
                </div>
                <div className="likes flex items-center mr-[39px]">
                    <div className="icon">
                        <Image
                            src={`/images/icons/heart_icon.svg`}
                            width={50}
                            height={50}
                            alt={client}
                            className={`max-w-[20px] max-h-[20px] w-full h-full`}
                        />
                    </div>
                    <span className='inline-block ml-[10px]'>{likes}</span>
                </div>
                <div className="share flex items-center">
                    <div className="icon">
                        <Image
                            src={`/images/icons/share_icon.svg`}
                            width={50}
                            height={50}
                            alt={client}
                            className={`max-w-[20px] max-h-[20px] w-full h-full`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function TwitterSlider({ data, onlyInternalPosts }) {
    // let SlidesData;
    const [slidesData, setSlidesData] = useState(data)
    const [totalSlides, setTotalSlides] = useState(data.length)
    const [checked, setChecked] = useState(true)
   // let filteredItems;
    const sliderRef = useRef(null);

    // console.log(sliderRef.current)
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 3.65,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: false,
        swipe: true,
        touchThreshold: 100,
    };
    useState(() => {
        if (onlyInternalPosts === true) {
            let filteredItems = data.filter(item => item.categories.includes("veritone"));
            setSlidesData(filteredItems)
        }
    }, [])
    useEffect(() => {
        setTotalSlides(slidesData?.length)
    },[slidesData])
    // const totalSlides = SlidesData?.length;
    // console.log(totalSlides);
    // console.log(SlidesData);

    const responsiveSettings = [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2.65,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1.65,
            },
        },
        {
            breakpoint: 595,
            settings: {
                slidesToShow: 0.98,
                centerMode: false,
            },
        },
    ];

    Object.assign(settings, { responsive: responsiveSettings });


    const changeHandler = (e) => {
        setChecked(false)
        if (e.target.checked) {
            let filteredItems = data.filter(item => item.categories.includes("veritone"));
            setSlidesData(filteredItems)
        } else { 
        setSlidesData(data)
        }
        setTimeout(() => {
            setChecked(true)
        },300)
        
    }
    return (
        <section className="testimonialSlider overflow-hidden">
            <div className={` px-[20px] mx-auto`}>
                <div className="intro flex items-end justify-between mb-[42px] ipad:flex-wrap">
                    <div className="titleWrap w-[30%]">
                        <h2 className="h1 pb-[10px]">
                            Latest updates
                        </h2>
                    </div>
                    <div ref={sliderRef} className="btnWrapper w-[50%] flex justify-end items-center ipad:w-full ipad:justify-start">
                        <div className="checkBoxWithText flex items-center">
                            <div className={`checkboxSwitch`}>
                                <input defaultChecked={onlyInternalPosts} type="checkbox" onChange={(e)=>changeHandler(e)}/>
                            </div>
                            <p className='ml-[20px] small'>Only show updates from Veritone</p>
                        </div>
                        <div className="btnWrap ml-[20px]">
                            <Button buttonText={'Get updated'} url={'/'} buttonClass={'black-border-btn'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sliderOuter  mx-auto">
                <div className={`sliderWrap transition-opacity duration-300 ${checked == true ? 'opacity-[1]' : 'opacity-0'}`}>
                    <Slider  {...settings}>
                        {slidesData?.map((slide, index) => (
                            <div key={index}>
                                <ImageTextCarousel {...slide} index={index}/>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}
