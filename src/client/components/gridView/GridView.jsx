import React from "react";
import { Box, Button, Stack } from "grommet";
import { Add } from "grommet-icons";
import AppBar from "../app/AppBar";

const GridView = ({ data, postalCode }) => {
  console.log("DATA", data);
  console.log("POSTAL CODE", postalCode);
  return (
    <Box>
      <AppBar />
      <Box pad="50px">
        <Box align="center">
          <p style={{fontSize: "16px", margin: "0"}}>These are the latest deals for your area:</p>
          <h3 style={{fontSize: "30px", marginTop: "15px"}}>{postalCode}</h3>
        </Box>
        {data &&
          data.map((item, index) => {
            return (
              item.offer &&
              item.flippItems.length>0 && (
                <Stack anchor="top-right">
                  <Box
                    border
                    round="small"
                    border={{
                      color: "brand",
                      size: "small",
                    }}
                    background="#F8F8FE" pad="20px"
                    style={{marginBottom:"10px"}}
                  >
                    <p>CHECKOUT51 OFFER: </p>
                    {item.offer.offer_name}
                    <h3>FLIPP OFFERs: </h3>
                    {item.flippItems.map((flipp, i) => {
                      if(i<3) return <p>{flipp.name}</p>;
                    })}
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
