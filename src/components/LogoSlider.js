import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from "react-bootstrap";
const logos = [
  { id: 1, name: "logo1", src: "logo1.jpg" },
  { id: 2, name: "logo2", src: "logo1.jpg" },
  { id: 3, name: "logo3", src: "logo1.jpg" },
  { id: 4, name: "logo4", src: "logo1.jpg" },
  { id: 5, name: "logo5", src: "logo1.jpg" },
  { id: 5, name: "logo5", src: "logo1.jpg" },

  { id: 6, name: "logo5", src: "logo1.jpg" },

  { id: 7, name: "logo5", src: "logo1.jpg" },

  { id: 8, name: "logo5", src: "logo1.jpg" },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

class LogoSlider extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Container className="">
            <Slider {...settings}>
              {logos.map((logo) => (
                <div key={logo.id}>
                  <img src={logo.src} alt={logo.name} />
                </div>
              ))}
            </Slider>
          </Container>
        </Container>
      </>
    );
  }
}

export default LogoSlider;
