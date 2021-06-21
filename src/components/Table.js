import React from "react";
import { Typography, Grid, Paper } from "@material-ui/core";
import TableItem from "./TableItem";

const Table = () => {
    const test = [0,1,2,3,4,5,6,7,8,9,10,11]
  return (
    <Paper>
      <div style={{ backgroundColor: "#f7f7f7", padding: "8px 20px" }}>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <div>
            <Typography
              style={{
                color: "#3D444A",
                fontWeight: "500",
                fontSize: 12,
              }}
            >
              Number of actions per year: 12
            </Typography>
            <Typography
              style={{
                color: "#3D444A",
                fontWeight: "500",
                fontSize: 12,
              }}
            >
              Number of store visits per year: 2
            </Typography>
          </div>
          <div>
            <Typography
              style={{
                color: "#3D444A",
                fontWeight: "500",
                fontSize: 12,
              }}
            >
              Number of purchases per year: 1
            </Typography>
            <Typography
              style={{
                color: "#3D444A",
                fontWeight: "500",
                fontSize: 12,
              }}
            >
              Number of event visits per year: 1
            </Typography>
          </div>
        </Grid>
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          marginTop: "10px",
          padding: "20px",
        }}
      >
        <Grid container justify="center" spacing={3}>
         {test.map((item,index)=>(
             <TableItem key={index}/>)
         )}
        </Grid>
      </div>
    </Paper>
  );
};

export default Table;
