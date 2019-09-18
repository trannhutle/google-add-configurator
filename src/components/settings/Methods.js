import React from "react";
import clsx from "clsx";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CustomCheckbox from "../..//viewUIs/CustomCheckbox";

import { useSettingPageStyle } from "../../viewUIs/Theme";

export const Methods = props => {
  const classes = useSettingPageStyle();
  return (
    <FormGroup row>
      {props.methods.map(m => {
        const changeHandle = event => {
          const checked = event.currentTarget.checked;
          props.updateMethod(m.id, checked);
        };

        return (
          <FormControlLabel
            className={
                    m.checked
                      ? clsx(classes.cb, classes.cbBlueSelected)
                      : clsx(classes.cb, classes.cbBorder)
                  }
            control={
              <CustomCheckbox
                className={classes.cbSmall}
                checked={m.checked}
                color="blue"
                onChange={changeHandle}
              />
            }
            label={m.name}
          ></FormControlLabel>
        );
      })}
    </FormGroup>
  );
};

export default Methods;
