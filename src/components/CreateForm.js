import React, { useState } from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import makeStyles from "../Style";
import CustomDatePicker from "./CustomDatePicker";

const CreateForm = () => {
  const classes = makeStyles();
  const [year, setYear] = useState(new Date());

  return (
    <Grid container direction="column" justify="center">
      <Grid item>
        <Typography align="center" style={{ fontWeight: "500", fontSize: 13 }}>
          select year (period)
        </Typography>
        <Grid container justify='center'>
        <CustomDatePicker year={year} setYear={setYear} /></Grid>
      </Grid>
      <Grid item>
        <Grid container justify="space-between" alignItems="center">
          <Button
            size="small"
            variant="contained"
            className={classes.buttonStyle}
            style={{ backgroundColor: "#E79595" }}
          >
            Cancel
          </Button>
          <Button
            size="small"
            variant="contained"
            className={classes.buttonStyle}
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreateForm;
