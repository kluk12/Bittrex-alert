import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import {
  FormControl,
  InputLabel,
  Select,
  Input,
  MenuItem
} from "@material-ui/core";
import Alert from "./Alert";

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden"
    // padding: `0 ${theme.spacing.unit * 3}px`
  },
  paper: {
    Width: `100%`,
    // margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 2
  }
});

class ListAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Type: "-"
    };
  }
  handleChange = event => {
    this.setState({ Type: event.target.value });
  };

  render() {
    const { classes, Up, Down, Updown } = this.props;
    const { Type } = this.state;

    let d = null;

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="Type">Type alert</InputLabel>
          <Select
            value={this.state.Type}
            onChange={this.handleChange}
            input={<Input name="Type" id="Type" />}
          >
            <MenuItem value="/">Up</MenuItem>
            <MenuItem value="\">Down</MenuItem>
            <MenuItem value="-">Up/Down</MenuItem>
          </Select>
        </FormControl>
        {Type === "/"
          ? Up
            ? Up.map(({ MarketName, Procenty, TimeStamp }, index) => {
                d = new Date(TimeStamp);
                return (
                  <Alert
                    Procenty={Procenty}
                    MarketName={MarketName}
                    d={d}
                    key={index}
                  />
                );
              })
            : null
          : Type === "\\"
          ? Down
            ? Down.map(({ MarketName, Procenty, TimeStamp }, index) => {
                d = new Date(TimeStamp);
                return (
                  <Alert
                    Procenty={Procenty}
                    MarketName={MarketName}
                    d={d}
                    key={index}
                  />
                );
              })
            : null
          : Updown
          ? Updown.map(({ MarketName, Procenty, TimeStamp }, index) => {
              d = new Date(TimeStamp);
              return (
                <Alert
                  Procenty={Procenty}
                  MarketName={MarketName}
                  d={d}
                  key={index}
                />
              );
            })
          : null}
        <ScrollUpButton EasingType="easeOutCubic" AnimationDuration={500} />;
      </div>
    );
  }
}

ListAlert.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListAlert);
