import React,{ useState } from "react";
import './Tasks.css'



const Tasks = (props)=>{
    // const [exp,setExp] =useState(props.search_val)
    // const [list,setList] = useState(props.rend_list.task_list.filter((task)=>{
    //     return (task.name.match(props.search_val) !== null)
    // }))
    // const testing = ()=>{
    //    console.log(list[0].name.match(props.search_val)) 
    // }


    const searched_list = ()=>{
        return(
          <div className='Task'>
            {props.rend_list.task_list.filter((task)=>{
              return (task.name.match(props.search_val) !== null)
            }).map((task) =>{
              return(
                <div className='task_text'>
                  <div className='task_hedder'>{task.name}</div>
                  <div className='spec_hedder'>{task.spec}</div>
                </div>
              )
            })}
          </div>
          )
    }

    return (
        <div className='Task'>
          {searched_list()}
        </div>
      );
}

export default Tasks;