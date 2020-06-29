import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import Clock from "./Clock";
import { Typography } from "antd";

const photos1 = [
  {
    name: "photo 1",
    url:
      "https://images.unsplash.com/photo-1592279485490-29d5e35cba3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "photo 2",
    url:
      "https://images.unsplash.com/photo-1592268594767-ead5c74ee773?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "photo 3",
    url:
      "https://images.unsplash.com/photo-1592231168067-09b6899f87c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
  },
];
class Carousel2 extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 50,
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
        <Typography>Carosusel 2...</Typography>

        <Slider {...settings}>
          {photos1.map((photos1) => {
            return (
              <div>
                <img width="60%" height="40%" src={photos1.url} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
export default Carousel2;
