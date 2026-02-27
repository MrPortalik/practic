// import styles from "";

import Script from "next/script.js";

import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import Gallery from "./components/Gallery.js";
import Scroll from "./components/Scroll.js";
import Slider from "./components/Slider.js";
import Observed from "./components/Observed.js";
import FAQ from "./components/FAQ.js";
import Footer from "./components/Footer.js";
import Form from "./components/Form.js";

// import Header from "/src/app/components/Header.js";
// import Hero from "/src/app/components/Hero.js";
// import Gallery from "/src/app/components/Gallery.js";
// import Scroll from "/src/app/components/Scroll.js";
// import Slider from "/src/app/components/Slider.js";
// import Observed from "/src/app/components/Observed.js";
// import Footer from "/src/app/components/Footer.js";
// import Form from "/src/app/components/Form.js";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Scroll />
      <Gallery />
      <Slider />
      <Observed />
      <FAQ />
      <Footer />
      <Form />
      <div className="loader" id="loader">
          <img src="/images/loader.webp" alt="Загрузка..." data-animation="spin_step8"/>
        </div>

        <script
        src="/main.js"
        type="module"
        strategy="afterInteractive"/>
    </div>
  );
}
