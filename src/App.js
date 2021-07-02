import React, { useState} from "react";
import { Container, Typography, Grid, Button} from "@material-ui/core";
import makeStyles from "./Style";
import CustomDatePicker from "./components/CustomDatePicker";
import Table from "./components/Table";
import CreateForm from "./components/CreateForm";
const App = () => {
  const classes = makeStyles();
  const [year, setYear] = useState(new Date());
  const [openCreateDialog, setOpenCreateDialog] = useState(false);

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
        <Button
          variant="contained"
          className={classes.buttonStyle}
          onClick={()=>{setOpenCreateDialog(true)}}
        >
          Create New
        </Button>
        <CreateForm
          openCreateDialog={openCreateDialog}
          setOpenCreateDialog={setOpenCreateDialog}
        />
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
      <Table />
    </Container>
  );
};

export default App;
