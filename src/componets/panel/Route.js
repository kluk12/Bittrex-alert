import React from "react";
import InboxIcon from "@material-ui/icons/MoveToInbox";
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
