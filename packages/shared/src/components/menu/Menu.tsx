import React from "react";
// import { menuStyles } from "./Menu.styles";
import { MenuProps } from "./Menu.types";
import { MenuButton, MenuItem, Menu as ReactMenu } from "@szhsin/react-menu";

import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import Button from "../button/Button";

// import cn from "classnames";

const Menu = (props: MenuProps): JSX.Element => {
  return (
    <ReactMenu menuButton={<Button>Open menu</Button>} transition>
      <MenuItem>New File</MenuItem>
      <MenuItem>Save</MenuItem>
      <MenuItem>Close Window</MenuItem>
    </ReactMenu>
  );
};

export default Menu;
