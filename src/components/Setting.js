import React from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import PauseCircle from "@material-ui/icons/PauseCircleOutline";
import PlayCircle from "@material-ui/icons/PlayCircleOutline";
import { useSettingPageStyle } from "../viewUIs/Theme";

import { Browsers } from "./settings/Browsers";
import { Devices } from "./settings/Devices";
import Methods from "./settings/Methods";
import Configuration from "./settings/Configuration";
import {
  handleToggleService,
  handleUpdateConfig,
  BROWSERS_CAT,
  DEVICES_CAT,
  METHODS_CAT
} from "../actions/settings";
import { handleSaveData } from "../actions/shared";
import { statements } from "@babel/template";
const Settings = props => {
  const classes = useSettingPageStyle();

  const startSettingHandle = event => {
    event.preventDefault();
    props.dispatch(handleSaveData(props.keywords, props.sites, props.settings));
  };
  const stopSettingHandle = event => {
    event.preventDefault();
    alert("Stop setting is triggred!");
  };

  const exportSettingHandle = event => {
    event.preventDefault();
    alert("Export setting is triggred!");
  };

  const toggleBrowser = id => {
    props.dispatch(handleToggleService(BROWSERS_CAT, id));
  };
  const toggleDevice = id => {
    props.dispatch(handleToggleService(DEVICES_CAT, id));
  };
  const toggleMethod = id => {
    props.dispatch(handleToggleService(METHODS_CAT, id));
  };

  const updateConfig = (configType, value) => {
    props.dispatch(handleUpdateConfig(configType, value));
  };
  return (
    <div>
      <Paper className={classes.paper}>
        <Box className={clsx(classes.alignCenter, classes.paddingHeader)}>
          <Browsers
            browsers={props.settings.browsers}
            updateBrowser={toggleBrowser}
          />
          <Divider className={classes.marginVertical} />
          <Configuration
            settings={props.settings.settings}
            updateConfig={updateConfig}
          />
        </Box>
      </Paper>

      <Box mt={2}>
        <Paper className={classes.paper}>
          <Box p={1} className={classes.alignCenter}>
            <Devices
              devices={props.settings.devices}
              updateDevice={toggleDevice}
            />
          </Box>
          <Divider className={classes.marginVertical} />
          <Box p={1} className={classes.alignCenter}>
            <FormGroup row>
              <Methods
                methods={props.settings.methods}
                updateMethod={toggleMethod}
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
            onClick={exportSettingHandle}
          >
            Export Report
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.btnGroup}
            onClick={stopSettingHandle}
          >
            <PauseCircle fontSize="small" />
            Stop
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.btnGroup}
            onClick={startSettingHandle}
          >
            <PlayCircle fontSize="small" />
            Start
          </Button>
        </Grid>
      </Box>
    </div>
  );
};

export default connect(state => ({
  settings: state.settings,
  sites: state.sites,
  keywords: state.keywords
}))(Settings);
