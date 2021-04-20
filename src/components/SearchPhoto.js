import React, { Component } from "react";
import CardsListCollectionByID from "./Cards/CardsByID/CardListCollectionByID";
import Spinner from "./Spinner";
import Select from "./Cards/SortBySelect";
import SearchForm from "./Form/SearchForm";

class SearchPhoto extends Component {
  state = {
    collection: [],
    search: "",
    number: 10,
    spinner: false
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

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.fetchData(this.state.search, this.state.number);
  };

  fetchData = (input, number) => {
    if (this.state.search && this.state.number) {
      this.setState({ spinner: true });

      const UNSPLASH_BASE_URL = "https://api.unsplash.com";
      // const UNSPLASH_ACCESS_KEY =
      //   "3f664ef5e4273eb908008a62f5bb36a44010ddbd641644700adac1dcd8a48e49";
      const myAPIkey = "nOVaG5lXsxMDTJ5PieGha00mJSFPG8v-QpnQxnBHmX8";

      fetch(
        `${UNSPLASH_BASE_URL}/search/photos/?per_page=${number}&query=${input}`,
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
        .then(data => this.setState({ collection: data.results }))
        .catch(err => {
          console.log("Something went wrong :(", err);
          alert(err);
        });
    }
  };

  render() {
    return (
      <>
        <Select sort={this.sortCards} />
        <SearchForm
          search={this.state.search}
          number={this.state.number}
          onchange={this.handleInput}
          submit={this.handleSubmit}
        />
        <div className="Cards-collection">
          {this.state.collection.length === 0 && this.state.spinner ? (
            <Spinner />
          ) : (
            <CardsListCollectionByID data={this.state.collection} />
          )}
        </div>
      </>
    );
  }
}

export default SearchPhoto;
