import React, { useState } from "react";
import "./App.css";
import wfh from "../../../assets/wfh.png";
import { Box, Form, Grid, Grommet, Image, Keyboard, Text, TextInput } from "grommet";
import { Search } from "grommet-icons";
import Lottie from "react-lottie";
import GridView from "../gridView/GridView";
import AppBar from "./AppBar";
import * as animationData from "../../../assets/food.json";

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
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

  const onSearch = () => {
    if (!regex.test(value.postalCode))
      setMessage("Please enter a valid postal code");
    else {
      setLoading(true);
      setMessage("");
      fetch(`/getOffers?postalCode=${value.postalCode}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setLoading(false);
            setData(result);
          },
          (error) => {
            console.log("error", error);
          }
        );
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grommet theme={theme} full>
      {!data ? (
        <Box fill>
          <AppBar disabledClipButton />
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
              <Grid columns={["80%", "20%"]} gap="small">
                <Form
                  value={value}
                  onChange={(nextValue) => {
                    setValue({
                      postalCode: nextValue.postalCode.toUpperCase(),
                    });
                  }}
                >
                  <Keyboard onEnter={onSearch}>
                    <TextInput
                      name="postalCode"
                      icon={<Search />}
                      placeholder="Enter your postal code"
                    />
                  </Keyboard>
                  <Box pad={{ horizontal: "small" }}>
                    <Text color="status-error">{message}</Text>
                  </Box>
                </Form>
                <Box>
                  {loading && <Lottie options={defaultOptions}/>}
                </Box>
              </Grid>

              {/* Show checkout51 and flipp icons greyed out here? */}
            </Box>
            <Image fit="contain" src={wfh} />
          </Box>
        </Box>
      ) : (
        <GridView data={data} postalCode={value.postalCode} />
      )}
    </Grommet>
  );
};

export default App;
