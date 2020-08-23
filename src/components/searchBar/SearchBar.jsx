import React from "react";
import "./SearchBar.css";
import { useState } from "react";

const SearchBar = (props) => {
  const placeholder_txt = "Search";
  const btn_txt = "Search";
  const [search_val, setSearchVal] = useState("");

  const search_func = () => {
    let input_txt = document.querySelector("input").value;
    setSearchVal(input_txt);
    props.update_search_val(input_txt);
    if (input_txt === "") {
      props.rendOnOf(1);
    } else {
      props.rendOnOf(2);
      if (input_txt.split(" ").length < 7) {
        props.update_search_val(input_txt);
      }
    }
  };
  return (
    <div className="component_frame">
      <input
        type="text"
        placeholder={placeholder_txt}
        className="search_bar"
        onChange={search_func}
      />
    </div>
  );
};
export default SearchBar;
