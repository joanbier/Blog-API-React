import React from "react";
import { useParams } from "react-router-dom";
import PhotosCollectionByID from "../components/PhotosCollectionByID";
import { Link } from "react-router-dom";

function Photos() {
  let idDefault = "220381";
  const { id } = useParams();

  return (
    <>
      <h2>Collection of related photos</h2>
      <p>
        If you would like to see other collection, turn back to the{" "}
        <Link className="Link" to="/">
          {" "}
          Home Page{" "}
        </Link>{" "}
        and click on the selected title. Then you can admire different pictures.
        &#128513;{" "}
      </p>
      {id === undefined ? (
        <PhotosCollectionByID id={idDefault} />
      ) : (
        <PhotosCollectionByID id={id} />
      )}
    </>
  );
}

export default Photos;

// class Photos extends Component {
//   state = {};
//   render() {
//     return <h2>Photos</h2>;
//   }
// }

// export default Photos;
