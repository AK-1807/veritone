import React from 'react'
import Image from "next/image";
import Button from "./button/Button";
import styles from '../styles/HeroBanner.module.css';

const HeroBanner = ({heroTitle, heroBlurb, bg}) => {
	return (
		<section className={`hero-banner ${styles.heroBanner} ${bg} items-center flex flex-wrap justify-center pt-[130px] pb-[100px]`}>
			<div className='container'>
				<h1 className={`text-center text-white`}>{heroTitle}</h1>
				<p className={`text-center text-white max-w-[600px] mx-[auto] pt-[77px]`}>{heroBlurb}</p>
				<div className={`btn-wrap text-center pt-[60px]`}>
					<Button buttonText={'Connect with us'} url={'/'} buttonClass={'default mr-[30px]'} />
					<Button buttonText={'Watch now'} url={'/'} buttonClass={'transparent'} />
				</div>
			</div>
		</section>
	);
}

export default HeroBanner;
