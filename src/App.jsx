import { useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import NumberTicker from "./components/NumberTicker";
import About from "./components/AboutUs";
import RecentWorks from "./components/RecentProjects";
import InfiniteScroll from "./components/InfiniteScroll";
import FAQ from "./components/faq";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <NumberTicker />
      <About />
      <RecentWorks />
      <InfiniteScroll />
      <FAQ />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
