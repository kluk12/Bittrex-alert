import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import AddAlert from "@material-ui/icons/AddAlert";
import NotificationsActive from "@material-ui/icons/NotificationsActive";
import { Link } from "react-router-dom";
import { Routes } from "./Route";
import { Route, BrowserRouter } from "react-router-dom";
import { red, grey, blue } from "@material-ui/core/colors";
const drawerWidth = 240;
class PersistentDrawerLeft extends React.Component {
  state = {
    open: true
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open} className={classes.dark}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              {Routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.sidebar}
                />
              ))}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon className={classes.primary} />
              ) : (
                <ChevronRightIcon className={classes.primary} />
              )}
            </IconButton>
          </div>

          <List>
            <Link to="/" className={classes.link}>
              <ListItem button key={1}>
                <ListItemIcon>
                  <HomeIcon
                    className={classNames(classes.primary, classes.icon)}
                  />
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText
                  disableTypography={true}
                  primary={"Home"}
                  className={classes.primary}
                />
              </ListItem>
            </Link>
            <Link to="/Addalert" className={classes.link}>
              <ListItem button key={3}>
                <ListItemIcon>
                  <AddAlert
                    className={classNames(classes.primary, classes.icon)}
                  />
                  {/* {index % 2 === 0 ? <InboxIcon /> : } */}
                </ListItemIcon>
                <ListItemText
                  primary={"ADD ALERT"}
                  disableTypography={true}
                  className={classes.primary}
                />
              </ListItem>
            </Link>
            <Link to="/Favoritalert" className={classes.link}>
              <ListItem button key={2}>
                <ListItemIcon>
                  <NotificationsActive
                    className={classNames(classes.icon, classes.primary)}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={"FAVORIT ALLRETS"}
                  disableTypography={true}
                  className={classes.primary}
                />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          {this.props.children}
          {/* {Routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))} */}
        </main>
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  color: { color: `#ffffff` },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    // color: `#ff`,
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: `#482c4e`
    // color: `#ffffff`
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
    // color: `#ffffff`
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  primary: {
    color: grey[200]
  },
  link: { backgroundColor: `transparent`, textDecoration: `none` },
  dark: { backgroundColor: grey[900] },
  icon: {
    margin: theme.spacing.unit * 2,
    // primary: grey[200],
    "&:hover": {
      color: blue[400]
    }
  },

  iconHover: {
    margin: theme.spacing.unit * 2,
    "&:hover": {
      color: blue[400]
    }
  }
});

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);
