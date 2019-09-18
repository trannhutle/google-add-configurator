import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import { defaultColor, greenColor, blueColor, yellowColor } from "../shared/Shared";

const greenCbStyles = theme => ({
  root: {
    "&$checked": {
      color: greenColor
    },
    "&:hover": {
      color: greenColor
    },
    color: defaultColor
  },
  checked: {}
});

const blueCbStyles = theme => ({
  root: {
    "&$checked": {
      color: blueColor
    },
    "&:hover": {
      color: blueColor
    },
    color: defaultColor
  },
  checked: {}
});

const yellowCbStyles = theme => ({
  root: {
    "&$checked": {
      color: yellowColor
    },
    "&:hover": {
      color: yellowColor
    },
    color: defaultColor
  },
  checked: {}
});

const GreenCb = withStyles(greenCbStyles)(Checkbox);
const BlueCb = withStyles(blueCbStyles)(Checkbox);
const YellowCb = withStyles(yellowCbStyles)(Checkbox);

const CustomCheckBox = props => {
  console.log(props);
  const color = props.color;
  // Remove attribute color because of warning
  const cloneProps = Object.assign({}, props);
  delete cloneProps.color;

  switch (color) {
    case "green":
      return <GreenCb {...cloneProps} />;
    case "blue":
      return <BlueCb {...cloneProps} />;
    case "yellow":
      return <YellowCb {...cloneProps} />;
    default:
      return <BlueCb {...cloneProps} />;
  }
};
export default CustomCheckBox;
