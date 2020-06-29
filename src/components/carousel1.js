import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import { Typography } from "antd";

import Clock from "./Clock";

const photos = [
  {
    name: "photo 1",
    url:
      "https://images.unsplash.com/photo-1592244133126-1d823b3a8b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "photo 2",
    url:
      "https://images.unsplash.com/photo-1592035659284-3b39971c1107?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "photo 3",
    url:
      "https://images.unsplash.com/photo-1592178036777-6cb668714b72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
];

class Carousel1 extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 50,
      autoplay: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "slides",
    };
    return (
      <div className="App">
        <div>
          <Clock />
        </div>
        <Typography>Carosusel 1...</Typography>

        <Slider {...settings}>
          {photos.map((photos) => {
            return (
              <div>
                <img width="60%" height="40%" src={photos.url} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
export default Carousel1;
