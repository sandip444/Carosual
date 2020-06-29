import React, { Component } from "react";
import Clock from "react-live-clock";
import { Switch } from "antd";
import moment from "moment";
import "./Clock.css";
export default class Time extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todayDate: false,
    };
  }
  toggleSwitch = () => {
    this.setState({
      todayDate: !this.state.todayDate,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="navbar">
          React clock
          <Switch onClick={this.toggleSwitch} className="toggle" />
        </div>
        <div className="time">
          <Clock format={"h:mm:ss a"} ticking={true} timezone={"IST"} />
        </div>
        <div className="toggleDate">
          {this.state.todayDate ? moment().format("MMMM DD YYYY") : ""}
        </div>
      </div>
    );
  }
}
