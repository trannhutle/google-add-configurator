import React from "react";

import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { useSettingPageStyle } from "../../viewUIs/Theme";

const Header = props => {
  const classes = useSettingPageStyle();
  console.log("Go to header ", props.header);
  return (
    <Box className={classes.paddingHeader}>
      <Grid container>{props.header}</Grid>
    </Box>
  );
};

const ListItems = props => {
  const classes = useSettingPageStyle();
  return (
    <Grid item xs className={classes.listWrapper}>
      <div className={classes.listContainer}>{props.list}</div>
    </Grid>
  );
};

export function ListTemplate(props) {
  const classes = useSettingPageStyle();
  console.log("this is the information is passed", props);
  return (
    <div className={classes.paper}>
      <Header
        placeholderText={props.placeholderText}
        headerName={props.headerName}
        header={props.header}
      />
      <Divider className={classes.marginVertical} />
      <ListItems list={props.list} addKeyword={props.addKeyword} />
    </div>
  );
}
export default ListTemplate;
