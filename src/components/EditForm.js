import React from "react";
import { Typography, Button, Grid, Dialog } from "@material-ui/core";
import makeStyles from "../Style";
import ProgressLabels from "./ProgressLabels";

const EditForm = ({ openEditDialog, setOpenEditDialog }) => {
  const classes = makeStyles();

  return (
    <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
      <div style={{ width: 300, padding: "20px 0" }}>
        <Typography align="center" style={{ fontWeight: "500", fontSize: 14 }}>
          2021 June
        </Typography>
        <div style={{ margin: "20px auto", width: "62%" }}>
          <div>
            <Typography
              style={{ fontWeight: "500", fontSize: 13, marginBottom: 5 }}
            >
              progress
            </Typography>
            <Grid container justify="space-between" alignItems="center">
              <ProgressLabels />
              <ul className={classes.listStyle}>
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
          </div>
          <div
            style={{
              margin: "20px 0",

              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #000",
              padding: "15px",
            }}
          >
            <Typography className={classes.EditFormLabel}>
              Payement method selection
            </Typography>
            <div style={{ margin: "10px 0", width: "100%" }}>
              <ul className={classes.listStyle}>
                <li
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography className={classes.EditFormLabel}>
                    Cash
                  </Typography>
                  <input type="checkbox" />
                </li>
                <li
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography className={classes.EditFormLabel}>
                    Credit
                  </Typography>
                  <input type="checkbox" />
                </li>
                <li
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography className={classes.EditFormLabel}>
                    Contribution
                  </Typography>
                  <input type="checkbox" />
                </li>
              </ul>
            </div>
            <div style={{ margin: "5px 0" }}>
              <Typography className={classes.EditFormLabel}>
                Payement item
              </Typography>
              <input className={classes.input} />
            </div>
            <div style={{ margin: "5px 0" }}>
              <Typography className={classes.EditFormLabel}>
                Payement amount
              </Typography>
              <input className={classes.input} />
            </div>
          </div>

          <Button
            size="small"
            variant="contained"
            className={classes.buttonStyle}
            style={{
              height: 36,
              maxWidth: 36,
              minWidth:36,
              borderRadius: 18,
              display:'block',
              marginLeft:'auto',
            }}
          >
            +
          </Button>

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
        </div>

        <Grid container justify="space-around" alignItems="center">
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
    </Dialog>
  );
};

export default EditForm;
