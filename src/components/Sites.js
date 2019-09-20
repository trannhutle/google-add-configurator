import React, { Component } from "react";
import { connect } from "react-redux";
import clsx from "clsx";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AddIcon from "@material-ui/icons/AddCircleOutlineOutlined";

import ListTemplates from "./lists/ListTemplate";
import { useSettingPageStyle } from "../viewUIs/Theme";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

import DeleteIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import Typography from "@material-ui/core/Typography";

import { handleDeleteSite, handleAddSite } from "../actions/sites";

const Header = props => {
  const classes = useSettingPageStyle();

  return (
    <TextField
      className={clsx(classes.textField)}
      placeholder="Enter your site here"
      inputRef={props.inputField}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {" "}
            <Button
              variant="contained"
              size="small"
              onClick={props.addSite}
              color="secondary"
            >
              <AddIcon className={classes.iconList} />
              Add
            </Button>
          </InputAdornment>
        )
      }}
    />
  );
};
const SitesList = props => {
  const classes = useSettingPageStyle();
  return (
    <List className={clsx(classes.whiteText, classes.textList)}>
      {props.sites.map(s => {
        // Handle delete event
        const deleteHandle = event => {
          event.preventDefault();
          props.deleteSite(s);
        };

        return (
          <ListItem key={s.id}>
            <ListItemText primary={s.name}>
              <Typography type="body2"> </Typography>
            </ListItemText>
            <ListItemSecondaryAction>
              <Button
                variant="outlined"
                size="small"
                className={clsx(classes.whiteText, classes.textList)}
                onClick={deleteHandle}
              >
                <DeleteIcon fontSize="small" />
                Clear
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};
class Sites extends Component {
  inputField = React.createRef();

  addSite = e => {
    e.preventDefault();
    const name = this.inputField.current.value;
    this.props.dispatch(
      handleAddSite(name, () => {
        this.inputField.current.value = "";
      })
    );
  };
  deleteSite = keyword => {
    this.props.dispatch(handleDeleteSite(keyword));
  };

  render() {
    return (
      <ListTemplates
        header={<Header addSite={this.addSite} inputField={this.inputField} />}
        list={<SitesList {...this.props} deleteSite={this.deleteSite} />}
      ></ListTemplates>
    );
  }
}

export default connect(state => ({
  sites: state.sites
}))(Sites);
