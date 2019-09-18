import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ListTemplate from "./ListTemplate";
import Settings from "./Setting";
import { ThemeProvider } from "@material-ui/styles";

import Header from "./Header";
import CustomTheme from "../viewUIs/Theme";
import UniqueId from "react-html-id";

import {
  keywords,
  kwPlaceholder,
  sitePlaceholder,
  sites
} from "../shared/Shared";

class Home extends Component {
  /* Initialise state of the application */
  constructor() {
    super();
    UniqueId.enableUniqueIds(this);

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
        { id: this.nextUniqueId(), name: "Change Resolution", checked: false },
        { id: this.nextUniqueId(), name: "Mouse Tracks", checked: false },
        { id: this.nextUniqueId(), name: "Data Saving Mode", checked: true },
        { id: this.nextUniqueId(), name: "Random Generate", checked: false },
        {
          id: this.nextUniqueId(),
          name: "Analytic Protection",
          checked: true
        },
        { id: this.nextUniqueId(), name: "Remove History", checked: false }
      ]
    };
  }
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

  render() {
    return (
      <div>
        <ThemeProvider theme={CustomTheme}>
          <Header />
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <ListTemplate
                headerName={keywords}
                placeholderText={kwPlaceholder}
              />
            </Grid>
            <Grid item xs={3}>
              <ListTemplate
                headerName={sites}
                placeholderText={sitePlaceholder}
              />
            </Grid>
            <Grid item xs={6}>
              <Settings
                browsers={this.state.browsers}
                devices={this.state.devices}
                methods={this.state.methods}
                updateBrowser={this.updateBrowser}
                updateDevice={this.updateDevice}
                updateMethod={this.updateMethod}
              />
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    );
  }
}

export default Home;
