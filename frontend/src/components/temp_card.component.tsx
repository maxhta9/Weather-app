import React, { useState } from "react";
import { getWeatherData } from "../api/apiCallout";
import { WEA } from "../interface/WEA";
import SearchBar from "./search_bar.component";

interface TemperatureCardProps {
  location: string;
  setLocation: (newLocation: string) => void;
}

class TemperatureCard extends React.Component<
  TemperatureCardProps,
  WEA.WeatherData
> {
  onSearchClick = (searchInput: string) => {
    this.props.setLocation(searchInput);
  };

  onUpdate = (searchLocation: string) => {
    getWeatherData(searchLocation)
      .then((data) => {
        if (data) {
          this.setState(data);
        }
      })
      .catch((e) => {
        console.log("Error: " + e);
      });
  };

  componentDidMount(): void {
    this.onUpdate(this.props.location);
  }

  componentDidUpdate(
    prevProps: TemperatureCardProps
  ): void {
    if (prevProps.location !== this.props.location) {
      this.onUpdate(this.props.location);
      console.log("Update:" + this.props.location);
    }
  }

  render(): React.ReactNode {
    return (
      <div id="Card" className="w-5/12 h-3/6 rounded-xl p-4">
        <SearchBar onSearchClick={this.onSearchClick} />
        <div id="DisplayBox" className="flex flex-col items-center mt-10 gap-4">
          <div id="LocationDisplayed" className="text-5xl font-thin">
            {this.state ? this.state.location.name : "-"}
          </div>
          <div id="TemperatureDisplayed" className="text-9xl font-thin">
            {this.state ? this.state.current.temp_c : "-"}°
          </div>
        </div>
      </div>
    );
  }
}

export default TemperatureCard;
