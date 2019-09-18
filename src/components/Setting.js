import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import { Box, FormLabel } from "@material-ui/core";
import CustomCheckbox from "../viewUIs/CustomCheckbox";
import DeleteIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import { useSettingPageStyle } from "../viewUIs/Theme";

import { Browsers } from "./settings/Browsers";
import { ThemeProvider } from "@material-ui/styles";

export function Settings(props) {
  const classes = useSettingPageStyle();
  return (
    <div>
      <Paper className={classes.paper}>
        <Browsers
          browsers={props.browsers}
          updateBrowser={props.updateBrowser}
        />

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
      </Box>
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
    </div>
  );
}

export default Settings;
