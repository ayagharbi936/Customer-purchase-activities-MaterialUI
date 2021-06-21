import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    backgroundColor: "#63C5CF",
    color: "#fff",
    textTransform: "none",
    height: 30,
    width: 120,
  },
  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  progressItem: {
    backgroundColor: "#f1f1f1",
    height: 15,
    width: 30,
    borderRadius: 5,
    marginLeft: 3,
  },
  tableItemLabel: {
    fontSize: 11,
    fontWeight: 500,
    marginBottom: 10,
  },
}));

export default useStyles;
