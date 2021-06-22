import React, { useState } from "react";
import { Typography, Button, Grid, Dialog} from "@material-ui/core";
import makeStyles from "../Style";
import ProgressLabels from "./ProgressLabels";

const EditForm = ({ openEditDialog, setOpenEditDialog }) => {
  const classes = makeStyles();

  return (
    <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
      <Grid
        container
        direction="column"
        style={{ padding: "20px", width: 350, overflow: "hidden" }}
      >
        <Typography align="center" style={{ fontWeight: "500", fontSize: 14 }}>
          2021 June
        </Typography>
        <Grid item style={{ alignSelf: "center", marginTop: 20 }}>
          <Typography
            style={{ fontWeight: "500", fontSize: 13, marginBottom: 5 }}
          >
            progress
          </Typography>
          <Grid container justify="space-between" alignItems="center">
            <ProgressLabels />
            <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
              <li>
                <input type="checkbox" />
              </li>
              <li>
                <input type="checkbox" />
              </li>
              <li>
                <input type="checkbox" />
              </li>
              <li>
                <input type="checkbox" />
              </li>
              <li>
                <input type="checkbox" />
              </li>
            </ul>
          </Grid>
          <div style={{ margin: "10px 0" }}>
            <Typography className={classes.EditFormLabel}>
              Number of actions
            </Typography>
            <input className={classes.input} />
          </div>
          <div style={{ margin: "10px 0" }}>
            <Typography className={classes.EditFormLabel}>
              Number of store visits
            </Typography>
            <input className={classes.input} />
          </div>
          <div style={{ margin: "10px 0" }}>
            <Typography className={classes.EditFormLabel}>
              Number of event visits
            </Typography>
            <input className={classes.input} />
          </div>
          <div style={{ margin: "10px 0" }}>
            <Typography className={classes.EditFormLabel}>
              Number of purchases
            </Typography>
            <input className={classes.input} />
          </div>
          <div style={{ margin: "10px 0" }}>
            <Typography className={classes.EditFormLabel}>Remarks</Typography>
            <textarea
              style={{ resize: "none", width: "100%", height: 50 }}
              className={classes.input}
            />
          </div>
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
    </Dialog>
  );
};

export default EditForm;
