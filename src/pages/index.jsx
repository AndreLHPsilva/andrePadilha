import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { useEffect, useRef, useState } from "react";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import AbboutComponent from "@/components/AbboutComponent/AbboutComponent";
import ExperienceComponent from "@/components/ExperienceComponent/ExperienceComponent";
import ContactComponent from "@/components/ContactComponent/ContactComponent";
import ProjectsComponent from "@/components/ProjectsComponent/ProjectsComponent";

export default function Home() {
  const swiperRef = useRef(null);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      const deltaY = e.deltaY;
      const swiper = swiperRef.current.swiper;
      const slidesPerView = swiper.params.slidesPerView;
      const slidesLength = swiper.slides.length;
      const activeIndex = swiper.activeIndex;
      
      if (!scrolling) {
        setScrolling(true);

        if (deltaY > 0 && activeIndex < slidesLength - 1) {
          swiper.slideNext(800);
        } else if (deltaY < 0 && activeIndex > 0) {
          swiper.slidePrev(800);
        }

        setTimeout(() => {
          setScrolling(false);
        }, 800);
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [scrolling]);

  return (
    <Swiper
      ref={swiperRef}
      direction="vertical"
      slidesPerView={1}
      allowTouchMove={true}
      mousewheel={{
        forceToAxis: true,
        thresholdDelta: 10,
      }}
      pagination={{ clickable: true, bulletActiveClass: 'active-bullet' }}
      style={{ height: "100vh", backgroundColor: '#000000' }}
    >
      <SwiperSlide>
        <HeaderComponent />
      </SwiperSlide>
      <SwiperSlide>
        <AbboutComponent />
      </SwiperSlide>
      <SwiperSlide>
        <ExperienceComponent />
      </SwiperSlide>
      <SwiperSlide>
        <ProjectsComponent />
      </SwiperSlide>
      <SwiperSlide>
        <ContactComponent />
      </SwiperSlide>
    </Swiper>
  );
}
