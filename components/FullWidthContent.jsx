import Button from './button/Button';
import Image from 'next/image';
import style from '../styles/Fullwidthcontent.module.css';

const FullWidthContent = ({ col }) => {
	return (
		<section className="full-width-content overflow-hidden bg-lightning padding-medium mx-auto xxl-up:min-h-[750px] lg:pt-0">
			<div
				className={`bg-img ${style.bgimg} absolute top-0 left-0 w-[36.7%] h-[750px] tablet:h-[400px] phablet:h-[300px] lg:relative lg:max-w-full lg:w-full sm:h-[296px]`}
			>
            	<Image
						src={col.backimgpath}
						alt={col.alt}
						width={1000}
						height={1000}
						className="w-full h-full object-cover"
					/>
			</div>
			<div className="container">
				<div className="row-wrap relative flex justify-between pt-[35px] lg:pt-0 lg:flex-wrap tablet:-mt-[250px] phablet:-mt-[150px] sm:-mt-[220px]">
					<div className="img-wrap relative max-w-[360px] w-full max-h-[443px] laptop:h-[443px] desktop:h-auto laptopsmall:h-[400px] laptopsmall:w-[325px] tabletlarge:h-[360px] tabletlarge:w-[325px] lg:h-[342px] lg:w-[253px] lg:mb-[40px]">
						<div className="img absolute w-full h-full top-0 xxl-up:!left-[50%] desktop:left-[60%] laptop:left-[60%] z-[3]">
							<Image
								src={col.frontimgpath}
								alt={col.alt}
								width={360}
								height={443}
								className="w-full h-full"
							/>
						</div>
					</div>
					<div className={`${style.textwrap} text-wrap laptop:pl-[250px] lg-up:max-w-[675px] lg:w-full`} >
						<h2 className="h1 text-cosmos text-right lg:text-left">
							{col.colTitle}
						</h2>
						<p className="pt-[38px] mb-[30px] ml-[55px] text-cosmos max-w-[614px] lg:mb-[20px] lg:ml-0 lg:pt-0 lg:mt-[28px]">
							{col.colBlurb}
						</p>
						<Button
							buttonText={col.btnText}
							url={'/'}
							buttonClass={'text-link-black ml-[55px] lg:ml-0'}
						/>
					</div>
				</div>
			</div>
		</section>

		// 6395573024
	);
};

export default FullWidthContent;
