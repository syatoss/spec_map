import React from "react";
import Choise from "./components/choise/Choise.jsx";
import RenderSelector from "./components/renderSelector/RenderSelector.jsx";
import "./App.css";
import SearchBar from "./components/searchBar/SearchBar.jsx";
import Post from "./components/post/Post.jsx";
import { useState } from "react";

const list = [
  {
    tool: " GTO",
    spec: "2142",
    task_list: [
      {
        name: "PMA / PrePM",
        spec: "Section 6.3.1",
      },
      {
        name: "PMB",
        spec: "TBD",
      },
      {
        name: "Weekly / Monthly",
        spec: "TBD",
      },
      {
        name: "CM Zero",
        spec: "6.10",
      },
      {
        name: "Post PM",
        spec: "Section 6.3.10",
      },
      {
        name: "APC Teach",
        spec: "6.11.1",
      },
    ],
  },

  {
    tool: " GTA",
    spec: "1984",
    task_list: [
      {
        name: "PMA / PrePM",
        spec: "Section 6.5",
      },
      {
        name: "PMB",
        spec: "Section 6.6",
      },
      {
        name: "Weekly / Monthly",
        spec: "section 6.2.2",
      },
      {
        name: "CM Zero",
        spec: "Section 6.6.2",
      },
      {
        name: "Post PM",
        spec: "Section 6.5.10",
      },
      {
        name: "APC Teach",
        spec: "Section 6.19.4",
      },
    ],
  },

  {
    tool: " GTX",
    spec: "0798",
    task_list: [
      {
        name: "PMA / PrePM",
        spec: "Section 6.4",
      },
      {
        name: "PMB",
        spec: "Section 6.6",
      },
      {
        name: "Weekly / Monthly",
        spec: "Section 6.3.2",
      },
      {
        name: "CM Zero",
        spec: "Section 6.6.1",
      },
      {
        name: "Post PM",
        spec: "Section 6.4.9",
      },
      {
        name: "APC Teach",
        spec: "Section 6.17.4",
      },
    ],
  },

  {
    tool: " GTT",
    spec: "2144",
    task_list: [
      {
        name: "PMA / PrePM",
        spec: "Section 6.9.1",
      },
      {
        name: "PMB",
        spec: "Work order procedure search 2064394\nin fusion and refer to spec for some\nindividual steps",
      },
      {
        name: "Weekly / Monthly",
        spec: "TBD",
      },
      {
        name: "CM Zero",
        spec: "Section 6.4",
      },
      {
        name: "Post PM",
        spec: "Section 6.9.10",
      },
      {
        name: "APC Teach",
        spec: "Section 6.5",
      },
    ],
  },

  {
    tool: " GNT",
    spec: "1127",
    task_list: [
      {
        name: "PMA / PrePM",
        spec: "Section 6.4",
      },
      {
        name: "PMB",
        spec: "Section 6.5",
      },
      {
        name: "Weekly / Monthly",
        spec: "Section 6.2.2",
      },
      {
        name: "CM Zero",
        spec: "Section 6.5.1",
      },
      {
        name: "Post PM",
        spec: "Section 6.4.10",
      },
      {
        name: "APC Teach",
        spec: "Section 6.12.4",
      },
    ],
  },

  {
    tool: " DS1",
    spec: "1647",
    task_list: [
      {
        name: "PMA / PrePM",
        spec: "Section 8.1",
      },
      {
        name: "PMB",
        spec: "N/A",
      },
      {
        name: "Weekly / Monthly",
        spec: "N/A",
      },
      {
        name: "CM Zero",
        spec: "Section 8.1.5",
      },
      {
        name: "Post PM",
        spec: "Section 8.1.2 step 270",
      },
      {
        name: "APC Teach",
        spec: "Section 8.1.5",
      },
    ],
  },

  {
    tool: " ANT",
    spec: "0977",
    task_list: [
      {
        name: "PMA / PrePM",
        spec: "Section 6.4",
      },
      {
        name: "PMB",
        spec: "Section 6.5",
      },
      {
        name: "Weekly / Monthly",
        spec: "Section 6.2",
      },
      {
        name: "CM Zero",
        spec: "Section 6.5.1",
      },
      {
        name: "Post PM",
        spec: "Section 6.4.10",
      },
      {
        name: "APC Teach",
        spec: "Spec 2047 Section 6.2.4",
      },
    ],
  },











];

const App = () => {
  const [toolList, setToolList] = useState(list);//list of tools and tasks
  const [rend, setRend] = useState(0);// the status of rendering 0-none,1-just spec,2-tasks list
  const [search_val, setSearchVal] = useState("");//key to seach task by
  const [selected_tool, setSeclectedTool] = useState("");//the enumeration of the tool selected - sved s str
  const [synt_err,setSyntErr] = useState([])

  const update_search_val = (val) => {
    setSearchVal(new RegExp(val.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'),'gi'));
    
  };

  const update_selected_tool = (val) => {
    setSeclectedTool(val);
  };

  const rendOnOf = (rendVal) => {
    setRend(rendVal);
  };
  return (
    <div className="App">
      <RenderSelector
        rendOnOf={rendOnOf}
        update_search_val={update_search_val}
        selected_tool={selected_tool}
        update_selected_tool={update_selected_tool}
        toolList={toolList}
      />
      <Post search_val={search_val} rend={rend} rend_list={toolList[parseInt(selected_tool)]} />
      
    </div>
  );
};

export default App;
