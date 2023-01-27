import React from "react";
import CloudSVG from "../assets/svg/cloud.svg";
import SearchSVG from "../assets/svg/search.svg";

interface SearchProps {
  onSearchClick: (searchInput: string) => void;
}

interface SearchState {
  name: string;
}

class SearchBar extends React.Component<SearchProps, SearchState> {
  render(): React.ReactNode {
    return (
      <>
        <div id="DisplayBox" className="flex flex-col items-center mb-5">
          <div id="LocationPrompt" className="text-3xl text-gray-500 font-thin">
            Search a location...
          </div>
        </div>
        <div className="flex">
          <input
            id="search_input"
            className="rounded-l-xl w-full outline-0 p-2"
            onChange={(e) => {
              this.setState({ ...this.state, name: e.target.value });
            }}
            type="text"
          />
          <div
            id="SearchSVG"
            className="rounded-r-xl bg-white hover:bg-gray-100 p-2 cursor-pointer"
            onClick={() => this.props.onSearchClick(this.state.name)}
          >
            <SearchSVG classname="fill-current h-6" title={false} />
          </div>
        </div>
      </>
    );
  }
}

export default SearchBar;
