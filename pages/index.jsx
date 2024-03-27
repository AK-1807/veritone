// import { setOutgoingHeaders } from '@pantheon-systems/wordpress-kit';
// import { NextSeo } from 'next-seo';
// import Image from 'next/image';
// import { PostGrid } from '../components/grid';
import Layout from '../components/layout';
// import { getFooterMenu } from '../lib/Menus';
// import { getLatestPosts } from '../lib/Posts';
// import styles from './index.module.css';
// import Button from '../components/button/Button';
import HeroBanner from '../components/HeroBanner';
import IntroWithLogo from '../components/IntroWithLogo';
import TwoColumnText from '../components/TwoColumnText';
import Tabs from '../components/Tabs';
import Footercta from '../components/Footercta';
import TwitterSlider from '../components/TwitterSlider';
import FullWidthContent from '../components/FullWidthContent';

const heroData = {
	imgpath: '',
	alt: 'Banner image',
	video_url: '/images/banner_video.mp4',
	heroTitle: 'Enterprise AI that makes people superhuman.',
	bg: 'bg-cosmos',
	heroBlurb:
		'We’re the leading enterprise AI software, applications, and services provider on a mission – advancing AI to empower people to be even better.',
};

const introWithLogo = {
	title: 'Empowering industries starts with empowering people.',
	bg: 'bg-white',
	blurb:
		'From finding the clue that solves the case to generating millions with content, hiring the best people to super powering your teams for even more success, welcome to AI that makes you even better.',
	logo: [
		{
			imgpath: 'images/amazon.svg',
			alt: 'Amazon',
		},
		{
			imgpath: 'images/epa.svg',
			alt: 'EPA',
		},
		{
			imgpath: 'images/cnn.svg',
			alt: 'CNN',
		},
		{
			imgpath: 'images/verizon.svg',
			alt: 'Verizon',
		},
		{
			imgpath: 'images/san-francisco-giants.svg',
			alt: 'San francisco giants',
		},
	],
};

const tabs = {
	tab: [
		{
			tab_heading: 'Media + Entertainment',
		},
		{
			tab_heading: 'Public Sector',
		},
		{
			tab_heading: 'Hire',
		},
		{
			tab_heading: 'Other industries',
		},
	],
	tab_content: [
		{
			tab_title: 'Unlock the power of your content.',
			blurb:
				'Go from endless searching and editing to automating and monetizing with AI that works with your teams like never before. From automated content management and distribution, to generative and monetization, we’ll help free up your creators to think bigger – and create new revenue streams, too.',
			btntext: 'More about media',
			btnlink: '/',
			imgpath: '/images/boys.png',
			alt: 'Boys Image',
			imgpath2: '/images/tab-image.png',
			alt2: 'Tab Image',
			imgpath3: '/images/play.png',
			alt3: 'Tab Image',
			logo: '/images/client-logos.svg',
			logo_alt: 'Client Logos',
			inner_title: 'LA Chargers',
			inner_blurb:
				'Transforming 371 days of metadata work into hours - with AI.',
			tag1: 'ASSET MANAGEMENT',
			tag2: 'COST REDUCTION',
			bg: 'bg-ember',
			btnClass: 'btn-black',
			bottom_btn_text: 'Learn More',
			bottom_btn_url: '/',
			bottom_link_text: 'View case studies',
			bottom_link_url: '/',
		},
		{
			tab_title: 'Less taskwork, more time to serve.',
			blurb:
				'Save time with evidence footage and give your force the backup they need – so they can be in the field where they belong. Enterprise AI helps you save hundreds of hours so they can keep working the case and make communities safe.',
			btntext: 'More about Public Sector',
			btnlink: '/',
			imgpath: '/images/boy-dog.png',
			alt: 'Boy Dog',
			imgpath2: '/images/counrty-flags.png',
			alt2: 'Counrty Flags',
			imgpath3: '/images/police-car.png',
			alt3: 'Police Car',
			logo: '/images/police-logo.png',
			logo_alt: 'Police Logos',
			inner_title: 'Pasadena Police Department',
			inner_blurb: 'Explore how Veritone Redact saves time and resources, while increasing public transparency.',
			tag1: 'PUBLIC SAFETY',
			tag2: 'PRODUCTIVITY',
			bg: 'bg-purple',
			btnClass: 'btn-black',
			bottom_btn_text: 'Learn More',
			bottom_btn_url: '/',
			bottom_link_text: 'View case studies',
			bottom_link_url: '/',
		},
		{
			tab_title: 'SuperHuman Resources start here.',
			blurb: 'Your talent acquisition team is great, but with the right tools, they could be even better. We’ll help you optimize your ad spends and hiring workflows so you can find the perfect talent even faster. It’s hiring like you’ve never seen it before. (You’re welcome.)',
			btntext: 'More about Hire',
			btnlink: '/',
			imgpath: '/images/women.png',
			alt: 'Women Image',
			imgpath2: '/images/hire-2.png',
			alt2: 'Hire Image',
			imgpath3: '/images/pizza.png',
			alt3: 'Pizza Image',
			logo: '/images/domino-logo.svg',
			logo_alt: 'Domino Logos',
			inner_title: 'Dominos',
			inner_blurb:
				'How the global pizza leader increased their talent pipeline while reducing their costs.',
			tag1: 'RETAIL',
			tag2: 'TALENT ACQUISITION',
			bg: 'bg-riptide-web',
			btnClass: 'btn-black',
			bottom_btn_text: 'Learn More',
			bottom_btn_url: '/',
			bottom_link_text: 'View case studies',
			bottom_link_url: '/',
		},
		{
			tab_title: 'Lorem ipsum dolor sit amet, consectetur.',
			blurb:
				'Suspendisse sit amet tellus pretium, euismod dolor eget, euismod orci. Nullam vehicula elit ac mi varius, sed dictum massa fermentum. Quisque egestas risus felis, sed ultrices velit finibus porttitor. Nullam at arcu lorem. Nam vitae sem.',
			btntext: 'Lorem ipsum',
			btnlink: '/',
			imgpath: '/images/boys.png',
			alt: 'Boys Image',
			imgpath2: '/images/tab-image.png',
			alt2: 'Tab Image',
			imgpath3: '/images/play.png',
			alt3: 'Tab Image',
			logo: '/images/client-logos.svg',
			logo_alt: 'Client Logos',
			inner_title: 'Praesent eleifend',
			inner_blurb:
				'Suspendisse sit amet tellus pretium, euismod dolor eget, euismod orci.',
			tag1: 'ultrices',
			tag2: 'Tconubia nostra',
			bg: 'bg-cosmos',
			btnClass: 'default',
			bottom_btn_text: 'Lorem ipsum',
			bottom_btn_url: '/',
			bottom_link_text: 'Lorem ipsum dolor sit',
			bottom_link_url: '/',
		},
	],
};

const twoColumnText = {
	col: [
		{
			imgpath: 'images/share.svg',
			alt: 'Share',
			colTitle: 'aiWARE. <br> The OS for AI.',
			colBlurb:
				'Our aiWARE platform is customizable, giving you what you need, the way that you need it. That’s how we’ve helped some of the world’s biggest brands turn data into intelligence into the ultimate efficiency – and that’s just the beginning.',
			btnText: 'Learn more',
		},
		{
			imgpath: 'images/star.svg',
			alt: 'Star',
			colTitle: 'AI for good.',
			colBlurb:
				'We see a world where AI helps people achieve greater potential than ever before – but with responsibility. That’s why we have a set of principles that guide every every decision we make, making sure our technology isn’t just AI, it’s AI for good.',
			btnText: 'Read our philosophy',
		},
	],
};

const twitterSliderData = [
	{
		imageSrc: '/images/slider_card_a.png',
		imageName: 'slider_card_a',
		desc: 'This is an authentic yet curated post from social media that Veritone has chosen to include in the live feed.',
		client: 'Veritone, Digital Strategy',
		clientImage: '/images/slider_card_a.png',
		userName: '@veritone_inc',
		url: '',
		comments: 12,
		refresh: 356,
		likes: '1.1k',
		share: 12,
		categories: ["veritone", "Digital Strategy"],
	},
	{
		imageSrc: '/images/slider_card_b.png',
		imageName: 'slider_card_b',
		desc: 'This is an authentic yet curated post from social media that Veritone has chosen to include in the live feed.',
		client: 'Veritone, Digital Strategy',
		clientImage: '/images/slider_card_a.png',
		userName: '@veritone_inc',
		url: '',
		comments: 12,
		refresh: 356,
		likes: '1.1k',
		share: 12,
		categories: ["veritone", "Digital Strategy"],
	},
	{
		imageSrc: '/images/slider_card_a.png',
		imageName: 'slider_card_a',
		desc: 'This is an authentic yet curated post from social media that Veritone has chosen to include in the live feed.',
		client: 'Veritone, Digital Strategy',
		clientImage: '/images/slider_card_a.png',
		userName: '@veritone_inc',
		url: '',
		comments: 12,
		refresh: 356,
		likes: '1.1k',
		share: 12,
		categories: ["veritone", "Digital Strategy"],
	},
	{
		imageSrc: '/images/slider_card_b.png',
		imageName: 'slider_card_b',
		desc: 'This is an authentic yet curated post from social media that Veritone has chosen to include in the live feed.',
		client: 'Veritone, Digital Strategy',
		clientImage: '/images/slider_card_a.png',
		userName: '@veritone_inc',
		url: '',
		comments: 12,
		refresh: 356,
		likes: '1.1k',
		share: 12,
		categories: ["veritone", "Digital Strategy"],
	},
	{
		imageSrc: '/images/slider_card_c.png',
		imageName: 'slider_card_c',
		desc: 'This is an authentic yet curated post from social media that Veritone has chosen to include in the live feed.',
		client: 'Digital Strategy,',
		clientImage: '/images/slider_card_a.png',
		userName: '@veritone_inc',
		url: '',
		comments: 12,
		refresh: 356,
		likes: '1.1k',
		share: 12,
		categories: ["Digital Strategy"],
	},
	{
		imageSrc: '/images/slider_card_a.png',
		imageName: 'slider_card_a',
		desc: 'This is an authentic yet curated post from social media that Veritone has chosen to include in the live feed.',
		client: 'Digital Strategy,',
		clientImage: '/images/slider_card_a.png',
		userName: '@veritone_inc',
		url: '',
		comments: 12,
		refresh: 356,
		likes: '1.1k',
		share: 12,
		categories: ["Digital Strategy"],
	},
	{
		imageSrc: '/images/slider_card_b.png',
		imageName: 'slider_card_b',
		desc: 'This is an authentic yet curated post from social media that Veritone has chosen to include in the live feed.',
		client: 'Digital Strategy,',
		clientImage: '/images/slider_card_a.png',
		userName: '@veritone_inc',
		url: '',
		comments: 12,
		refresh: 356,
		likes: '1.1k',
		share: 12,
		categories: ["Digital Strategy"],
	},
	{
		imageSrc: '/images/slider_card_c.png',
		imageName: 'slider_card_c',
		desc: 'This is an authentic yet curated post from social media that Veritone has chosen to include in the live feed.',
		client: 'Veritone, Digital Strategy',
		clientImage: '/images/slider_card_a.png',
		userName: '@veritone_inc',
		url: '',
		comments: 12,
		refresh: 356,
		likes: '1.1k',
		share: 12,
		categories: ["veritone", "Digital Strategy"],
	},
	{
		imageSrc: '/images/slider_card_a.png',
		imageName: 'slider_card_a',
		desc: 'This is an authentic yet curated post from social media that Veritone has chosen to include in the live feed.',
		client: 'Digital Strategy,',
		clientImage: '/images/slider_card_a.png',
		userName: '@veritone_inc',
		url: '',
		comments: 12,
		refresh: 356,
		likes: '1.1k',
		share: 12,
		categories: ["Digital Strategy"],
	},
	{
		imageSrc: '/images/slider_card_b.png',
		imageName: 'slider_card_b',
		desc: 'This is an authentic yet curated post from social media that Veritone has chosen to include in the live feed.',
		client: 'Digital Strategy,',
		clientImage: '/images/slider_card_a.png',
		userName: '@veritone_inc',
		url: '',
		comments: 12,
		refresh: 356,
		likes: '1.1k',
		share: 12,
		categories: ["Digital Strategy"],
	},
	{
		imageSrc: '/images/slider_card_c.png',
		imageName: 'slider_card_c',
		desc: 'This is an authentic yet curated post from social media that Veritone has chosen to include in the live feed.',
		client: 'Veritone, Digital Strategy',
		clientImage: '/images/slider_card_a.png',
		userName: '@veritone_inc',
		url: '',
		comments: 12,
		refresh: 356,
		likes: '1.1k',
		share: 12,
		categories: ["veritone", "Digital Strategy"],
	},
];

const fullWidthContent = {
	col: {
		frontimgpath: '/images/people.png',
		backimgpath: '/images/server.png',
		alt: 'Server',
		colTitle: 'Your AI, built for you.',
		colBlurb:
			'From discovery to design, development to deployment, we’re here to help you build, implement, and run your enterprise AI, too. Want an end-user application for data and insights? Need help designing workflow?Our team will get to know your goals and create a customized solution for AI the way you want it.',
		btnText: 'Let’s get started',
	},
};

const Home = () => {
	return (
		<>
			<HeroBanner {...heroData} />
			<IntroWithLogo {...introWithLogo} />
			<Tabs {...tabs} />
			<FullWidthContent {...fullWidthContent} />
			<TwoColumnText {...twoColumnText} />
			<TwitterSlider data={twitterSliderData} onlyInternalPosts={true} />
			<Footercta />
		</>
	);
};

export default Home;
