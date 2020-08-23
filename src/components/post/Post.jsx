import React from "react";
import Tasks from '../tasks/Tasks.jsx'
import './Post.css'

const Post = (props) => {
  const show_content = () => {
    if (props.rend > 1) {
      return (
        <Tasks search_val={props.search_val} rend_list={props.rend_list} />
      );
    }
  };

  if (props.rend === 0) {
    return <div></div>;
  }
  return (
    <div className='Post'>
      <div>
          {show_content()}
      </div>
    </div>
  );
};

export default Post;
