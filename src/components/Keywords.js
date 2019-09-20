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
import { handleAddKeyword, handleRemoveKeyword } from "../actions/keywords";

const Header = props => {
  const classes = useSettingPageStyle();

  return (
    <TextField
      className={clsx(classes.textField)}
      placeholder="Enter your keywords here (shoes)"
      inputRef={props.inputField}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {" "}
            <Button
              variant="contained"
              size="small"
              onClick={props.addKeyword}
              color="primary"
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
const KeywordsList = props => {
  const classes = useSettingPageStyle();

  return (
    <List className={clsx(classes.whiteText, classes.textList)}>
      {props.keywords.map(k => {
        // Handle delete event
        const deleteHandle = event => {
          event.preventDefault();
          props.deleteKeyword(k);
        };
        return (
          <ListItem key={k.id}>
            <ListItemText primary={k.name}>
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

class Keywords extends Component {
  inputField = React.createRef();

  addKeyword = e => {
    e.preventDefault();
    const productName = this.inputField.current.value;
    this.props.dispatch(
      handleAddKeyword(productName, () => {
        this.inputField.current.value = "";
      })
    );
  };
  deleteKeyword = keyword => {
    this.props.dispatch(handleRemoveKeyword(keyword));
  };

  render() {
    return (
      <ListTemplates
        header={
          <Header addKeyword={this.addKeyword} inputField={this.inputField} />
        }
        list={
          <KeywordsList {...this.props} deleteKeyword={this.deleteKeyword} />
        }
      ></ListTemplates>
    );
  }
}

export default connect(state => ({ keywords: state.keywords }))(Keywords);
