
import HeroBanner from '../components/HeroBanner';
import IntroWithLogo from '../components/IntroWithLogo';
import TwoColumnText from '../components/TwoColumnText';
import Tabs from '../components/Tabs';
import Footercta from '../components/Footercta';
import TwitterSlider from '../components/TwitterSlider';
import FullWidthContent from '../components/FullWidthContent';

const heroData = {
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

const tabGrid = {
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
      btnClass: 'primary',
    },
    {
      tab_title: 'Unlock the power of your content. 2',
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
      bg: 'bg-purple',
      btnClass: 'primary',
    },
    {
      tab_title: 'Unlock the power of your content. 3',
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
      bg: 'bg-riptide-web',
      btnClass: 'primary',
    },
    {
      tab_title: 'Unlock the powerof your content. 4',
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
      bg: 'bg-cosmos',
      btnClass: 'default',
    },
  ],
};




const twoColumnText = {
	col: [
		{
			imgpath: 'images/share.svg',
			alt: 'Share',
			colTitle: 'aiWARE.The OS for AI.',
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
		client: 'Veritone,',
		clientImage: '/images/slider_card_a.png',
		userName: '@veritone_inc',
		url: '',
		comments: 12,
		refresh: 356,
		likes: '1.1k',
		share: 12,
	},
	{
		imageSrc: '/images/slider_card_b.png',
		imageName: 'slider_card_b',
		desc: 'This is an authentic yet curated post from social media that Veritone has chosen to include in the live feed.',
		client: 'Veritone,',
		clientImage: '/images/slider_card_a.png',
		userName: '@veritone_inc',
		url: '',
		comments: 12,
		refresh: 356,
		likes: '1.1k',
		share: 12,
	},
	{
		imageSrc: '/images/slider_card_c.png',
		imageName: 'slider_card_c',
		desc: 'This is an authentic yet curated post from social media that Veritone has chosen to include in the live feed.',
		client: 'Veritone,',
		clientImage: '/images/slider_card_a.png',
		userName: '@veritone_inc',
		url: '',
		comments: 12,
		refresh: 356,
		likes: '1.1k',
		share: 12,
	},
	{
		imageSrc: '/images/slider_card_a.png',
		imageName: 'slider_card_a',
		desc: 'This is an authentic yet curated post from social media that Veritone has chosen to include in the live feed.',
		client: 'Veritone,',
		clientImage: '/images/slider_card_a.png',
		userName: '@veritone_inc',
		url: '',
		comments: 12,
		refresh: 356,
		likes: '1.1k',
		share: 12,
	},
	{
		imageSrc: '/images/slider_card_b.png',
		imageName: 'slider_card_b',
		desc: 'This is an authentic yet curated post from social media that Veritone has chosen to include in the live feed.',
		client: 'Veritone,',
		clientImage: '/images/slider_card_a.png',
		userName: '@veritone_inc',
		url: '',
		comments: 12,
		refresh: 356,
		likes: '1.1k',
		share: 12,
	},
	{
		imageSrc: '/images/slider_card_c.png',
		imageName: 'slider_card_c',
		desc: 'This is an authentic yet curated post from social media that Veritone has chosen to include in the live feed.',
		client: 'Veritone,',
		clientImage: '/images/slider_card_a.png',
		userName: '@veritone_inc',
		url: '',
		comments: 12,
		refresh: 356,
		likes: '1.1k',
		share: 12,
	},
];

const fullWidthContent = {
	col: {
		imgpath: 'images/server.png',
		alt: 'Server',
		colTitle: 'Your AI,built for you.',
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
			<Tabs {...tabGrid} />
			<TwoColumnText {...twoColumnText} />
			{/* <FullWidthContent {...fullWidthContent} /> */}
			<TwitterSlider data={twitterSliderData} />
			<Footercta />
		</>
	);
};

export default Home;
