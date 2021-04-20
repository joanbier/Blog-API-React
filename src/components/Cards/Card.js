import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

function Card(props) {
  return (
    <article className="Card">
      <CardHeader
        id={props.id}
        bigImg={props.bigImg}
        src={props.img}
        alt={props.alt}
        title={props.title}
        download={props.download}
        authorName={props.authorName}
        avatar={props.avatar}
        nick={props.nick}
        bio={props.bio}
        portfolio={props.portfolio}
        location={props.location}
      />
      <CardBody
        content={
          props.content
            ? props.content
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        }
      />
      <CardFooter likes={props.likes} date={props.date} />
    </article>
  );
}

export default Card;
