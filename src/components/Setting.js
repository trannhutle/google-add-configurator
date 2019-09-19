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
import { Devices } from "./settings/Devices";
import Methods from "./settings/Methods";
import Configuration from "./settings/Configuration";

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
        <Configuration settings={props.settings}/>
      </Paper>

      <Box mt={2}>
        <Paper className={classes.paper}>
          <Box p={1} className={classes.alignCenter}>
            <Devices
              devices={props.devices}
              updateDevice={props.updateDevice}
            />
          </Box>

          <Divider className={classes.marginVertical} />

          <Box p={1} className={classes.alignCenter}>
            <FormGroup row>
              <Methods
                methods={props.methods}
                updateMethod={props.updateMethod}
              />
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
