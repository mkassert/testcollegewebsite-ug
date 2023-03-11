import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from "react-bootstrap";
const logos = [
  { id: 1, name: "l1", src: "logo1.jpg" },
  { id: 2, name: "l2", src: "l1.png" },
  { id: 2, name: "l2", src: "l2.png" },
  { id: 3, name: "l3", src: "l3.png" },
  { id: 4, name: "l4", src: "l4.png" },
  { id: 5, name: "l5", src: "l5.jpg" },
  { id: 5, name: "l5", src: "l6.png" },

  { id: 6, name: "l5", src: "l7.jpg" },

  { id: 7, name: "l5", src: "l8.png" },

  { id: 8, name: "l5", src: "l9.jpg" },
  { id: 9, name: "l5", src: "l10.jpg" },
  { id: 10, name: "l5", src: "l11.jpg" },
  { id: 11, name: "l5", src: "l12.jpg" },
  { id: 12, name: "l5", src: "l13.jpg" },
  { id: 13, name: "l5", src: "l14.jpg" },
  { id: 14, name: "l5", src: "l15.jpg" },
  { id: 15, name: "l5", src: "l16.jpg" },
  { id: 16, name: "l5", src: "l17.jpg" },
  { id: 17, name: "l5", src: "l18.jpg" },
  { id: 18, name: "l5", src: "l19.jpg" },
  { id: 19, name: "l5", src: "l20.jpg" },
  { id: 20, name: "l5", src: "l21.jpg" },
  { id: 21, name: "l5", src: "l22.jpg" },
  { id: 22, name: "l5", src: "l23.jpg" },
  { id: 23, name: "l5", src: "l24.jpg" },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 1000,
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

class LSlider extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Container className="">
            <Slider {...settings}>
              {logos.map((l) => (
                <div key={l.id}>
                  <img src={l.src} alt={l.name} />
                </div>
              ))}
            </Slider>
          </Container>
        </Container>
      </>
    );
  }
}

export default LSlider;
