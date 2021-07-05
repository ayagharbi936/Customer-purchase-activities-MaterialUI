import React from "react";
import { Typography, Box } from "@material-ui/core";
import makeStyles from "../Style";

const ProgressLabels = () => {
  const classes = makeStyles();

  return (
    <ul
      style={{
        width: 150,
      }}
      className={classes.listStyle}
    >
      <li>
        <Box style={{ backgroundColor: "#63C5CF", padding: "2px 5px" }}>
          <Typography
            style={{ fontWeight: "500", fontSize: 12, color: "#fff" }}
          >
            ListUp
          </Typography>
        </Box>
      </li>
      <li>
        <Box style={{ backgroundColor: "#E99695", padding: "2px 5px" }}>
          <Typography
            style={{ fontWeight: "500", fontSize: 12, color: "#fff" }}
          >
            Action
          </Typography>
        </Box>
      </li>
      <li>
        <Box style={{ backgroundColor: "#50BD84", padding: "2px 5px" }}>
          <Typography
            style={{ fontWeight: "500", fontSize: 12, color: "#fff" }}
          >
            Commitment
          </Typography>
        </Box>
      </li>
      <li>
        <Box style={{ backgroundColor: "#E7B284", padding: "2px 5px" }}>
          <Typography
            style={{ fontWeight: "500", fontSize: 12, color: "#fff" }}
          >
            Visit
          </Typography>
        </Box>
      </li>
      <li>
        <Box style={{ backgroundColor: "#C298DA", padding: "2px 5px" }}>
          <Typography
            style={{ fontWeight: "500", fontSize: 12, color: "#fff" }}
          >
            Purchase
          </Typography>
        </Box>
      </li>
    </ul>
  );
};

export default ProgressLabels;
