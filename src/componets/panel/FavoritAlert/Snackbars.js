import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
// import { SnackbarProvider, withSnackbar } from "notistack";

class Snackbars extends React.Component {
  handleClick = () => {
    this.props.enqueueSnackbar("I love snacks.");
  };

  handleClickVariant = variant => () => {
    // variant could be success, error, warning or info
    this.props.enqueueSnackbar("Remove favorit coin", { variant });
  };

  render() {
    return (
      <React.Fragment>
        {/* <Button onClick={this.handleClick}>Show snackbar</Button> */}
        <Button onClick={this.handleClickVariant(this.props.message)}>
          {/* Show warning snackbar */}
        </Button>
      </React.Fragment>
    );
  }
}

// Snackbars.propTypes = {
//   enqueueSnackbar: PropTypes.func.isRequired
// };

export default Snackbars;
