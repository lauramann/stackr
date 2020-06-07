import React, { useState } from "react";
import "./App.css";
import logo from "../../../assets/stackr-logo.png";
import wfh from "../../../assets/wfh.svg";
import {
  Box,
  Button,
  Collapsible,
  Form,
  FormField,
  Grid,
  Grommet,
  TextInput,
} from "grommet";
import { Clipboard } from "grommet-icons";
import GridView from "../gridView/GridView";

const theme = {
  global: {
    colors: {
      brand: "#672FC6",
      // text: "#000",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="white"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

const App = () => {
  const [data, setData] = useState(null);
  const [value, setValue] = React.useState("");
  const [showSidebar, setShowSidebar] = useState(false);

  const onSearch = () => {
    fetch(`/getOffers?postalCode=${value.name}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar>
          <img src={logo} style={{ width: "34%", maxWidth: "160px" }}></img>
          <Button
            icon={<Clipboard />}
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </AppBar>
        <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
          <Box flex background={{image: "wfh.svg )"}}>
          {/* <img src={wfh}></img> */}
            {/* <img src={wfh}></img>
            <Form
              value={value}
              onChange={(nextValue) => {
                setValue(nextValue);
              }}
              onSubmit={onSearch}
            >
              <FormField name="postalCode">
                <TextInput name="name" />
              </FormField>
              <Button type="submit" label="Search" primary color="#C5E590"/>
            </Form>
            {data && (
              <div>
                <GridView data={data} />
              </div>
            )} */}
          </Box>
          {showSidebar && (
            <Collapsible direction="horizontal" open={showSidebar}>
              {/* <Layer> */}
              <Box
                flex
                width="medium"
                background="light-2"
                elevation="small"
                align="center"
                justify="center"
              >
                sidebar
              </Box>
              {/* </Layer> */}
            </Collapsible>
          )}
        </Box>
      </Box>
    </Grommet>
  );
};

export default App;
