import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { useEffect, useRef, useState } from "react";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import AbboutComponent from "@/components/AbboutComponent/AbboutComponent";
import ExperienceComponent from "@/components/ExperienceComponent/ExperienceComponent";
import ContactComponent from "@/components/ContactComponent/ContactComponent";
import ProjectsComponent from "@/components/ProjectsComponent/ProjectsComponent";
import MenuComponent from "@/components/MenuComponent/MenuComponent";

import { AnimatePresence, motion } from "framer-motion";

const headerVariants = {
  initial: { opacity: 0, x: "-100%" },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "-100%" },
};

export default function Home() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      const deltaY = e.deltaY;
      const swiper = swiperRef.current?.swiper;
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

  function goToIndex(index) {
    const swiper = swiperRef.current?.swiper;
    swiper?.updateActiveIndex(index);
    swiper?.slideTo(index, 700);
    setActiveIndex(index);
  }

  useEffect(() => {
    setActiveIndex(swiperRef?.current?.swiper.activeIndex);
  }, [swiperRef?.current?.swiper.activeIndex]);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;

    swiper.on("slideChangeTransitionStart", () => {
      setIsAnimating(true);
    });

    swiper.on("slideChangeTransitionEnd", () => {
      setIsAnimating(false);
    });

    return () => {
      swiper.off("slideChangeTransitionStart");
      swiper.off("slideChangeTransitionEnd");
    };
  }, []);

  return (
    <>
      <MenuComponent activeIndex={activeIndex} goToIndex={goToIndex} />
      <Swiper
        ref={swiperRef}
        direction="vertical"
        slidesPerView={1}
        allowTouchMove={true}
        mousewheel={{
          forceToAxis: true,
          thresholdDelta: 10,
        }}
        pagination={{ clickable: true, bulletActiveClass: "active-bullet" }}
        style={{ height: "100vh" }}
      >
        <SwiperSlide>
          <div style={{ position: "relative", height: "100%" }}>
            <AnimatePresence initial={true}>
              {activeIndex === 0 && (
                <motion.div
                  key={0}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={headerVariants}
                  transition={{ duration: 1.4 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: activeIndex === 0 ? 1 : -1,
                  }}
                >
                  <HeaderComponent activeIndex={activeIndex} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ position: "relative", height: "100%" }}>
            <AnimatePresence initial={false}>
              {activeIndex === 1 && (
                <motion.div
                  key={0}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={headerVariants}
                  transition={{ duration: 1.4 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: activeIndex === 1 ? 1 : -1,
                  }}
                >
                  <AbboutComponent />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ position: "relative", height: "100%" }}>
            <AnimatePresence initial={false}>
              {activeIndex === 2 && (
                <motion.div
                  key={0}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={headerVariants}
                  transition={{ duration: 1.4 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: activeIndex === 2 ? 1 : -1,
                  }}
                >
                  <ExperienceComponent />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>
          <div style={{ position: "relative", height: "100%" }}>
            <AnimatePresence initial={false}>
              {activeIndex === 3 && (
                <motion.div
                  key={0}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={headerVariants}
                  transition={{ duration: 1.4 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: activeIndex === 3 ? 1 : -1,
                  }}
                >
                  <ProjectsComponent />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </SwiperSlide> */}

        <SwiperSlide>
          <div style={{ position: "relative", height: "100%" }}>
            <AnimatePresence initial={false}>
              {activeIndex === 3 && (
                <motion.div
                  key={0}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={headerVariants}
                  transition={{ duration: 1.4 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: activeIndex === 3 ? 1 : -1,
                  }}
                >
                  <ContactComponent />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
