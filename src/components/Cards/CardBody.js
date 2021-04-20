import React from "react";
function CardBody(props) {
  return (
    <div className="Card-content">
      <p>{props.content}</p>
    </div>
  );
}

export default CardBody;
