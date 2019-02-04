import React from "react";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { b } from "./../api/public_api";
import Forms from "./forms/Index";
import Index from "./Index";

export const Routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>ALL ALERTS</div>,
    main: () => <Index />,
    icon: () => {
      return <InboxIcon />;
    }
  },
  {
    path: "/Addalert",
    sidebar: () => <div>ADD ALERT</div>,
    main: () => <Forms />,
    icon: () => {
      return <InboxIcon />;
    }
  },
  {
    path: "/Favoritalert",
    sidebar: () => <div>FAVORIT ALERTS</div>,
    main: () => <Forms />,
    icon: () => {
      return <InboxIcon />;
    }
  }
  // ,
  // {
  //   path: "/alert",
  //   sidebar: () => <div>shoelaces!</div>,
  //   main: () => {
  //     return;
  //   },
  //   icon: () => {
  //     return <InboxIcon />;
  //   }
  // }
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
