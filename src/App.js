import "./styles.css";
import Query from "./components/Query";
import About from "./components/About";
import Students from "./components/Students";
import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/Footer";
import MyCard from "./components/MyCard";
import Slider from "./components/Slider";
import Courses from "./components/Courses";
import LandingImage from "./components/LandingImage";
import Icons from "./components/Icons";
import Events from "./components/Events";
import About1 from "./pages/About/cmp/About1";

export default function App() {
  const cards = [
    {
      title: "Card 1",
      description: "This is the first card",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Card 2",
      description: "This is the second card",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Card 3",
      description: "This is the third card",
      image: "https://via.placeholder.com/300x200",
    },
  ];
  return (
    <>
      {/* <CustomNavbar />
      <LandingImage />
      <Icons />
      <About />
      <Courses />
      <Slider />
      <MyCard />
      <Students />
      <Events />
      <Footer cards={cards} /> */}
      <CustomNavbar />
      <About1 />
      <Footer cards={cards} />
    </>
  );
}
