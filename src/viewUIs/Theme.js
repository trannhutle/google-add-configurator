import { createMuiTheme, makeStyles, createStyles } from "@material-ui/core";

import {
  greenColor,
  blueColor,
  yellowColor,
  hoverBlueColor,
  hoverGreenColor,
  hoverYellowColor,
  defaultColor
} from "../shared/Shared";

export const theme = createMuiTheme({
  overrides: {
    MuiFormControlLabel: {
      label: {
        fontSize: "0.85rem"
      },
      root: {
        paddingRight: "0.2em"
      }
    },
    MuiCheckbox: {
      root: {
        padding: "0.1em"
      }
    },
    MuiTextField: {
      root: {
        width: "100%",
        padding: "3px",
        backgroundColor: "#FFF",
        justifyContent: "center",
        borderRadius: "3px"
      }
    },
    MuiInput: {
      input: {
        fontSize: "0.7rem"
      },
      underline: {
        "&:before": {
          content: "none"
        },
        "&:after": {
          content: "none"
        },
        "&:hover": {
          content: "none"
        }
      }
    },
    MuiListItemText: {
      primary: {
        fontSize: "0.875rem"
      }
    },
    MuiList: {
      padding: {
        padding: "0 !important"
      }
    },
    MuiButton: {
      containedPrimary: {
        backgroundColor: blueColor,
        "&:hover": {
          backgroundColor: hoverBlueColor
        }
      },
      containedSecondary: {
        backgroundColor: greenColor,
        "&:hover": {
          backgroundColor: hoverGreenColor
        }
      },
      contained: {
        backgroundColor: yellowColor,
        "&:hover": {
          backgroundColor: hoverYellowColor
        }
      },
      sizeSmall: {
        padding: "3px 3px",
        minWidth: "32px"
      },
      label: {
        fontSize: "0.5rem",
        color: "#FFF"
      }
    }
  }
});

export const useSettingPageStyle = makeStyles(theme =>
  createStyles({
    paper: {
      height: "100%",
      background: "#253147",
      color: "#FFF"
    },
    whiteText: {
      color: "#FFF"
    },
    cb: {
      "margin-bottom": theme.spacing(0.3),
      "margin-right": theme.spacing(0.3),
      "margin-left": theme.spacing(0)
    },
    cbBorder: {
      border: "1px solid " + defaultColor,
      borderRadius: "5px"
    },
    cbYellowSelected: {
      border: "1px solid " + hoverYellowColor,
      borderRadius: "5px"
    },
    cbGreenSelected: {
      border: "1px solid " + hoverGreenColor,
      borderRadius: "5px"
    },
    cbBlueSelected: {
      border: "1px solid " + hoverBlueColor,
      borderRadius: "5px"
    },
    marginVertical: {
      margin: "0.5em 0",
      height: "3px",
      backgroundColor: "#243851"
    },
    dividerVertical: {
      height: "100%",
      width: "1px",
      margin: "0 0"
    },
    icon: {
      width: "50px",
      "vertical-align": "middle"
    },
    iconList: {
      "vertical-align": "middle",
      fontSize: "1rem"
    },
    alignCenter: {
      alignItems: "center",
      justifyContent: "center"
    },
    inputNumber: {
      width: "3em",
      fontSize: "1em",
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
      backgroundColor: "#253147",
      border: "1px solid #243851",
      borderRadius: "5px"
    },
    marginLabel: {
      margin: 0,
      marginRight: theme.spacing(1)
    },
    btnGroup: {
      "&:nth-child(2)": {
        margin: "0 0.5em"
      },
      flexGrow: 1
    },
    paddingHeader: {
      padding: "0.5em 0.5em 0 0.5em"
    },
    listWrapper: {
      position: "relative",
      height: "calc(100% - 3.6875em)",
      width: "100%"
    },
    listContainer: {
      position: "absolute",
      width: "100%",
      height: "100%",
      "overflow-y": "auto"
    }
  })
);

const CustomTheme = theme;

export default CustomTheme;
