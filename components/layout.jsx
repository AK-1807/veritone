// import { Footer, Header, PreviewRibbon } from '@pantheon-systems/nextjs-kit';
// import styles from './layout.module.css';
import Header from './header/Header'
import Footer from './Footer/Footer';
export default function Layout({ children }) {
	


	return (
			<main className="mb-auto">
				<Header/>
				{children}
				<Footer/>
			</main>
			
	);
}
