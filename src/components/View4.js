import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";
import './view.css'

function View4(props) {
  return (
    <div className="view">
    {/* <div className="view-Title">Leaves Distribution under each manager for first three months of 2023.</div> */}
      <ResponsiveContainer height="90%" width="99%" >
        <BarChart width={730} height={250} data={props.data} 
        margin={{
            bottom: 30,
          }}
          >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
          dataKey="manager" angle={45} tickSize={65} tickLine={false}   height={100} scaleToFit
          // dataKey="manager" hide
          />
          <YAxis />
          <Tooltip />
          {/* <Legend verticalAlign="top" height={36}/> */}
          <Bar dataKey="leavecount" fill="#8884d8" nam/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default View4;
