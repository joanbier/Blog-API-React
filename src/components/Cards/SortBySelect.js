import "./Select.css";

export default function SortBySelect(props) {
  return (
    <div className="sort-wrapper">
      <label htmlFor="sort">Sort by: </label>{" "}
      <select
        className="sort-select"
        onChange={props.sort}
        name="sort"
        id="sort"
      >
        <option value="date">Date</option>
        <option value="likes">Likes</option>
      </select>
    </div>
  );
}
