import React from "react";
import { Box, Grid, Heading, ResponsiveContext } from 'grommet';

import { deepMerge } from "grommet/utils";

const customBreakpoints = deepMerge(grommet, {
  global: {
    breakpoints: {
      small: {
        value: 600,
      },
      medium: {
        value: 900,
      },
      large: {
        value: 3000,
      },
    },
  },
});

// const dealBoxes = animals.map((animalName) => (
//   <Box
//     elevation="large"
//     key={animalName}
//     background="light-3"
//     flex={false}
//     justify="center"
//     align="center"
//   >
//     <Heading level={2}>{animalName}</Heading>
//   </Box>
// ));

function GridView(data) {
  console.log(data);
  return (
    <Box direction="row" flex overflow={{ horizontal: "hidden" }} pad="50px">
      {data &&
        data.map((item, index) => {
          return (
            item.offer &&
            item.flippItems && (
              <div key={index}>
                <p>CHECKOUT51 OFFER: </p>
                {item.offer.offer_name}
                <h3>FLIPP OFFERs: </h3>
                {item.flippItems.map((flipp) => {
                  return <p>{flipp.name}</p>;
                })}
              </div>
            )
          );
        })}
      {/* <Row gutter={16}>

                </Row> */}
    </Box>
  );
}

export default GridView;
