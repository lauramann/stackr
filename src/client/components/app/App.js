import React, { useState } from "react";
import "./App.css";
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
import { Search } from "grommet-icons";
import GridView from "../gridView/GridView";
import AppBar from "./AppBar";

const theme = {
  global: {
    colors: {
      brand: "#4756DF",
      // text: "#000",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

const App = () => {
  const [data, setData] = useState(null);
  const [value, setValue] = React.useState("");
  // const [showSidebar, setShowSidebar] = useState(false);

  const onSearch = () => {
    fetch(`/getOffers?postalCode=${value.postalCode}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
        },
        (error) => {
          console.log("error");
        }
      );
  };

  return (
    <Grommet theme={theme} full>
      {!data ? (
        <Box fill>
          <AppBar />
          <Box
            direction="row"
            flex
            overflow={{ horizontal: "hidden" }}
            pad="50px"
          >
            <Box width="35%" style={{ marginRight: "20px" }}>
              <h2
                style={{
                  fontSize: "3.7em",
                  marginBottom: "10px",
                  lineHeight: "1",
                  color: "#30242A",
                }}
              >
                Finding deals has never been so easy.
              </h2>
              <p style={{fontWeight:"300"}}>
                Forget scouring the internet for deals - we stack coupons and
                sales from Checkout51 and flipp to get you the best prices on
                groceries.
              </p>
              <Form
                value={value}
                onChange={(nextValue) => {
                  setValue({ postalCode: nextValue.postalCode.toUpperCase() });
                }}
                onSubmit={onSearch}
              >
                <FormField name="postalCode">
                  <TextInput
                    name="postalCode"
                    icon={<Search />}
                    placeholder="Enter your postal code"
                  />
                </FormField>
                <Button type="submit" label="Search" primary color="brand" />
              </Form>
              {/* Show checkout51 and flipp icons greyed out here? */}
            </Box>
            <Image fit="contain" src={wfh}></Image>
            {/* <img src={wfh} style={{ width: "140%", objectFit: "contain" }}></img> */}

            {/* <Box flex background={{image: "url(file:///Users/lauramann/Documents/stackr/src/assets/wfh.svg )"}}> */}
            {/* {showSidebar && (
            <Collapsible direction="horizontal" open={showSidebar}>
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
            </Collapsible>
          )} */}
          </Box>
        </Box>
      ) : (
        <GridView data={data} postalCode={value.postalCode} />
      )}
    </Grommet>
  );
};

export default App;
