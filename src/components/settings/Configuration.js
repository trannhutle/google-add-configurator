import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import { Box, FormLabel } from "@material-ui/core";
import CustomCheckbox from "../../viewUIs/CustomCheckbox";
import DeleteIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import { useSettingPageStyle } from "../../viewUIs/Theme";


export const Configuration = props => {
  const classes = useSettingPageStyle();

  return (
    <Box m={1}>
      <Box m={1}>
        <FormGroup row>
          <FormControlLabel
            className={classes.marginLabel}
            control={
              <TextField
                type="number"
                value={props.settings.wait.hour}
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
                value={props.settings.wait.second}
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
                value={props.settings.page.noOfPage}
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
                value={props.settings.page.from}
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
                value={props.settings.page.to}
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
                value={props.settings.operation.complete}
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
                value={props.settings.operation.wait}
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
                value={props.settings.target.site}
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
                value={props.settings.target.wait}
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
                value={props.settings.reset}
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
    </Box>
  );
};

export default Configuration;
