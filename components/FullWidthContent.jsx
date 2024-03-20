import Image from 'next/image';
import Button from './button/Button';

const FullWidthContent = ({ col }) => {
	console.log(col)
	return (
		<section className="full-width-content max-w-[1595px] mx-auto">
			<div className="row-wrap flex flex-wrap">
				<div className="col-three w-[30%] relative">
					<div className="img-wrap absolute top-[116px] right-[-100px]">
						<Image src={col.frontimgpath} alt={col.alt}  width={500} height={500}/>
					</div>
					<div className="img-wrap">
						<Image src={col.backimgpath} alt={col.alt} width={500} height={500}/>
					</div>
				</div>
				<div className="col-seven w-[70%]  bg-lightning flex flex-col justify-center items-center ">
					<div className="text-wrap w-[55%]">
						<h2>{col.colTitle}</h2>
						<p className="pt-11 pb-7">{col.colBlurb}</p>
						<Button
							buttonText={col.btnText}
							url={'/'}
							buttonClass={'text-link '}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FullWidthContent;
