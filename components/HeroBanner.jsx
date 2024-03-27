import React from 'react'
import Image from "next/image";
import Button from "./button/Button";
import styles from '../styles/HeroBanner.module.css';

const HeroBanner = ({ heroTitle, heroBlurb, imgpath, alt, video_url, bg }) => {
	return (
		<section className={`hero-banner ${styles.heroBanner} ${bg} ${!video_url == '' ? styles.blackOverlay : ''} items-center flex flex-wrap justify-center pt-[193px] laptopmid:pt-[180px] laptop:pt-[150px] tablet:pt-[140px] md:pt-[130px]`}>
			<div className={`bg-img ${styles.bg_img} absolute top-[0] left-[0] bottom-[0] w-[100%]`}>
				{imgpath && (<Image className={`h-[100%] w-[100%] object-cover`} src={imgpath} alt={alt} width={120} height={120} />) }
			</div>
			{video_url && (<video autoPlay muted loop playsInline preload="none" className={`${styles.video_url} object-cover absolute top-[0] left-[0] bottom-[0] w-[100%] h-[100%]`}>
					<source src={video_url} type="video/mp4" />
				</video>) }
			
			<div className='container z-[2]'>
				<h1 className={`text-center text-white`}>{heroTitle}</h1>
				<p className={`text-center text-white max-w-[600px] mx-[auto] pt-[92px] laptopmid:pt-[80px] laptop:pt-[70px] tablet:pt-[50px] md:pt-[30px]`}>{heroBlurb}</p>
				<div className={`btn-wrap ${styles.btn_wrap} text-center pt-[40px] md:pt-[30px]`}>
					<Button buttonText={'Connect with us'} url={'/'} buttonClass={'default mr-[30px]'} />
					<Button buttonText={'Watch now'} url={'/'} buttonClass={'transparent'} />
				</div>
			</div>
		</section>
	);
}

export default HeroBanner;
