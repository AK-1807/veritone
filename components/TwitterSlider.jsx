import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
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
    share
}) => {

    return (
        <div className={`sliderCard mx-[20px] sm:max-w-[360px]`}>
            <a className='emptyLink' href={url}>.</a>
            <div className="imageWrap max-w-[360px] max-h-[340px] w-full h-full overflow-hidden">
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
                <p className='text-cosmos small'>{desc}</p>
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
    // console.log(onlyInternalPosts);
    const totalSlides = data?.length;
    const sliderRef = useRef(null);
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
        // {
        //     breakpoint: 767,
        //     settings: {
        //         slidesToShow: 4,
        //     },
        // },
        {
            breakpoint: 595,
            settings: {
                // autoplay: false,
                slidesToShow: 0.98,
                centerMode: false,
            },
        },
        // {
        //     breakpoint: 460,
        //     settings: {
        //         slidesToShow: 2,
        //     },
        // },
    ];

    Object.assign(settings, { responsive: responsiveSettings });
    return (
        <section className="testimonialSlider overflow-hidden">
            <div className={`max-w-[1550px] px-[20px] mx-auto`}>
                <div className="intro flex items-end justify-between mb-[42px] ipad:flex-wrap">
                    <div className="titleWrap w-[30%]">
                        <h2 className="h1 pb-[10px]">
                            Latest updates
                        </h2>
                    </div>
                    <div className="btnWrapper w-[50%] flex justify-end items-center ipad:w-full ipad:justify-start">
                        <div className="checkBoxWithText flex items-center">
                            <div className={`checkboxSwitch`}>
                                <input defaultChecked={onlyInternalPosts} type="checkbox" />
                            </div>
                            <p className='ml-[20px] small'>Only show updates from Veritone</p>
                        </div>
                        <div className="btnWrap ml-[20px]">
                            <Button buttonText={'Get updated'} url={'/'} buttonClass={'black-border-btn'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sliderOuter max-w-[1600px] mx-auto">
                <div className="sliderWrap">
                    <Slider ref={sliderRef} {...settings}>
                        {data?.map((slide, index) => (
                            <div key={index}>
                                <ImageTextCarousel {...slide} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}
