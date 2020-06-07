import React, { useState } from "react";
import "./App.css";
import logo from '../../../assets/stackr-logo.png';
import {
  Box,
  Button,
  Heading,
  Form,
  FormField,
  TextInput,
  Grommet,
} from "grommet";
import { Clipboard } from "grommet-icons";
import GridView from "../gridView/GridView";

const theme = {
  global: {
    colors: {
      brand: "#672FC6",
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
    <Grommet theme={theme}>
      <AppBar>
        <img src={logo} style={{width: "34%", maxWidth: "160px"}}></img>
        <Button icon={<Clipboard />} onClick={() => {}} />
      </AppBar>
      <div style={{ margin: "auto" }}>
        <p>Enter your postal code to get started...</p>
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
          <Button type="submit" label="Search" primary />
        </Form>
      </div>
      {data && (
        <div>
          <GridView data={data} />
        </div>
      )}
    </Grommet>
  );
};

export default App;
