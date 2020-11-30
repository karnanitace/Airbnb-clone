import React from "react";
import FavouriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

const SearchResult = ({ img, location, title, desc, star, price, total }) => {
  return (
    <div className="search-result">
      <img src={img} alt="" />
      <FavouriteBorderIcon className="search-heart" />
      <div className="serchResult-info">
        <div className="searchResult-infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{desc}</p>
        </div>
        <div className="searchResult-infoBottom">
          <div className="search_starIcon">
            <StarIcon className="search-star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="search-price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
