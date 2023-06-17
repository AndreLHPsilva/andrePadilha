import '@/styles/globals.css'
import "swiper/swiper-bundle.min.css";
import '../styles/index.css'

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, EffectCoverflow } from "swiper";

SwiperCore.use([Pagination, Navigation, EffectCoverflow]);

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;

