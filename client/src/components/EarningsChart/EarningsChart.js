import { Card, CardContent, CardHeader } from "@mui/material";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const EarningssChart = (props) => {

  return (
    <section>
      <Card sx={{}}>
        <CardHeader title="Monthly Earnings" />
        <CardContent>
          <LineChart
            width={500}
            height={300}
            data={props.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Earnings"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </CardContent>
      </Card>
    </section>
  );
}

export default EarningssChart;