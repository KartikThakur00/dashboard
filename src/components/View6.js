import React from "react";
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Cell,
  LabelList,
} from "recharts";

function View6(props) {
  const data = props.data.map((val) => {
    return {
      name: val.team + "," + val.leaveType,
      count: val.count,
    };
  });

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#F08042",
    "#FF0B28",
  ];
  console.log(data);
  return (
    <div className="view">
      {/* <div className="view-Title">
        Leaves Type Distribution of Top 2 Teams in 2022
      </div> */}
      <ResponsiveContainer width="100%" height="90%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="count"
            nameKey={"name"}
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={130}
            fill="#8884d8"
            legendType="circle"
            lable
          >
          <LabelList dataKey="count" position="inside" />
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="top" align="right" width="50%" layout="vertical" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default View6;
