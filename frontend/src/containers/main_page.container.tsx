import React, { useState } from "react";
import { getWeatherData } from "../api/apiCallout";
import SearchBar from "../components/search_bar.component";
import TemperatureCard from "../components/temp_card.component";
import { WEA } from "../interface/WEA";

interface MainState {
  location: string;
}

class MainPage extends React.Component<{}, MainState> {
  constructor(props: any) {
    super(props);
    this.state = { location: "" };
  }

  setLocation = (newLocation: string) => {
    this.setState((prevState) => {
      return { ...prevState, location: newLocation };
    });
  };

  render(): React.ReactNode {
    return (
      <>
        <TemperatureCard
          location={this.state ? this.state.location : ""}
          setLocation={this.setLocation}
        />
      </>
    );
  }
}

export default MainPage;
