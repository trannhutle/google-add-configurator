import React from "react";
import clsx from "clsx";

import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CustomCheckbox from "../..//viewUIs/CustomCheckbox";

import { useSettingPageStyle } from "../../viewUIs/Theme";

export const Browsers = props => {
  const classes = useSettingPageStyle();
  return (
    <Grid container>
      <Grid xs={10} item>
        <FormGroup row>
          {props.browsers.map(b => {
            const changeHandle = event => {
              const checked = event.currentTarget.checked;
              props.updateBrowser(b.id, checked);
            };
            return (
              <FormControlLabel
                className={
                  b.checked
                    ? clsx(classes.cb, classes.cbYellowSelected)
                    : clsx(classes.cb, classes.cbBorder)
                }
                control={
                  <CustomCheckbox
                    className={classes.cbSmall}
                    color="yellow"
                    checked={b.checked}
                    value={b.name}
                    onChange={changeHandle}
                  />
                }
                label={b.name}
              ></FormControlLabel>
            );
          })}
        </FormGroup>
      </Grid>
    </Grid>
  );
};

export default Browsers;
