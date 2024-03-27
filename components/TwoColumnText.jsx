import Image from 'next/image';
import Button from './button/Button';

const TwoColumnText = ({ col }) => {
	return (
		<section className="two-column-text no-padding-bottom">
			<div className="container">
				<div className="row-wrap flex flex-wrap justify-between">
					{col.map((item, i) => {
						const lastCol = i === col.length - 1;
						return (
							<div
								key={i}
								className={`col-two max-w-[487px] laptop:max-w-[412px] flex flex-col justify-between ${
									lastCol ? 'last-col lg:mt-[70px]' : ''
								}`}
							>
								<div className="icon-wrap ">
									<Image
										src={item.imgpath}
										alt={item.alt}
										width={42}
										height={42}
										quality={75}
									/>
								</div>
								<h2
									className={`pt-[12px] ${lastCol ? 'max-w-[200px]' : ''}`}
									dangerouslySetInnerHTML={{ __html: item.colTitle }}
								/>
								{/* <h2>{item.colTitle}</h2> */}
								<p className="pt-[28px]  pb-[9px] text-cosmos">
									{item.colBlurb}
								</p>
								<Button
									buttonText={item.btnText}
									url={'/'}
									buttonClass={'text-link-black self-start'}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default TwoColumnText;
