import React, { useState } from "react";
import ShowRandomPhoto from "./Cards/RadomPhotoCard/ShowRandomPhoto";

function RandomPhoto() {
  const [collection, setCollection] = useState([]);

  const fetchData = () => {
    const UNSPLASH_BASE_URL = "https://api.unsplash.com";
    // const UNSPLASH_ACCESS_KEY =
    //   "3f664ef5e4273eb908008a62f5bb36a44010ddbd641644700adac1dcd8a48e49";
    const myAPIkey = "nOVaG5lXsxMDTJ5PieGha00mJSFPG8v-QpnQxnBHmX8";

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
