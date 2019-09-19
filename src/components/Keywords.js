import React from "react";
import clsx from "clsx";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AddIcon from "@material-ui/icons/AddCircleOutlineOutlined";

import ListTemplates from "./lists/ListTemplate";
import { useSettingPageStyle } from "../viewUIs/Theme";
import { keywords } from "../shared/Shared";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

import DeleteIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import Typography from "@material-ui/core/Typography";

const Header = props => {
  const classes = useSettingPageStyle();
  const inputField = React.createRef();
  const handleAddGoald = event => {
    event.preventDefault();
    console.log("this is input ref", inputField.current.value);
    const name = inputField.current.value;
    props.addKeyword(name, () => {
      inputField.current.value = "";
    });
  };
  return (
    <TextField
      className={clsx(classes.textField)}
      placeholder={props.placeholderText}
      inputRef={inputField}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {" "}
            <Button
              variant="contained"
              size="small"
              onClick={handleAddGoald}
              color={props.headerName === keywords ? "primary" : "secondary"}
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
        return (
          <ListItem>
            <ListItemText primary={k.name}>
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
        );
      })}
    </List>
  );
};
export const Keywords = props => {
  return (
    <ListTemplates
      header={<Header {...props} />}
      list={<KeywordsList {...props} />}
      addKeyword={props.addKeyword}
    ></ListTemplates>
  );
};

export default Keywords;
