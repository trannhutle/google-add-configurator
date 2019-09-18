import React from "react";
import { createStyles, makeStyles, Button, Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ListTemplate from "./ListTemplate";
import Settings from "./Setting";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { borderRadius } from "@material-ui/system";
import {
  defaultColor,
  greenColor,
  blueColor,
  yellowColor
} from "../viewUIs/Shared";

const userStyles = makeStyles(theme => createStyles({}));
export const keywords = "Keywords";
const kwPlaceholder = "Enter your keywords here (shoes)";
export const sites = "Sites";
const sitePlaceholder = "Enter your keywords here (shoes)";

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
    MuiGrid: {
      container: {
        height: "2em"
      }
    },
    MuiButton: {
      sizeSmall: {
        padding: "1px 2px",
        minWidth: "32px"
      }
    },
    MuiListItemText: {
      primary: {
        fontSize: "0.875rem"
      }
    },
    MuiButton: {
      containedPrimary: {
        backgroundColor: blueColor,
        color: "#FFF"
      },
      containedSecondary: {
        backgroundColor: greenColor,
        color: "#FFF"
      },
      contained: {
        backgroundColor: yellowColor,
        color: "#FFF"
      }
    }
  }
});

export function Home() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper id="papper_keywords">
              <ListTemplate
                headerName={keywords}
                placeholderText={kwPlaceholder}
              />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper id="papper_sites">
              <ListTemplate
                headerName={sites}
                placeholderText={sitePlaceholder}
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper id="papper_setting">
              <Settings />
            </Paper>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Home;
