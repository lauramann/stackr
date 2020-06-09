import React, { useState } from "react";
import "./App.css";
import wfh from "../../../assets/wfh.png";
import {
  Box,
  Button,
  Form,
  FormField,
  Grommet,
  Image,
  Keyboard,
  TextInput,
} from "grommet";
import { Search } from "grommet-icons";
import GridView from "../gridView/GridView";
import AppBar from "./AppBar";

const theme = {
  global: {
    colors: {
      brand: "#4756DF",
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

  const onSearch = () => {
      fetch(`/getOffers?postalCode=${value.postalCode}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
        },
        (error) => {
          console.log("error", error);
        }
      );
    // }
    
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
            className="app-body"
          >
            <Box className="main-copy__conatiner" width="35%">
              <h2 className="promo-title">
                Finding deals has never been so easy.
              </h2>
              <p>
                Forget scouring the internet for deals - we stack coupons and
                sales from Checkout51 and flipp to get you the best prices on
                groceries.
              </p>
              <Form
                value={value}
                onChange={(nextValue) => {
                  setValue({ postalCode: nextValue.postalCode.toUpperCase() });
                }}
              >
                <Keyboard onEnter={onSearch}>
                  <TextInput
                    name="postalCode"
                    icon={<Search />}
                    placeholder="Enter your postal code"
                  />
                </Keyboard>
                  
              </Form>
              {/* Show checkout51 and flipp icons greyed out here? */}
            </Box>
            <Image fit="contain" src={wfh}></Image>
          </Box>
        </Box>
      ) : (
        <GridView data={data} postalCode={value.postalCode} />
      )}
    </Grommet>
  );
};

export default App;
