<<<<<<< HEAD
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
=======
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <h1>To get started, edit the page.js file.</h1>
          <p>
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className={styles.secondary}
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
>>>>>>> 519c352 (Initial commit from Create Next App)
    </div>
  );
}
