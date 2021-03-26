import 'normalize.css';
import 'styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

    return (
        <div id="root">
            <Head>
                <title>Diego Cabanillas</title>
                <link rel="icon" href="/logo.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>  
            <Component {...pageProps} />
        </div>
    ) 
}

export default MyApp;
