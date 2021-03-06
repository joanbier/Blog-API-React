import React, { Component } from "react";
import CardsListCollectionByID from "./Cards/CardsByID/CardListCollectionByID";
import Spinner from "./Spinner";
import Select from "./Cards/SortBySelect";
import { myAPIkey, UNSPLASH_BASE_URL } from "../constants/api";

class PhotosCollectionById extends Component {
  state = {
    collection: []
  };

  sortCards = e => {
    let collection = this.state.collection;
    switch (e.target.value) {
      case "likes":
        collection.sort((a, b) => b.likes - a.likes);
        break;
      case "date":
        collection.sort((a, b) => b.created_at.localeCompare(a.created_at));
        break;
      default:
        console.log(`Sorry, we are out of ${e.target.value}.`);
    }
    this.setState({ collection });
  };

  componentDidMount() {
    setTimeout(this.fetchData, 1000);
  }

  fetchData = () => {
    fetch(
      `${UNSPLASH_BASE_URL}/collections/${this.props.id}/photos?per_page=50`,
      {
        headers: { Authorization: `Client-ID ${myAPIkey}` }
      }
    )
      .then(response => {
        if (response.status !== 200) {
          throw Error("This is not status 200");
        } else {
          return response.json();
        }
      })
      .then(data => this.setState({ collection: data }))
      .catch(err => {
        console.log("Something went wrong :(", err);
        alert(err);
      });
  };

  render() {
    return (
      <>
        <Select sort={this.sortCards} />
        <div className="Cards-collection">
          {this.state.collection.length === 0 ? (
            <Spinner />
          ) : (
            <CardsListCollectionByID data={this.state.collection} />
          )}
        </div>
      </>
    );
  }
}

export default PhotosCollectionById;
