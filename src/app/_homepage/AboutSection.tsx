import { Button, Lottie } from 'xtreme-ui';

import { getAnimSrc } from '#utils/constants/common';
import { scrollToSection } from '#utils/helper/common';

import './aboutSection.scss';

const AboutSection = () => {
	return (
		<section className='aboutSection' id='homepage-aboutus'>
			<div className='aboutContent'>
				<h2>About us</h2>
				<p>
					Akod Scaffolding is a globally recognized manufacturer, exporter, and
					service provider specializing in high-quality scaffolding systems,
					safety products, and welding consumables. With operations in India and
					Qatar, we cater to diverse industries, including construction, oil &
					gas, industrial maintenance, and infrastructure projects.
				</p>
				<p>
					Our company has built a reputation for quality, reliability, and
					innovation, making us a preferred choice for contractors, engineering
					firms, and industrial clients worldwide. With 4 years of industry
					experience, we have successfully completed 100+ projects and shipped
					over 1000+ consignments globally.
				</p>
				<div className='aboutAction'>
					<Button
						label='Learn more'
						onClick={() => scrollToSection('homepage-features')}
					/>
					<Button
						label='Why us?'
						type='secondary'
						onClick={() => scrollToSection('homepage-features')}
					/>
				</div>
			</div>
			<div className='aboutAnim'>
				<Lottie
					className='scanMenuAnim'
					src={getAnimSrc('FoodScanMenu')}
					speed={0.8}
				/>
			</div>
		</section>
	);
};

export default AboutSection;
