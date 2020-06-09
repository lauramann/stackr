import React from "react";
import logo from "../../../assets/stackr-logo.png";
import { Box, Button } from "grommet";
import { Cut } from "grommet-icons";
import './App.css';

const AppBar = ({ disabledClipButton, postalCode }) => {
  console.log(disabledClipButton);
  const reloadPage = () => {
    window.location.reload(false);
  };

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
      <img
        src={logo}
        className="app-bar__logo"
        style={{ width: "34%", maxWidth: "160px" }}
        onClick={reloadPage}
      ></img>
      {!disabledClipButton && (
        <Button
          icon={<Cut />}
          href={`https://flipp.com/flyers?postal_code=${postalCode}`}
          target="_blank"
        />
      )}
    </Box>
  );
};

export default AppBar;
