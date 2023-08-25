import "@/styles/globals.css";
import "swiper/swiper-bundle.min.css";
import "../styles/index.css";

import SwiperCore, { Pagination, Navigation, EffectCoverflow } from "swiper";
import Head from "next/head";
SwiperCore.use([Pagination, Navigation, EffectCoverflow]);

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="O Desenvolvedor Backend que falta na sua empresa!"
        />
        <link rel="icon" href="/favicon.png" />
        <title>André - Portfolio</title>;
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default App;
