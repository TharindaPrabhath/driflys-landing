import { useEffect, useRef } from "react";

// gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Page from "../components/Page";
import LandingLayout from "../layouts/landing.layout";

// components
import ContactUs from "../components/sections/ContactUs";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const homeRef = useRef(null);
  const featuresRef = useRef(null);
  const feature1Ref = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // gsap.fromTo(
    //   "#hero",
    //   { opacity: 0 },
    //   {
    //     opacity: 1,
    //     duration: 1,
    //     scrollTrigger: { trigger: feature1Ref.current },
    //   }
    // );
  }, []);

  return (
    <Page
      title="Driflys"
      meta={
        <>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </>
      }
    >
      <main>
        <Hero />

        <Features />

        <ContactUs />
      </main>
    </Page>
  );
};

Home.layout = LandingLayout;

export default Home;
