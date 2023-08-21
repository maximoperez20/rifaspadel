import React from "react";
import Slider from "react-slick";
import './CarouselHome.css'

const images = [
  {
    urlImage:
      "https://www.zonadepadel.es/blog/wp-content/uploads/2012/11/Principal-Formas-Palas-ES.jpg",
    title: "Image 1",
  },
  {
    urlImage:
      "https://www.infobae.com/new-resizer/khhzUyHKVuS-k4bZ-fS4-fMX4wA=/arc-anglerfish-arc2-prod-infobae/public/NVTGS2IWE5BIJKXM2DNWPKD4ZY.jpg",
    title: "Image 2",
  },
  {
    urlImage:
      "https://www.zonadepadel.es/blog/wp-content/uploads/2023/01/royal-padel-2023.jpg",
    title: "Image 3",
  },
  {
    urlImage:
      "https://www.padelarte.com/img/cms/coleccion%20palas%20padel%20nox%202023%20padelarte.jpg",
    title: "Image 4",
  },
  {
    urlImage:
      "https://www.padelarte.com/blog/wp-content/uploads/2022/11/coleccion-palas-de-padel-nox-2023-padelarte.jpg",
    title: "Image 5",
  },
  {
    urlImage:
      "https://www.padeliberico.es/blog-padeliberico/wp-content/uploads/2016/04/PALAS-DE-PADEL-SIUX.jpg",
    title: "Image 6",
  },
];

console.log(images);

function CarouselHome() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 2000,
    autoplaySpeed: 5000,
    accessibility: true
  };
  return (
    <div>
      <Slider {...settings}>
        {images.map((item, index)=>(

          <img className="img-carousel" key={index} src={item.urlImage} alt={item.title}/>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselHome;
