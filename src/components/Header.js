import React from "react";
import DnsIcon from "@material-ui/icons/Dns";
import TvIcon from "@material-ui/icons/Tv";
import { Typography, Grid } from "@material-ui/core";
import clsx from "clsx";
import { greenColor, yellowColor, blueColor } from "../shared/Shared";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme =>
  createStyles({
    icon: {
      "vertical-align": "middle"
    },
    whiteText: {
      color: "#FFF"
    },
    sitesIcon: {
      color: greenColor
    },
    kwIcon: {
      color: blueColor
    },
    settingIcon: {
      color: yellowColor
    }
  })
);

export const Header = props => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={3}>
        <Typography variant="h6" component="h6" className={classes.whiteText}>
          <DnsIcon
            fontSize="large"
            className={clsx(classes.icon, classes.kwIcon)}
          />
          Keywords
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h6" component="h6" className={classes.whiteText}>
          <TvIcon
            fontSize="large"
            className={clsx(classes.icon, classes.sitesIcon)}
          />
          Sites
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6" component="h6" className={classes.whiteText}>
          <SettingsApplicationsIcon
            fontSize="large"
            className={clsx(classes.icon, classes.settingIcon)}
          />
          Settings
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
