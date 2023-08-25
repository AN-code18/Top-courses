import React from 'react';
import "../styles/Filter.css";

const Filter = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

 function filterHandler (title) {
  setCategory(title)
 }

  return (
    <div className='filter-div'>
      {filterData.map((data) =>{
        return(
            <button
             key = {data.id}
             onClick={() =>filterHandler(data.title) } 
             className='filter-btn'
             >
              {data.title}
              </button>
        )
      })}
    </div>
  )
}

export default Filter
