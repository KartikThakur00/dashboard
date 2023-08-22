import React from "react";
import './view.css'

function View3(props) {
 const md=props.data.map(val=>val)
     console.log("typeof  is :"+ typeof md)
     console.log("data is :"+ md)
 
  return (
    <div className="view">
      {/* <div className="view-Title">
        Top 5 employees with maximum leave taken in 2023.
      </div> */}
      <table className="table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Employee Name</th>
            <th>Leave Count</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{key +1 }</td>
                <td>{val.name}</td>
                <td>{val.count}</td>
              </tr>
            );
          })}
          
        </tbody>
      </table>
    </div>
  );
}

export default View3;
