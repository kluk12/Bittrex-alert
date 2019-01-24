import React from "react";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { b } from "./../api/public_api";
export const Routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>,
    icon: () => {
      return <InboxIcon />;
    }
  },
  {
    path: "/addalert",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>,
    icon: () => {
      return <InboxIcon />;
    }
  },
  {
    path: "/alert",
    sidebar: () => <div>shoelaces!</div>,
    main: () => {
      return <div>shoelaces!</div>;
    },
    icon: () => {
      return <InboxIcon />;
    }
  }
];

// main apis func
export const api = () => {
  b.get(`getmarketsummaries`)
    .then(response => {
      // console.log(response.data.result, "getmarketsummaries");
      this.setState({ Data: response.data.result, loading: false });
      return response;
    })
    .catch(error => {
      this.setState({ error });
    });
};
