import React from "react";
import CardContainer from "../components/Cards/CardsContainer";

export default function Home(props) {
  return (
    <div className="home">
      <h2>My Blog</h2>
      <p>Welcome on my website!</p>
      <p className="home-description">
        Here you can choose a title that you find interesting clicking on it.
        Then you will see more similar photos. If you would like to enlarge the
        image, see more information about author, download the photo or share
        picture on Facebook, just click on it &#128247;
      </p>
      <CardContainer />
    </div>
  );
}
