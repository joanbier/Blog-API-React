import React, { useState } from "react";
import ShowRandomPhoto from "./Cards/RadomPhotoCard/ShowRandomPhoto";
import { myAPIkey, UNSPLASH_BASE_URL } from "../constants/api";

function RandomPhoto() {
  const [collection, setCollection] = useState([]);

  const fetchData = () => {
    fetch(`${UNSPLASH_BASE_URL}/photos/random`, {
      headers: { Authorization: `Client-ID ${myAPIkey}` }
    })
      .then(response => {
        if (response.status !== 200) {
          throw Error("This is not status 200");
        } else {
          return response.json();
        }
      })
      .then(data => setCollection(data))
      .catch(err => {
        console.log("Something went wrong :(", err);
        alert(err);
      });
  };

  return (
    <>
      <div className="random-wrap">
        <button className="btn btn-primary btn-rounded" onClick={fetchData}>
          Show Picture
        </button>
        {collection.length !== 0 && <ShowRandomPhoto data={collection} />}
      </div>
    </>
  );
}

export default RandomPhoto;
