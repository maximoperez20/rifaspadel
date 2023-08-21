import logo from "./logo.svg";
import "./App.css";
import NumberGrid from "./components/NumberGrid";

import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Content from "./components/Layout/Content/Content";

//React Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Bootstrap Import
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
