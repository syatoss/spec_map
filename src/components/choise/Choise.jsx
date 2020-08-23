import React, { useState } from "react";
import "./Choise.css";

const Choise = (props) => {
  const [btnContent,setBtnContent] = useState('Please select tool')
  const [visibile,setVisibility] = useState(false)

  const update_selected_tool = (e) => {
    let div = e.target;
    props.update_selected_tool(div.id);
    props.rendOnOf(1);
    setBtnContent(div.innerHTML + ` Spec: ${props.toolList[parseInt(div.id)].spec}`) 
    toggle();

  };



  const toggle = ()=>{
    setVisibility(!visibile)
  }

  const vis_stat = ()=>{
    if (visibile)
      return 'block';
    return 'none';
  }

  return (
    <div className='Choise'>

      <button className='choose_tool' onClick={toggle} onBlur={()=>{setTimeout(()=>{setVisibility(false)},100)}} >
          {btnContent}
      </button>
      
      <div style ={{display: vis_stat() }} className='options'>
        <div id='0' className='tool' onClick={update_selected_tool}>
          GTO
        </div>

        <div id='1' className='tool' onClick={update_selected_tool}>
          GTA
        </div>

        <div id='2' className='tool' onClick={update_selected_tool}>
          GTX
        </div>

        <div id='3' className='tool' onClick={update_selected_tool}>
          GTT
        </div>

        <div id='4' className='tool' onClick={update_selected_tool}>
          GNT
        </div>

        <div id='5' className='tool' onClick={update_selected_tool}>
          DS1
        </div>

        <div id='6' className='tool' onClick={update_selected_tool}>
          ANT
        </div>
      </div>


    </div>
  );
};

export default Choise;
