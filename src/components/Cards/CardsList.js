import React from "react";
import Card from "./Card";

function CardsList(props) {
  return (
    props.data.length !== 0 &&
    props.data.map((item, index) => (
      <Card
        title={item.title}
        id={item.id}
        key={`Categories-${Date.now().toString(32)}-${index}`}
        img={item.preview_photos[0].urls.small}
        bigImg={item.preview_photos[0].urls.regular}
        name={item.user.name}
        alt={item.cover_photo.alt_description}
        content={item.description}
        likes={item.cover_photo.likes}
        date={item.published_at}
        download={item.cover_photo.links.download}
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

export default CardsList;
