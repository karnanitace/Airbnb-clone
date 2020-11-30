import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Search from "./Search";

import { useHistory } from "react-router-dom";

const Banner = () => {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner-search">
        {showSearch && <Search />}
        <Button
          variant="outlined"
          className="banner-searchBtn"
          onClick={() => setShowSearch(!showSearch)}
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>

      <div className="banner-info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of gateway to uncover the hidden gem near you.
        </h5>
        <Button onClick={() => history.push("/search")} variant="outlined">
          Explore Nearby
        </Button>
      </div>
    </div>
  );
};

export default Banner;
