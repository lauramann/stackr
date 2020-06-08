import React from "react";
import logo from "../../../assets/stackr-logo.png";
import { Box, Button } from "grommet";
import { Clipboard } from "grommet-icons";

const AppBar = () => {
  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="white"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
      style={{ zIndex: "1" }}
    >
      <img src={logo} style={{ width: "34%", maxWidth: "160px" }}></img>
      <Button
        icon={<Clipboard />}
        // onClick={() => setShowSidebar(!showSidebar)}
      />
    </Box>
  );
};

export default AppBar;
