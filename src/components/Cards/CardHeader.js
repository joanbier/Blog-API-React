import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal";

function CardHeader(props) {
  const {
    id,
    alt,
    src,
    bigImg,
    title,
    // content,
    // likes,
    // date,
    download,
    authorName,
    avatar,
    nick,
    bio,
    portfolio,
    location
  } = props;

  const [modalIsOpen, setModal] = useState(false);

  const handleClickModal = () => {
    setModal(!modalIsOpen);
  };

  const showModal = (
    <Modal
      bigImg={bigImg}
      click={handleClickModal}
      alt={alt}
      download={download}
      authorName={authorName}
      avatar={avatar}
      nick={nick}
      bio={bio}
      portfolio={portfolio}
      location={location}
    />
  );

  return (
    <header>
      {modalIsOpen && showModal}
      <img
        onClick={handleClickModal}
        alt={alt}
        src={src}
        className="Card-picture"
      />
      <Link to={`/photos/${id}`}>
        <h2 className="Card-title pt-3">{title}</h2>
      </Link>
    </header>
  );
}

export default CardHeader;
