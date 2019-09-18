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
                updateBrowser={this.updateBrowser}
              />
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    );
  }
}

export default Home;
