import React, {useState} from 'react';
import './App.css';
import { search } from '../../flipp/flipp';
import {Input} from 'antd';
import GridView from '../gridView/GridView';

const { Search } = Input;

const App = () => {
  const [data, setData] = useState(null);

  const onSearch = (postalCode) => {
    search('Hersheys Snack Mixes Bonus', postalCode).then(data => {
      setData(data.items)

      fetch(`/getOffers?postalCode=${postalCode}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
        },
        (error) => {
          console.log(error)
        }
      )
    })
  }

  return (
    <div className="App">
      <div style={{margin: 'auto'}}>
        <h1>Enter your postal code to get started...</h1>
        <Search
          placeholder="Postal code"
          enterButton="Search"
          size="large"
          onSearch={value => onSearch(value)}
          style={{width: '20rem'}}
        />
      </div>
      { data &&
        <div>
          <GridView data={data} />
        </div>
      }
      
    </div>
  )
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null
//     }
//   }

//   onSearch = (value) => {
//     search('Hersheys Snack Mixes Bonus', value).then(data => {
//       this.setState({data: data.items})
//     })
//     // getData();
//   }

//   render() {
//     return (
//       <div className="App">
//         <div style={{margin: 'auto'}}>
//           <h1>Enter your postal code to get started...</h1>
//           <Search
//             placeholder="Postal code"
//             enterButton="Search"
//             size="large"
//             onSearch={value => this.onSearch(value)}
//             style={{width: '20rem'}}
//           />
//         </div>
//         { this.state.data &&
//           <div>
//             <GridView data={this.state.data} />
//           </div>
//         }
        
//       </div>
//     )
//   }
// }

export default App;
