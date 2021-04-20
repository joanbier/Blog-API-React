import React from "react";
import "./SearchForm.css";
export default function SearchForm(props) {
  return (
    <form name="search" onSubmit={props.submit}>
      <label>Enter the phrase: </label>{" "}
      <input
        name="search"
        placeholder="Cats..."
        type="text"
        value={props.search}
        onChange={props.onchange}
      />
      <label>Amount: </label>{" "}
      <input
        type="number"
        min="1"
        max="100"
        onChange={props.onchange}
        value={props.number}
        name="number"
      />
      <input
        className=" btn py-2 btn-outline-primary"
        type="submit"
        value="Search"
      />
    </form>
  );
}
