/* eslint-disable react/style-prop-object */
import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  withStyles,
  Select,
  Grid
} from "@material-ui/core";
import "./style.css";
import _ from "lodash";
import SelectSearch from "react-select-search";
import { NameMarket, Market, Time, Change } from "./Data";
import { red } from "@material-ui/core/colors";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false
    };
  }

  // const MyApp = withSnackbar(App);

  // function IntegrationNotistack() {
  //   return (
  //     <SnackbarProvider maxSnack={3}>
  //       <MyApp />
  //     </SnackbarProvider>
  //   );
  // }

  handleClickVariant = variant => () => {
    // variant could be success, error, warning or info
    this.props.enqueueSnackbar("fgdgd", { variant });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Formik
          initialValues={{
            Marked: "",
            Change: 0,
            Time: 0
          }}
          onSubmit={Data => {
            const key = Data.Marked;
            localStorage.setItem(key, JSON.stringify(Data));
          }}
          validate={values => {
            let errors = {};

            if (!values.Marked) {
              errors.content = "Required";
            }
            if (!values.Change) {
              errors.content = "Required";
            }
            if (!values.Time) {
              errors.content = "Required";
            }

            if (_.isEmpty(errors)) {
              this.setState({ disabled: false });
            } else {
              this.setState({ disabled: true });
            }

            return errors;
          }}
          render={({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit}>
              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="flex-start"
              >
                {" "}
                <Grid item xs={12} md={12}>
                  <label className={classes.label}> Marked</label>
                  {errors.Marked && (
                    <div className={classes.err}>{errors.content}</div>
                  )}
                </Grid>
                <Grid item xs={12} md={12}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="Marked">Select Marked</InputLabel>
                    <Select
                      value={values.Marked}
                      onChange={handleChange}
                      inputProps={{
                        name: "Marked",
                        id: "Marked"
                      }}
                    >
                      {NameMarket.map(({ name, value }) => {
                        return (
                          <MenuItem key={name} value={value}>
                            {name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                  <label className={classes.label}> Change</label>
                  {errors.Change && (
                    <div className={classes.err}>{errors.content}</div>
                  )}
                </Grid>
                <Grid item xs={12} md={12}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="Change">Select Change</InputLabel>
                    <Select
                      value={values.Change}
                      onChange={handleChange}
                      inputProps={{
                        name: "Change",
                        id: "Change"
                      }}
                    >
                      {Change.map(({ name, value }) => {
                        return (
                          <MenuItem key={name} value={value}>
                            {name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                  <label className={classes.label}> Time</label>
                  {errors.Time && (
                    <div className={classes.err}>{errors.content}</div>
                  )}
                </Grid>
                <Grid item xs={12} md={12}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="Time">Select Time</InputLabel>
                    <Select
                      value={values.Time}
                      onChange={handleChange}
                      inputProps={{
                        name: "Time",
                        id: "Time"
                      }}
                    >
                      {Time.map(({ name, value }) => {
                        return (
                          <MenuItem key={name} value={value}>
                            {name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <br />
                <Button
                  // onClick={this.handleClickVariant("dodano")}
                  type="submit"
                  className={classes.Button}
                  color="primary"
                  variant="contained"
                  disabled={this.state.disabled}
                >
                  Update
                </Button>
              </Grid>
            </form>
          )}
        />
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing.unit * 3,
      marginLeft: theme.spacing.unit * 6,
      marginRight: theme.spacing.unit * 6,
      minWidth: 150,
      width: `${70}vw`
    },
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing.unit * 2,
      marginLeft: theme.spacing.unit * 6,
      marginRight: theme.spacing.unit * 6,
      minWidth: 300,
      width: `70vw`
    }
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  err: { color: red },
  label: {
    padding: "3% 0 5% 5%"
  },
  Button: { marginTop: theme.spacing.unit * 2 }
});
export default withStyles(styles)(Forms);
