import React from "react";
import Banner from "./Banner";
import Card from "./Card";

const Home = () => {
  return (
    <div className="home">
      <Banner />

      <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique Stays"
          desc="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/8e3d5167-55ca-4fbd-832d-e3b66dad54ec.jpg?im_w=720"
          title="Online Experiences"
          desc="A new way to travel from home."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire Home"
          desc="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home_section">
        <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom  Flat in Bournemoth"
          desc="Superhost with a stunning view of the beachside in Sunny Bournmouth"
          price="$130 / night"
        />
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08//Courtesy-of-Airbnb.jpg"
          title="Penthouse in London"
          desc="Enjoy the amazing sights of London with this stunning penthouse"
          price="$350 / night"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom Apartment"
          desc="Superhost with great amenities and a fabolous shopping complex nearby"
          price="$70 / night"
        />
      </div>
    </div>
  );
};

export default Home;
