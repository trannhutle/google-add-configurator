import React from "react";
import clsx from "clsx";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import { spacing } from "@material-ui/system";
import { Box, FormLabel } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CustomCheckbox from "../viewUIs/CustomCheckbox";
import DeleteIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import { yellowColor } from "../viewUIs/Shared";
const useStyles = makeStyles(theme =>
  createStyles({
    paper: {
      background: "#253147",
      color: "#FFF"
    },
    whiteText: {
      color: "#FFF"
    },
    cbBorder: {
      "margin-bottom": theme.spacing(0.3),
      "margin-right": theme.spacing(0.3),
      "margin-left": theme.spacing(0),
      border: "1px solid #243851",
      borderRadius: "5px"
    },
    marginVertical: {
      margin: "1em 0",
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
    settingIcon: {
      color: yellowColor
    }
  })
);

export function Settings() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h6" component="h6" className={classes.whiteText}>
        <SettingsApplicationsIcon
          fontSize="large"
          className={clsx(classes.icon, classes.settingIcon)}
        />
        Settings
      </Typography>

      <Paper className={classes.paper}>
        <Box p={1} pb={0} className={classes.alignCenter}>
          <Grid container>
            <Grid xs={10} item>
              <FormGroup row>
                <FormControlLabel
                  className={classes.cbBorder}
                  control={
                    <CustomCheckbox
                      className={classes.cbSmall}
                      value="checkedA"
                      color="yellow"
                    />
                  }
                  label="Chrome"
                ></FormControlLabel>
                <FormControlLabel
                  className={classes.cbBorder}
                  control={
                    <CustomCheckbox
                      className={classes.cbSmall}
                      value="checkedA"
                      color="yellow"
                    />
                  }
                  label="Firefox"
                ></FormControlLabel>
                <FormControlLabel
                  className={classes.cbBorder}
                  control={
                    <CustomCheckbox
                      className={classes.cbSmall}
                      value="checkedA"
                      color="yellow"
                    />
                  }
                  label="Explorer"
                ></FormControlLabel>
                <FormControlLabel
                  className={classes.cbBorder}
                  control={
                    <CustomCheckbox
                      className={classes.cbSmall}
                      value="checkedA"
                      color="yellow"
                    />
                  }
                  label="Safari"
                ></FormControlLabel>
                <FormControlLabel
                  className={classes.cbBorder}
                  control={
                    <CustomCheckbox
                      className={classes.cbSmall}
                      value="checkedA"
                      color="yellow"
                    />
                  }
                  label="Opera"
                ></FormControlLabel>
                <Divider className={classes.dividerVertical} />
              </FormGroup>
            </Grid>
            <Grid xs={2} item>
              <FormControlLabel
                className={classes.cbBorder}
                control={
                  <CustomCheckbox
                    className={classes.cbSmall}
                    value="checkedA"
                    color="yellow"
                  />
                }
                label="Incognito"
              ></FormControlLabel>
            </Grid>
          </Grid>
        </Box>

        <Divider className={classes.marginVertical} />
        <Box p={1}>
          <Grid item xs>
            <Box m={1}>
              <FormGroup row>
                <FormControlLabel
                  className={classes.marginLabel}
                  control={
                    <TextField
                      type="number"
                      className={classes.inputNumber}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  }
                  label="Wait"
                  labelPlacement="start"
                ></FormControlLabel>
                <FormControlLabel
                  className={classes.marginLabel}
                  control={
                    <TextField
                      type="number"
                      className={classes.inputNumber}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  }
                  label=" second on the targeted website"
                  labelPlacement="end"
                ></FormControlLabel>
              </FormGroup>
            </Box>
            <Box m={1}>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <CustomCheckbox
                      className={classes.cbSmall}
                      value="checkedA"
                      color="blue"
                    />
                  }
                  label="Visit the Page within the Site"
                ></FormControlLabel>
              </FormGroup>
            </Box>
            <Box m={1}>
              <FormGroup row>
                <FormControlLabel
                  className={classes.marginLabel}
                  control={
                    <TextField
                      type="number"
                      className={classes.inputNumber}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  }
                  label="pages"
                  labelPlacement="end"
                ></FormControlLabel>
                <FormControlLabel
                  className={classes.marginLabel}
                  control={
                    <TextField
                      type="number"
                      className={classes.inputNumber}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  }
                ></FormControlLabel>
                <FormControlLabel
                  className={classes.marginLabel}
                  control={
                    <TextField
                      type="number"
                      value="10"
                      className={classes.inputNumber}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  }
                  label=" visit from to second"
                  labelPlacement="end"
                ></FormControlLabel>
              </FormGroup>
            </Box>
            <Box m={1}>
              <FormGroup row>
                <FormControlLabel
                  className={classes.marginLabel}
                  control={
                    <TextField
                      type="number"
                      className={classes.inputNumber}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  }
                  label="After the operatiion is complete"
                  labelPlacement="start"
                ></FormControlLabel>
                <FormControlLabel
                  className={classes.marginLabel}
                  control={
                    <TextField
                      type="number"
                      value="10"
                      className={classes.inputNumber}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  }
                  label=" second wait"
                  labelPlacement="end"
                ></FormControlLabel>
              </FormGroup>
            </Box>

            <Box m={1}>
              <FormGroup row>
                <FormControlLabel
                  className={classes.marginLabel}
                  control={
                    <TextField
                      type="number"
                      className={classes.inputNumber}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  }
                  label="Target site"
                  labelPlacement="start"
                ></FormControlLabel>
                <FormControlLabel
                  className={classes.marginLabel}
                  control={
                    <TextField
                      type="number"
                      value="10"
                      className={classes.inputNumber}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  }
                  label=" if not found times"
                  labelPlacement="start"
                ></FormControlLabel>
                <FormControlLabel
                  className={classes.marginLabel}
                  label=" minuites wait."
                  control={<FormLabel />}
                  labelPlacement="start"
                ></FormControlLabel>
              </FormGroup>
            </Box>
            <Box m={1}>
              <FormGroup row>
                <FormControlLabel
                  className={classes.marginLabel}
                  control={
                    <TextField
                      type="number"
                      className={classes.inputNumber}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  }
                  label="Automatic reset after operation"
                  labelPlacement="end"
                ></FormControlLabel>
              </FormGroup>
            </Box>
          </Grid>
        </Box>
      </Paper>

      <Box mt={2}>
        <Paper className={classes.paper}>
          <Box p={1} className={classes.alignCenter}>
            <FormGroup row>
              <FormControlLabel
                item
                className={classes.cbBorder}
                control={
                  <CustomCheckbox
                    className={classes.cbSmall}
                    value="checkedA"
                    color="green"
                  />
                }
                label="Device Reset"
              ></FormControlLabel>
              <FormControlLabel
                className={classes.cbBorder}
                control={
                  <CustomCheckbox
                    className={classes.cbSmall}
                    value="checkedA"
                    color="green"
                  />
                }
                label="Vinn Reset"
              ></FormControlLabel>
              <FormControlLabel
                className={classes.cbBorder}
                control={
                  <CustomCheckbox
                    className={classes.cbSmall}
                    value="checkedA"
                    color="green"
                  />
                }
                label="Phone Reset"
              ></FormControlLabel>
              <FormControlLabel
                className={classes.cbBorder}
                control={
                  <CustomCheckbox
                    className={classes.cbSmall}
                    value="checkedA"
                    color="green"
                  />
                }
                label="Mobile Data"
              ></FormControlLabel>
              <FormControlLabel
                className={classes.cbBorder}
                control={
                  <CustomCheckbox
                    className={classes.cbSmall}
                    value="checkedA"
                    color="green"
                  />
                }
                label="Fly Mode"
              ></FormControlLabel>
            </FormGroup>
          </Box>

          <Divider className={classes.marginVertical} />

          <Box p={1} className={classes.alignCenter}>
            <FormGroup row>
              <FormControlLabel
                item
                className={classes.cbBorder}
                control={
                  <CustomCheckbox
                    className={classes.cbSmall}
                    value="checkedA"
                    color="blue"
                  />
                }
                label="Remove Cookies"
              ></FormControlLabel>
              <FormControlLabel
                className={classes.cbBorder}
                control={
                  <CustomCheckbox
                    className={classes.cbSmall}
                    value="checkedA"
                    color="blue"
                  />
                }
                label="Change Resolution"
              ></FormControlLabel>
              <FormControlLabel
                className={classes.cbBorder}
                control={
                  <CustomCheckbox
                    className={classes.cbSmall}
                    value="checkedA"
                    color="blue"
                  />
                }
                label="Mouse Tracks"
              ></FormControlLabel>
              <FormControlLabel
                className={classes.cbBorder}
                control={
                  <CustomCheckbox
                    className={classes.cbSmall}
                    value="checkedA"
                    color="blue"
                  />
                }
                label="Data Saving Mode"
              ></FormControlLabel>
              <FormControlLabel
                className={classes.cbBorder}
                control={
                  <CustomCheckbox
                    className={classes.cbSmall}
                    value="checkedA"
                    color="blue"
                  />
                }
                label="Random Generate"
              ></FormControlLabel>
              <FormControlLabel
                className={classes.cbBorder}
                control={
                  <CustomCheckbox
                    className={classes.cbSmall}
                    value="checkedA"
                    color="blue"
                  />
                }
                label="Analytic Protection"
              ></FormControlLabel>
              <FormControlLabel
                className={classes.cbBorder}
                control={
                  <CustomCheckbox
                    className={classes.cbSmall}
                    value="checkedA"
                    color="blue"
                  />
                }
                label="Remove History"
              ></FormControlLabel>
            </FormGroup>
            <Divider className={classes.dividerVertical} />
          </Box>
        </Paper>
        <Box mt={1}>
          <Grid container>
            <Button
              variant="contained"
              color="default"
              className={classes.btnGroup}
            >
              Export Report
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.btnGroup}
            >
              <DeleteIcon />
              Delete
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.btnGroup}
            >
              <DeleteIcon />
              Start
            </Button>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Settings;
