import React from "react";
import { MDBIcon } from "mdbreact";
function CardFooter(props) {
  return (
    <footer className="Card-footer">
      <div className="likes">
        <MDBIcon icon="thumbs-up" />
        <span> {props.likes}</span>
      </div>
      <p className="date">{props.date ? props.date.slice(0, 10) : null}</p>
    </footer>
  );
}

export default CardFooter;
