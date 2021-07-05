import React, { useState } from "react";
import { Typography, Grid, Paper, Button } from "@material-ui/core";
import makeStyles from "../Style";
import EditForm from "./EditForm";

const TableItem = () => {
  const classes = makeStyles();
  const [openEditDialog, setOpenEditDialog] = useState(false);

  return (
    <Grid item xs={12} sm={6}>
      <Paper elevation={2} style={{ borderRadius: 10, overflow: "hidden" }}>
        <div style={{ backgroundColor: "#63C5CF", padding: "0px 10px" }}>
          <Typography style={{ fontSize: 11, color: "#fff", fontWeight: 500 }}>
            June
          </Typography>
        </div>
        <div style={{ padding: "10px" }}>
          <Grid
            style={{ marginBottom: 10 }}
            container
            direction="row"
            justify="space-between"
          >
            <Typography className={classes.tableItemLabel}>Progress</Typography>
            <Grid item>
              <Grid container direction="row" alignItems="center">
                <div className={classes.progressItem} />
                <div className={classes.progressItem} />
                <div className={classes.progressItem} />
                <div className={classes.progressItem} />
                <div className={classes.progressItem} />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            style={{ marginBottom: 10 }}
            container
            direction="row"
            alignItems="center"
            justify="space-between"
          >
            <Typography className={classes.tableItemLabel}>Payment</Typography>
            <Grid item>
              <Grid container direction="row" alignItems="center">
                <div>
                  <Typography
                    style={{ display: "inline" }}
                    className={classes.tableItemLabel}
                  >
                    現
                  </Typography>
                  <input type="checkbox" />
                </div>
                <div style={{marginLeft:20}}>
                  <Typography
                    style={{ display: "inline" }}
                    className={classes.tableItemLabel}
                  >
                    現
                  </Typography>
                  <input type="checkbox" />
                </div>
                <div style={{marginLeft:20}}>
                  <Typography
                    style={{ display: "inline" }}
                    className={classes.tableItemLabel}
                  >
                    現
                  </Typography>
                  <input type="checkbox" />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid style={{ marginBottom: 10 }} container direction="row">
            <Typography className={classes.tableItemLabel}>
              Purchased items
            </Typography>
            <Typography style={{marginLeft:20}} className={classes.tableItemLabel}>itemName</Typography>
          </Grid>
          <Grid style={{ marginBottom: 10 }} container direction="row">
            <Typography className={classes.tableItemLabel}>
              Purchase amount
            </Typography>
            <Typography  style={{marginLeft:20}} className={classes.tableItemLabel}>100000</Typography>
          </Grid>

          <Grid container justify="flex-end">
            <Button
              onClick={() => {
                setOpenEditDialog(true);
              }}
              size="small"
              variant="contained"
              className={classes.buttonStyle}
              style={{ height: 18, width: 20 }}
            >
              Edit
            </Button>
            <EditForm
              openEditDialog={openEditDialog}
              setOpenEditDialog={setOpenEditDialog}
            />
          </Grid>
        </div>
      </Paper>
    </Grid>
  );
};

export default TableItem;
