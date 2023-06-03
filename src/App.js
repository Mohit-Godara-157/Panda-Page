import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import First from "./components/First";
import Second from "./components/Second";
import PreLoader from "./components/PreLoader";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      delay: 100,
    });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/Second" element={<Second />} />
      </Routes>
      <PreLoader />
    </>
  );
}

export default App;
