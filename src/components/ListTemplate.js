import React from "react";
import clsx from "clsx";

import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

import DeleteIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import AddIcon from "@material-ui/icons/AddCircleOutlineOutlined";

import { Typography } from "@material-ui/core";
import {
  yellowColor,
  blueColor,
  greenColor,
  panelColor,
  keywords
} from "../shared/Shared";

const useStyles = makeStyles(theme =>
  createStyles({
    paper: {
      height: "100%",
      backgroundColor: panelColor
    },
    icon: {
      "vertical-align": "middle",
      fontSize: "1rem"
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
    <Box p={1} pb={0}>
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
                  color={
                    props.headerName === keywords ? "primary" : "secondary"
                  }
                >
                  <AddIcon className={classes.icon} />
                  Add
                </Button>
              </InputAdornment>
            )
          }}
        />
      </Grid>
    </Box>
  );
};
function generate(element: React.ReactElement) {
  return [0, 1, 2, 5, 6, 7, 8, 234].map(value =>
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
    <div className={classes.paper}>
      {/* <Paper className={classes.paper}> */}
      <Header
        placeholderText={props.placeholderText}
        headerName={props.headerName}
      />
      <Divider className={classes.marginVertical} />
      <ListItems />
      {/* </Paper> */}
    </div>
  );
}
export default ListTemplate;
