import { Component } from "react";
import CardsList from "./CardsList";
import "./Card.css";
import Select from "./SortBySelect";
import Spinner from "../Spinner";
import { myAPIkey, UNSPLASH_BASE_URL } from "../../constants/api";

class CardsContainer extends Component {
  state = {
    collection: []
  };

  sortCards = e => {
    let collection = this.state.collection;
    switch (e.target.value) {
      case "likes":
        collection.sort((a, b) => b.cover_photo.likes - a.cover_photo.likes);
        break;
      case "date":
        collection.sort((a, b) => b.published_at.localeCompare(a.published_at));
        break;
      default:
        console.log(`Sorry, we are out of ${e.target.value}.`);
    }
    this.setState({ collection });
  };

  componentDidMount() {
    setTimeout(() => {
      fetch(`${UNSPLASH_BASE_URL}/collections/?client_id=${myAPIkey}`)
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
    }, 1000);
  }

  render() {
    return (
      <>
        <Select sort={this.sortCards} />
        <div className="Cards-collection">
          {this.state.collection.length === 0 ? (
            <Spinner />
          ) : (
            <CardsList data={this.state.collection} />
          )}
        </div>
      </>
    );
  }
}

export default CardsContainer;
