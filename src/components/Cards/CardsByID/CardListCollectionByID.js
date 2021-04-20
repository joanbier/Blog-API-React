import React from "react";
import CardID from "../CardsByID/CardID";

function CardsListCollectionByID(props) {
  return (
    props.data.length !== 0 &&
    props.data.map((item, index) => (
      <CardID
        id={item.id}
        key={`Categories-${Date.now().toString(32)}-${index}`}
        img={item.urls.small}
        alt={item.alt_description}
        content={item.description}
        likes={item.likes}
        date={item.created_at}
        download={item.links.html}
        bigImg={item.urls.regular}
        authorName={item.user.name}
        avatar={item.user.profile_image.large}
        nick={item.user.username}
        bio={item.user.bio}
        portfolio={item.user.portfolio_url}
        location={item.user.location}
      />
    ))
  );
}

export default CardsListCollectionByID;
