import '../styles/globals.css';
import '../components/button/button.css';
import '../styles/checkboxSwitch.css'

import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
	
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
			
	)
	
	
}

export default MyApp;
