import Button from './button/Button';

const ColTwoGrid = ({ col }) => {
	return (
		<section className="col-two-grid">
			<div className="container">
				<div className="row-wrap flex justify-between">
					{col.map((item, i) => {
						return (
							<div key={i} className="col-two">
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
									buttonClass={'text-link'}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ColTwoGrid;
