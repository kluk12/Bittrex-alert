import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import FavoritAlert from "./FavoritAlert";
import { NameMarket } from "../forms/Data";
import Snackbars from "./Snackbars";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing.unit / 2
  },
  label: {
    justifyContent: "center",

    [theme.breakpoints.down("sm")]: {
      padding: `2%`
    },
    [theme.breakpoints.up("md")]: {
      padding: `3%`
    }
  },
  chip: {
    margin: theme.spacing.unit
    // padding: theme.spacing.unit * 5
  }
});

class ChipsArray extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: [],
      i: false
    };
  }
  componentDidMount = async () => {
    this.LoadFavorites(NameMarket);
  };

  RemoveFavorits = data => {
    this.setState(state => {
      const favorite = [...state.favorite];
      const chipToDelete = favorite.indexOf(data);
      favorite.splice(chipToDelete, 1);
      return { favorite };
    });
    localStorage.removeItem(data);
  };
  LoadFavorites = f => {
    if (this.state.i === true) return;
    let val,
      arr = [];

    f.map(e => {
      val = localStorage.getItem(e.value);
      val = JSON.parse(val);
      if (val) {
        arr.push(val);
      }
    });
    this.state.i === false
      ? this.setState({ favorite: arr, i: true })
      : this.setState({ favorite: arr });
  };
  handleDelete = data => () => {
    this.setState(state => {
      const favorite = [...state.favorite];
      const chipToDelete = favorite.indexOf(data);
      favorite.splice(chipToDelete, 1);
      return { favorite };
    });

    localStorage.removeItem(data);
    // return <Snackbars message={data} />;
  };

  render() {
    const { classes } = this.props;
    const { favorite } = this.state;
    return (
      <Paper className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item xs={12}>
            <h3 className={classes.label}>Favorit Coins:</h3>
            {/* wystylować */}
          </Grid>
          {favorite.map((data, i) => {
            return (
              <Chip
                onClick={() => {
                  return <Snackbars message={data} />;
                }}
                key={i}
                // icon={icon}
                label={data.Marked}
                onDelete={this.handleDelete(data.Marked)}
                className={classes.chip}
              />
            );
          })}
        </Grid>
      </Paper>
    );
  }
}

ChipsArray.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ChipsArray);
