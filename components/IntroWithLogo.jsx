import React from 'react'
import Image from "next/image";
import Button from "./button/Button";

const Intro_with_logo = ({title, blurb, bg, logo}) => {
	return (
		<section className={`intro-with-logo padding-top-large padding-medium-bottom ${bg}`}>
			<div className={`container`}>
				<div className={`flex flex-wrap  items-center self-center justify-center`}>
					<h2 className={`text-center max-w-[1040px]`}>{title}</h2>
					<p className={`text-center pt-[29px] max-w-[760px]`}>{blurb}</p>
					<div className={`logo-wrap w-full flex flex-wrap items-center pt-[59px] laptop:pt-[40px] laptop:pt-[40px] lg:pt-[30px]`}>
					{logo.map((item, i) => {
							return (
								<div key={i} className={`logo w-1/5 flex justify-center p-[15px] sm:w-[50%]`}>
									<Image className={`h-[52px]`} src={item.imgpath}  alt={item.alt} width={120} height={120}/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Intro_with_logo;
