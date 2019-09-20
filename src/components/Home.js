import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Settings from "./Setting";
import { ThemeProvider } from "@material-ui/styles";

import Header from "./Header";
import CustomTheme from "../viewUIs/Theme";
import UniqueId from "react-html-id";

import { keywordsTitle, sitesTitle } from "../shared/Shared";
import ConnectedKeywords from "./Keywords";
import ConnectedSites from "./Sites";
import { handleLoadData } from "../actions/shared";

class Home extends Component {
  /* Initialise state of the application */
  constructor() {
    super();
    UniqueId.enableUniqueIds(this);
    const localDb = localStorage.getItem("localDb");

    if (localDb) {
      this.state = JSON.parse(localDb);
    } else {
      this.state = {
        browsers: [
          { id: this.nextUniqueId(), name: "Chrome", checked: false },
          { id: this.nextUniqueId(), name: "Firefox", checked: false },
          { id: this.nextUniqueId(), name: "Explorer", checked: true },
          { id: this.nextUniqueId(), name: "Safari", checked: false },
          { id: this.nextUniqueId(), name: "Opera", checked: false },
          { id: this.nextUniqueId(), name: "Incognito", checked: false }
        ],
        devices: [
          { id: this.nextUniqueId(), name: "Device Reset", checked: false },
          { id: this.nextUniqueId(), name: "Vinn Reset", checked: false },
          { id: this.nextUniqueId(), name: "Phone Reset", checked: true },
          { id: this.nextUniqueId(), name: "Mobile Data", checked: true },
          { id: this.nextUniqueId(), name: "Fly Mode", checked: false }
        ],
        methods: [
          { id: this.nextUniqueId(), name: "Remove Cookies", checked: true },
          {
            id: this.nextUniqueId(),
            name: "Change Resolution",
            checked: false
          },
          { id: this.nextUniqueId(), name: "Mouse Tracks", checked: false },
          { id: this.nextUniqueId(), name: "Data Saving Mode", checked: true },
          { id: this.nextUniqueId(), name: "Random Generate", checked: false },
          {
            id: this.nextUniqueId(),
            name: "Analytic Protection",
            checked: true
          },
          { id: this.nextUniqueId(), name: "Remove History", checked: false }
        ],
        settings: {
          wait: {
            hour: 40,
            second: 55
          },
          isVisitPage: true,
          page: {
            noOfPage: 1,
            from: 30,
            to: 50
          },
          operation: {
            complete: 5,
            wait: 10
          },
          target: {
            site: 10,
            wait: 20
          },
          reset: 1
        },
      };
    }
  }

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
              <Settings
                browsers={this.state.browsers}
                devices={this.state.devices}
                methods={this.state.methods}
                settings={this.state.settings}
                updateBrowser={this.updateBrowser}
                updateDevice={this.updateDevice}
                updateMethod={this.updateMethod}
                startSetting={this.startSetting}
              />
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    );
  }
}

export default connect(state => ({}))(Home);
