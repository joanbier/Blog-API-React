import React from "react";
import CardHeader from "../CardHeader";
import CardBody from "../CardBody";
import CardFooter from "../CardFooter";
function Card(props) {
  const {
    id,
    img,
    alt,
    bigImg,
    content,
    likes,
    date,
    download,
    authorName,
    avatar,
    nick,
    bio,
    portfolio,
    location
  } = props;
  return (
    <article className="Card">
      <CardHeader
        id={id}
        bigImg={bigImg}
        src={img}
        alt={alt}
        download={download}
        authorName={authorName}
        avatar={avatar}
        nick={nick}
        bio={bio}
        portfolio={portfolio}
        location={location}
      />
      <CardBody
        content={
          content
            ? content
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        }
      />
      <CardFooter likes={likes} date={date} />
    </article>
  );
}

export default Card;
