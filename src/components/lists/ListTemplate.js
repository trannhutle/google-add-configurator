import React from "react";
import clsx from "clsx";

import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { useSettingPageStyle } from "../../viewUIs/Theme";

const Header = props => {
  console.log("Go to header ", props.header);
  return (
    <Box p={1} pb={0}>
      <Grid container>{props.header}</Grid>
    </Box>
  );
};

const ListItems = props => {
  const classes = useSettingPageStyle();
  return (
    <Grid item xs>
      {props.list}
    </Grid>
  );
};

export function ListTemplate(props) {
  const classes = useSettingPageStyle();
  return (
    <div className={classes.paper}>
      <Header
        placeholderText={props.placeholderText}
        headerName={props.headerName}
        header={props.header}
      />
      <Divider className={classes.marginVertical} />
      <ListItems list={props.list} />
    </div>
  );
}
export default ListTemplate;
