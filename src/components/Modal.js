import "./Modal.css";
import { FacebookShareButton, FacebookIcon } from "react-share";

export default function Modal(props) {
  const {
    bigImg,
    click,
    alt,
    download,
    authorName,
    avatar,
    nick,
    bio,
    portfolio,
    location
  } = props;

  return (
    <div className="modal-wrap">
      <section className="popup">
        <p className="cross" onClick={click}>
          <i className="fas fa-times fa-lg"></i>
        </p>
        <img className="picture" src={bigImg} alt={alt} />
        <section className="author-info">
          <div>
            <img
              className="avatar"
              src={avatar}
              alt={`avatar of ${authorName}`}
            />
            <a href={portfolio}> {authorName}</a>
            <p>({nick})</p>
          </div>
          <div className="author-description">
            <p>{bio}</p>
            <p>{location}</p>
          </div>
          <div className="icons">
            <a
              className="download"
              target="_blank"
              rel="noreferrer"
              href={download}
            >
              <i className="fas fa-download fa-lg"></i>
            </a>
            <FacebookShareButton
              url={bigImg}
              quote={"Take a look at this picture"}
              hashtag="#Photos"
            >
              {" "}
              <FacebookIcon size={40} round={true}></FacebookIcon>
            </FacebookShareButton>
          </div>
        </section>
      </section>
    </div>
  );
}
