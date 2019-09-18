import React from "react";
import clsx from "clsx";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CustomCheckbox from "../..//viewUIs/CustomCheckbox";

import { useSettingPageStyle } from "../../viewUIs/Theme";

export const Devices = props => {
  const classes = useSettingPageStyle();
  return (
    <FormGroup row>
      {props.devices.map(d => {
        const changeHandle = event => {
          const checked = event.currentTarget.checked;
          props.updateDevice(d.id, checked);
        };

        return (
          <FormControlLabel
            className={
                    d.checked
                      ? clsx(classes.cb, classes.cbGreenSelected)
                      : clsx(classes.cb, classes.cbBorder)
                  }
            control={
              <CustomCheckbox
                className={classes.cbSmall}
                checked={d.checked}
                color="green"
                onChange={changeHandle}
              />
            }
            label={d.name}
          ></FormControlLabel>
        );
      })}
    </FormGroup>
  );
};

export default Devices;
