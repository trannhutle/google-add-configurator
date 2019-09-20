import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/styles";

import Header from "./Header";
import CustomTheme from "../viewUIs/Theme";
import UniqueId from "react-html-id";
import ConnectedKeywords from "./Keywords";
import ConnectedSites from "./Sites";
import ConnectedSettings from "./Setting";
import { handleLoadData } from "../actions/shared";

class Home extends Component {
  /* Initialise state of the application */

  fail = () => {
    return Math.floor(Math.random() * (5 - 1)) === 3;
  };

  updateBrowser = (id, checked) => {
    const index = this.state.browsers.findIndex(b => {
      return b.id === id;
    });
    const uBrowser = Object.assign({}, this.state.browsers[index]);
    uBrowser.checked = checked;
    const browsers = Object.assign([], this.state.browsers);
    browsers[index] = uBrowser;
    this.setState({ browsers: browsers });
  };
  updateDevice = (id, checked) => {
    const index = this.state.devices.findIndex(b => {
      return b.id === id;
    });
    const uDevice = Object.assign({}, this.state.devices[index]);
    uDevice.checked = checked;
    const devices = Object.assign([], this.state.devices);
    devices[index] = uDevice;
    this.setState({ devices: devices });
  };

  updateMethod = (id, checked) => {
    const index = this.state.methods.findIndex(b => {
      return b.id === id;
    });
    const uMethod = Object.assign({}, this.state.methods[index]);
    uMethod.checked = checked;
    const methods = Object.assign([], this.state.methods);
    methods[index] = uMethod;
    this.setState({ methods: methods });
  };

  startSetting = cb => {
    new Promise((resolve, reject) => {
      const currentState = this.state;
      const currentLocalDb = localStorage.getItem("localDb");

      localStorage.setItem("localDb", JSON.stringify(currentState));
      const isFailed = this.fail();
      if (isFailed) {
        localStorage.setItem("localDb", currentLocalDb);
        reject(isFailed);
      } else {
        resolve(isFailed);
      }
    })
      .then(res => {
        cb(res);
      })
      .catch(error => {
        cb(error);
      });
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleLoadData());
  }

  render() {
    const { loading } = this.props;
    if (loading === true) {
      return <h3>loading...</h3>;
    }
    return (
      <div>
        <ThemeProvider theme={CustomTheme}>
          <Header />
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <ConnectedKeywords />
            </Grid>
            <Grid item xs={3}>
              <ConnectedSites />
            </Grid>
            <Grid item xs={6}>
              <ConnectedSettings />
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    );
  }
}

export default connect(state => ({ loading: state.loading }))(Home);
