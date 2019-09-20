import React, { useState } from "react";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import { Box, FormLabel } from "@material-ui/core";
import CustomCheckbox from "../../viewUIs/CustomCheckbox";
import { useSettingPageStyle } from "../../viewUIs/Theme";
import { handleUpdateConfig } from "../../actions/settings";

export const Configuration = props => {
  const classes = useSettingPageStyle();
  const handleChangeNumber = e => {
    console.log(e.target.value);
    console.log(e.target.name);
    const value = e.target.value;
    const configType = e.target.name;
    if (value > 0) {
      props.updateConfig(configType, value);
    }
  };
  return (
    <Box m={1}>
      <Box m={1}>
        <FormGroup row>
          <FormControlLabel
            className={classes.marginLabel}
            control={
              <TextField
                type="number"
                name="waitHour"
                value={props.settings.waitHour}
                className={classes.inputNumber}
                onChange={handleChangeNumber}
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
                name="waitSecond"
                value={props.settings.waitSecond}
                className={classes.inputNumber}
                onChange={handleChangeNumber}
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
                checked={props.settings.isVisitPage}
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
                name="pageNo"
                value={props.settings.pageNo}
                className={classes.inputNumber}
                onChange={handleChangeNumber}
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
                name="pageFrom"
                value={props.settings.pageFrom}
                className={classes.inputNumber}
                onChange={handleChangeNumber}
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
                name="pageTo"
                value={props.settings.pageTo}
                className={classes.inputNumber}
                onChange={handleChangeNumber}
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
                name="operationComplete"
                value={props.settings.operationComplete}
                className={classes.inputNumber}
                onChange={handleChangeNumber}
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
                name="operationWait"
                value={props.settings.operationWait}
                className={classes.inputNumber}
                onChange={handleChangeNumber}
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
                name="targetSite"
                value={props.settings.targetSite}
                className={classes.inputNumber}
                onChange={handleChangeNumber}
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
                name="targetWait"
                value={props.settings.targetWait}
                className={classes.inputNumber}
                onChange={handleChangeNumber}
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
                name="reset"
                value={props.settings.reset}
                className={classes.inputNumber}
                onChange={handleChangeNumber}
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
    </Box>
  );
};

export default Configuration;
