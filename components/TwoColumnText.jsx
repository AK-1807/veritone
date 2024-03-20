import Button from './button/Button';

const TwoColumnText = ({ col }) => {
	return (
		<section className="two-column-text">
			<div className="container">
				<div className="row-wrap flex flex-wrap justify-between">
					{col.map((item, i) => {
						return (
							<div
								key={i}
								className="col-two max-w-md flex flex-col justify-between"
							>
								<div className="icon-wrap ">
									<img
										src={item.imgpath}
										alt={item.alt}
										width={42}
										height={42}
									/>
								</div>
								<h2 className="pt-5">{item.colTitle}</h2>
								<p className="pt-5 pb-7">{item.colBlurb}</p>
								<Button
									buttonText={item.btnText}
									url={'/'}
									buttonClass={'text-link self-start'}
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
