import React, { Component } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";

import Moment from "react-moment";
import "./anime/anime.css";
import Downdown from "./anime/downdown.png";
import UpUp from "./anime/upup.png";

/* <Alert

Procenty={Procenty}
MarketName={MarketName}
d={d}
key={index} /> */

class Alert extends Component {
  render() {
    const { classes, Procenty, MarketName, d } = this.props;
    return (
      <div className="scale-up-tl">
        <Paper className={classes.paper}>
          <Grid
            container
            wrap="nowrap"
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={16}
          >
            <Grid item xs>
              {Procenty > 0 ? (
                <img
                  className={classes.img}
                  src={UpUp}
                  alt="Down"
                  height="42"
                  width="42"
                />
              ) : (
                <img
                  className={classes.img}
                  src={Downdown}
                  alt="UP"
                  height="42"
                  width="42"
                />
              )}
            </Grid>
            <Grid item xs>
              <Typography>{MarketName}</Typography>
            </Grid>
            <Grid item xs>
              {Procenty > 0 ? (
                <Typography className={classes.green}>
                  {`${Procenty} %`}
                </Typography>
              ) : (
                <Typography color="error"> {`${Procenty} %`}</Typography>
              )}
            </Grid>
            <Grid item xs>
              <Typography>
                <Moment
                  format="HH:mm" //YYYY/MM/DD  HH:mm
                  date={d}
                />
              </Typography>
            </Grid>
            <Grid item xs={false} md={true}>
              <Typography className={classes.dosp}>
                <a
                  className={classes.pointer}
                  onClick={() =>
                    window.open(
                      `https://international.bittrex.com/Market/Index?MarketName=${MarketName}`
                    )
                  }
                >
                  BITTREX
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        {/* {window.scroll({ left: 25000, behavior: "smooth" })} */}
      </div>
    );
  }
}

Alert.propTypes = {
  classes: PropTypes.object.isRequired,
  Procenty: PropTypes.number,
  MarketName: PropTypes.string,
  // d: PropTypes.function,
  key: PropTypes.any
};
const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden"
    // padding: `0 ${theme.spacing.unit * 3}px`
  },
  paper: {
    Width: `100%`,
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 2
  },
  green: {
    color: `#2e7d32`
  },
  pointer: {
    cursor: "pointer"
  },

  dosp: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {}
  },
  img: { margin: `0 ${theme.spacing.unit}px ` }
});

export default withStyles(styles)(Alert);
