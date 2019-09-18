import React from "react";
import clsx from "clsx";

import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

import DeleteIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import AddIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import DnsIcon from "@material-ui/icons/Dns";
import TvIcon from "@material-ui/icons/Tv";

import { keywords } from "./Home";
import { Typography } from "@material-ui/core";
import { yellowColor, blueColor, greenColor } from "../viewUIs/Shared";
const useStyles = makeStyles(theme =>
  createStyles({
    paper: {
      padding: theme.spacing(1),
      height: "100%"
    },
    icon: {
      "vertical-align": "middle"
    },
    textList: {
      fontSize: "0.3rem !important"
    },
    whiteText: {
      color: "#FFF"
    },
    marginVertical: {
      margin: "1em 0",
      height: "3px",
      backgroundColor: "#243851"
    },
    success: {
      backgroundColor: "#00a94c",
      color: "#FFF"
    },
    primary: {
      backgroundColor: blueColor,
      color: "#FFF"
    },
    sitesIcon: {
      color: greenColor
    },
    kwIcon: {
      color: blueColor
    },
    settingIcon: {
      color: yellowColor
    }
  })
);

const Header = props => {
  const classes = useStyles();

  return (
    <Grid container>
      <TextField
        className={clsx(classes.textField)}
        placeholder={props.placeholderText}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {" "}
              <Button
                variant="contained"
                size="small"
                color={props.headerName === keywords ? "primary" : "secondary"}
              >
                <AddIcon className={classes.icon} />
                Add
              </Button>
            </InputAdornment>
          )
        }}
      />
    </Grid>
  );
};
function generate(element: React.ReactElement) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value
    })
  );
}
const ListItems = () => {
  const classes = useStyles();
  return (
    <Grid item xs>
      <List className={clsx(classes.whiteText, classes.textList)}>
        {generate(
          <ListItem>
            <ListItemText primary="Single-line item">
              <Typography type="body2"> </Typography>
            </ListItemText>
            <ListItemSecondaryAction>
              <Button
                variant="outlined"
                size="small"
                className={clsx(classes.whiteText, classes.textList)}
              >
                <DeleteIcon className={classes.icon} />
                Clear
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        )}
      </List>
    </Grid>
  );
};

export function ListTemplate(props) {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h6" component="h6" className={classes.whiteText}>
        {props.headerName === keywords ? (
          <DnsIcon
            fontSize="large"
            className={clsx(classes.icon, classes.kwIcon)}
          />
        ) : (
          <TvIcon
            fontSize="large"
            className={clsx(classes.icon, classes.sitesIcon)}
          />
        )}
        {props.headerName}
      </Typography>

      <Paper className={classes.paper}>
        <Header
          placeholderText={props.placeholderText}
          headerName={props.headerName}
        />
        <Divider className={classes.marginVertical} />
        <ListItems />
      </Paper>
    </div>
  );
}
export default ListTemplate;
