import React from "react";
import Choise from "../choise/Choise.jsx";
import SearchBar from "../searchBar/SearchBar.jsx";

const RenderSelector = (props) => {
  const should_rend_bar = () => {
    if (props.selected_tool !== "") {
      return (
        <SearchBar
          rendOnOf={props.rendOnOf}
          update_search_val={props.update_search_val}
        />
      );
    }
  };

  return (
    <div>
      <Choise
        update_selected_tool={props.update_selected_tool}
        rendOnOf={props.rendOnOf}
        toolList={props.toolList}
      />
      {should_rend_bar()}
    </div>
  );
};

export default RenderSelector;
