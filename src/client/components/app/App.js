import React, { useState } from "react";
import "./App.css";
import logo from "../../../assets/stackr-logo.png";
// import wfh from "../../../assets/wfh.svg";
import wfh from "../../../assets/wfh.png";
import {
  Box,
  Button,
  Collapsible,
  Form,
  FormField,
  Grid,
  Grommet,
  Image,
  TextInput,
} from "grommet";
import { Clipboard, Search } from "grommet-icons";
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
    fetch(`/getOffers?postalCode=${value.postalCode}`)
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
        {!data ?
        <Box
          direction="row"
          flex
          overflow={{ horizontal: "hidden" }}
          pad="50px"
        >
          <Box width="35%" style={{marginRight:"20px"}}>
            <h2 style={{ fontSize: "3.7em", marginBottom: "10px", lineHeight: "1", color: "#30242A" }}>
              Finding deals has never been so easy.
            </h2>
            <p>
              Forget scouring the internet for deals - we stack coupons and
              sales from Checkout51 and flipp to get you the best prices on groceries.
            </p>
            <Form
              value={value}
              onChange={(nextValue) => {
                console.log(nextValue);
                setValue({postalCode: nextValue.postalCode.toUpperCase()});
              }}
              onSubmit={onSearch}
            >
              <FormField name="postalCode">
                <TextInput name="postalCode" icon={<Search />} placeholder="Enter your postal code"/>
              </FormField>
              <Button type="submit" label="Search" primary color="#C5E590" />
            </Form>
              {/* Show checkout51 and flipp icons greyed out here? */}
          </Box>
          <Image fit="contain" src={wfh}></Image>
          {/* <img src={wfh} style={{ width: "140%", objectFit: "contain" }}></img> */}

          {/* <Box flex background={{image: "url(file:///Users/lauramann/Documents/stackr/src/assets/wfh.svg )"}}> */}
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
        </Box> : 
          <GridView data={data} />
        }
      </Box> 
    </Grommet>
  );
};

export default App;
