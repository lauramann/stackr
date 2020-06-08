import React from "react";
import { Box, Grid } from "grommet";
// import { Add } from "grommet-icons";
import AppBar from "../app/AppBar";
import Card from "./Card";

const GridView = ({ data, postalCode }) => {
  console.log("DATA", data);
  console.log("POSTAL CODE", postalCode);
  return (
    <Box>
      <AppBar />
      <Box pad="50px" background="#F3EEEB">
        <Box align="center">
          <p style={{ fontSize: "16px", margin: "0" }}>
            These are the latest deals for your area:
          </p>
          <h3 style={{ fontSize: "30px", marginTop: "15px" }}>{postalCode}</h3>
        </Box>
        {data &&
          data.map((item, index) => {
            return (
              item.offer &&
              item.flippItems.length > 0 && (
                // <Box
                //   style={{ marginBottom: "20px",display: "flex", flexDirection: "row" }}
                // >
                <Grid
                  columns={["30%", "70%"]}
                  gap="small"
                  style={{ marginBottom: "20px" }}
                >
                  <Box round="medium" background="#FFF" pad="20px">
                    <p>Checkout51 Offer: </p>
                    <img
                      src={item.offer.offer_img}
                      style={{ maxWidth: "100px" }}
                    ></img>
                    <p>{item.offer.offer_name}</p>
                  </Box>
                  <Grid
                    style={{
                      overflowX: "scroll",
                      overflowY: "hidden",
                      whiteSpace: "nowrap",
                      gridTemplateColumns: "repeat(" + item.flippItems.length + ", calc(44% - 40px))"
                    }}
                    // repeat(5, calc(44% - 40px))
                    gap="small"
                  >
                    {item.flippItems.map((flipp, i) => {
                      return <Card flippItem={flipp} />;
                    })}
                  </Grid>
                </Grid>
              )
            );
          })}
        {/* <Row gutter={16}>

                </Row> */}
      </Box>
    </Box>
  );
};

export default GridView;
