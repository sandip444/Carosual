import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Carousel1 from "./components/carousel1";
import Carousel2 from "./components/carousel2";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showc1: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState(
        {
          showc1: false,
        },
        () => {
          setTimeout(() => {
            this.setState({ showc1: true });
          }, 10000);
        }
      );
    }, 10000);
  }

  render() {
    return (
      <div className="App">
        {this.state.showc1 ? <Carousel1 /> : <Carousel2 />}
      </div>
    );
  }
}
export default App;
