import { FacebookShareButton, FacebookIcon } from "react-share";
import "./ShowRandomPhoto.css";

export default function ShowRandomPhoto(props) {
  const p = props.data;
  return (
    <div className="photo-wrap">
      <img className="photo" src={p.urls.regular} alt={p.alt_description} />
      <div className="icons">
        <a
          className="download"
          target="_blank"
          rel="noreferrer"
          href={p.links.download}
        >
          <i className="fas fa-download fa-lg"></i>
        </a>
        <FacebookShareButton
          url={p.urls.regular}
          quote={"Take a look at this picture"}
          hashtag="#Photos"
        >
          {" "}
          <FacebookIcon size={40} round={true}></FacebookIcon>
        </FacebookShareButton>
      </div>
    </div>
  );
}

//   download={collection.links.download}
//   authorName={collection.user.name}
//   avatar={collection.user.profile_image.large}
//   nick={collection.user.username}
//   bio={collection.user.bio}
//   portfolio={collection.user.portfolio_url}
//   location={collection.user.location}
