import React, { useState, forwardRef } from "react";
import {
  Container,
  Typography,
  Grid,
  Button,
  Paper,
 
} from "@material-ui/core";
import makeStyles from "./Style";
import CustomDatePicker from "./components/CustomDatePicker";
import Table from "./components/Table"
import CreateForm from "./components/CreateForm";
import EditForm from "./components/EditForm";
const App = () => {
  const classes = makeStyles();
  const [year, setYear] = useState(new Date());

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-end"
      >
        <div>
          <Typography
            align="center"
            style={{ fontWeight: "500", fontSize: 13 }}
          >
            select year (period)
          </Typography>
          <CustomDatePicker year={year} setYear={setYear} />
        </div>
        <Button variant="contained" className={classes.buttonStyle}>
          Create New
        </Button>
      </Grid>
      <div
        style={{
          backgroundColor: "#E79595",
          marginTop: "8px",
          padding: "2px 10px",
        }}
      >
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Typography
            align="center"
            style={{ fontWeight: "500", fontSize: 13, color: "#fff" }}
          >
            2021
          </Typography>
          <Typography
            align="center"
            style={{ fontWeight: "500", fontSize: 13, color: "#fff" }}
          >
            rank: D
          </Typography>
        </Grid>
      </div>
      <Table/>
    
    </Container>
  );
};

export default App;
