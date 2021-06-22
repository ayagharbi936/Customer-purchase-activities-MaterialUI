import React, { useState } from "react";
import { Typography, Button, Grid, Dialog } from "@material-ui/core";
import makeStyles from "../Style";
import CustomDatePicker from "./CustomDatePicker";

const CreateForm = ({ openCreateDialog, setOpenCreateDialog }) => {
  const classes = makeStyles();
  const [year, setYear] = useState(new Date());

  return (
    <Dialog  open={openCreateDialog} onClose={()=>{setOpenCreateDialog(false)}}>
      <Grid container direction="column"  style={{padding:'30px 20px', width:350}}>
        <Grid item style={{marginBottom:20}} >
          <Typography
            align="center"
            style={{ fontWeight: "500", fontSize: 13 }}
          >
            select year (period)
          </Typography>
          <Grid container justify="center">
            <CustomDatePicker year={year} setYear={setYear} />
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="space-around" alignItems="center">
            <Button
              size="small"
              variant="contained"
              className={classes.buttonStyle}
              style={{ backgroundColor: "#E79595" }}
              onClick={()=>{setOpenCreateDialog(false)}}
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

export default CreateForm;
