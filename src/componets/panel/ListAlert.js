import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import {
  FormControl,
  InputLabel,
  Select,
  Input,
  MenuItem,
  Grid
} from "@material-ui/core";
import Alert from "./Alert";
import Typography from "@material-ui/core/Typography";

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
  },
  formControl: { margin: theme.spacing.unit }
});

class ListAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Type: "-",
      time: 120
    };
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(state => {
        let i = [state.time];
        i <= 0 ? (i = 60) : (i -= 1);
        return { time: i };
      });
    }, 1000);
  }

  handleChange = event => {
    this.setState({ Type: event.target.value });
  };

  render() {
    const { classes, Up, Down, Updown, ComponetType } = this.props;
    const { Type, time } = this.state;

    let d = null;

    return (
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item xs={6}>
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
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">{`Next alert : ${time}`}</Typography>
          </Grid>
        </Grid>
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
        <ScrollUpButton EasingType="easeOutCubic" AnimationDuration={500} />
      </div>
    );
  }
}

ListAlert.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListAlert);
