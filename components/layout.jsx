// import { Footer, Header, PreviewRibbon } from '@pantheon-systems/nextjs-kit';
// import styles from './layout.module.css';
import Header from './header/Header'
import Footer from './Footer/Footer';
export default function Layout({ children }) {
	


	return (
		<>
			<Header/>
				<main className="mb-auto">
					{children}
				</main>
			<Footer/>
		</>
	);
}
