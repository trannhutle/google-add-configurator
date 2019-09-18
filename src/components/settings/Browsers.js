import React from "react";
import clsx from "clsx";

import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Box from "@material-ui/core/Box";
import CustomCheckbox from "../..//viewUIs/CustomCheckbox";

import { useSettingPageStyle } from "../../viewUIs/Theme";

export const Browsers = props => {
  const classes = useSettingPageStyle();
  return (
    <Box p={1} pb={0} className={classes.alignCenter}>
      <Grid container>
        <Grid xs={10} item>
          <FormGroup row>
            {props.browsers.map(b => {
              const changeHandle = event => {
                console.log(event.currentTarget.value, b);
                const checked = event.currentTarget.checked;
                props.updateBrowser(b.id, checked);
              };

              return (
                <FormControlLabel
                  className={
                    b.checked
                      ? clsx(classes.cb, classes.cbBorderSelected)
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
    </Box>
  );
};

export default Browsers;
