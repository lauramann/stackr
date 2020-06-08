import React from "react";
import { Avatar, Box, Stack } from "grommet";
// import { Add } from "grommet-icons";
import AppBar from "../app/AppBar";

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
                <Stack anchor="top-right">
                  <Box
                    style={{ marginBottom: "20px",display: "flex", flexDirection: "row" }}
                  >
                    <Box round="medium" background="#FFF" pad="20px" style={{width:"40%", marginRight: "20px"}}>
                      <p>Checkout51 Offer: </p>
                      <img
                        src={item.offer.offer_img}
                        style={{ maxWidth: "100px" }}
                      ></img>
                      <p>{item.offer.offer_name}</p>
                    </Box>
                    <Box style={{display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
                      {item.flippItems.map((flipp, i) => {
                        if (i < 3)
                          return (
                            <Box round="small" background="#FFF" pad="20px" width="32%">
                              <Avatar size="large" src={flipp.clean_image_url} />
                              {/* <img
                                src={flipp.clean_image_url}
                                style={{ maxWidth: "100px" }}
                              ></img> */}
                              <p>{flipp.name}</p>
                              <p>{flipp.sale_story}</p>
                            </Box>
                          );
                      })}
                    </Box>
                  </Box>
                  {/* <Box round="full" overflow="hidden" background="#FF7234">
                    <Button 
                      icon={<Add />} 
                      hoverIndicator 
                      // onClick={() => setShowSidebar(!showSidebar)}
                    />
                  </Box> */}
                </Stack>
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
