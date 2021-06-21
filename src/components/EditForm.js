import React, { useState } from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import makeStyles from "../Style";

const EditForm = () => {
  const classes = makeStyles();

  return (
    <div>
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
    </div>
  );
};

export default EditForm;
