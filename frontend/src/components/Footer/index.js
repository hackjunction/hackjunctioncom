import React from 'react'
import './style.scss'

import SocialMediaIcons from '../SocialMediaIcons';
import Divider from '../Divider'

const Footer = () => {
	return (
		<footer className="Footer">
			<div className="FooterInner">
				<div className="FooterInner--left">
					<img className="FooterInner--left__logo" src={require('../../assets/logos/text_black.png')} alt="Junction logo" />
					<p className="FooterInner--left__slogan">We empower people to create with technology.</p>
					<a className="FooterInner--left__contact" href="mailto:hello@hackjunction.com">hello@hackjunction.com</a>
					<Divider sm />
					<SocialMediaIcons
						iconProps={[
							{
								alt: 'LinkedIn',
								imageSrc: require('../../assets/logos/social/linkedin.png'),
								link: 'https://google.com',
							},
							{
								alt: 'Youtube',
								imageSrc: require('../../assets/logos/social/youtube.png'),
								link: 'https://google.com',
							},
							{
								alt: 'Facebook',
								imageSrc: require('../../assets/logos/social/facebook.png'),
								link: 'https://google.com',
							},
							{
								alt: 'Twitter',
								imageSrc: require('../../assets/logos/social/twitter.png'),
								link: 'https://google.com',
							},
							{
								alt: 'Instagram',
								imageSrc: require('../../assets/logos/social/instagram.png'),
								link: 'https://google.com',
							},
							{
								alt: 'Medium',
								imageSrc: require('../../assets/logos/social/linkedin.png'),
								link: 'https://google.com',
							}
						]}
					/>
				</div>
				<div className="FooterInner--separator" />
				<div className="FooterInner--right">
					<div className="FooterInner--right__section">
						<h5 className="FooterInner--right__section-title">Concepts</h5>
						<a className="FooterInner--right__section-link" href="#">Junction 2019</a>
						<a className="FooterInner--right__section-link" href="#">Hel Tech</a>
						<a className="FooterInner--right__section-link" href="#">Hack Talks</a>
						<a className="FooterInner--right__section-link" href="#">JunctionX</a>
						<a className="FooterInner--right__section-link" href="#">Hack Tour</a>
						<a className="FooterInner--right__section-link" href="#">Tech Race</a>
					</div>
					<div className="FooterInner--right__section">
						<h5 className="FooterInner--right__section-title">Community</h5>
						<a className="FooterInner--right__section-link" href="#">For partners</a>
						<a className="FooterInner--right__section-link" href="#">For participants</a>
						<a className="FooterInner--right__section-link" href="#">For volunteers</a>
						<a className="FooterInner--right__section-link" href="#">For organisers</a>
					</div>
					<div className="FooterInner--right__section">
						<h5 className="FooterInner--right__section-title">Press Kit</h5>
						<h5 className="FooterInner--right__section-title">Photo Gallery</h5>
						<h5 className="FooterInner--right__section-title">Legal</h5>
						<a className="FooterInner--right__section-link" href="#">Privacy Policy</a>
						<a className="FooterInner--right__section-link" href="#">Terms & Conditions</a>
						<a className="FooterInner--right__section-link" href="#">MLH Code of Conduct</a>
					</div>
				</div>
			</div>
			<div className="FooterBottom">
				<span className="FooterBottom--text">Designed and developed with <span role="img" aria-label="love">💕</span> & <span role="img" aria-label="coffee">☕</span> by the amazing Junction Team.</span>
			</div>
		</footer>
	)
}

export default Footer