import React, { useState } from "react";
import "./App.css";
// import { search } from '../../flipp/flipp';
// import {Input} from 'antd';
import { Box, Button, Form, FormField, TextInput, Grommet } from "grommet";
import GridView from "../gridView/GridView";

// const { Search } = Input;

const App = () => {
  const [data, setData] = useState(null);
  const [value, setValue] = React.useState("");

  const onSearch = () => {
    console.log(value.name)
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
    <Grommet plain>
      <div style={{ margin: "auto" }}>
        <h1>Enter your postal code to get started...</h1>
        {/* <Search
          placeholder="Postal code"
          enterButton="Search"
          size="large"
          onSearch={value => onSearch(value)}
          style={{width: '20rem'}}
        /> */}
        <Form
          value={value}
          onChange={nextValue => {
            console.log("Change", nextValue);
            setValue(nextValue);
          }}
          // onReset={() => setValue(defaultValue)}
          onSubmit={onSearch}
        >
          <FormField label="Name" name="name">
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
