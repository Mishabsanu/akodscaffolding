import './contactSection.scss';

const ContactSection = () => {
	return (
		<section className='contactSection' id='homepage-contact'>
			<div className='contactDetails'>
				<h2>Contact Us</h2>
				<div className='address'>
					<h3>INDIA</h3>
					<p>1st floor KK TOWER</p>
					<p>Nallamthanni, Nilambur, Malappuram dt</p>
					<p>Kerala – India, Po Box – 679 334</p>
					<p>Phone: LANDLINE +91 04931 240 488</p>
					<p>MOBILE: +91 70 3488 4488</p>
				</div>
				<div className='address'>
					<h3>QATAR</h3>
					<p>Doha, Qatar</p>
					<p>Po Box - 9044</p>
					<p>Phone: +974 7743 4488</p>
					<p>Email: info@akodscaffolding.com</p>
				</div>
			</div>
			<div className='contactForm'>
				<h2>Get in Touch</h2>
				<form>
					<input type='text' placeholder='Name' required />
					<input type='email' placeholder='Email' required />
					<input type='tel' placeholder='Mobile Number' required />
					<input type='text' placeholder='City Code' required />
					<textarea placeholder='Message' rows='4' required />
					<button type='submit'>Submit</button>
				</form>
			</div>
		</section>
	);
};

export default ContactSection;
