import React from 'react';
import './App.css';
import { search } from '../../flipp/flipp';
import {Input} from 'antd';
import GridView from '../gridView/GridView';
import {getData} from '../../saveca/saveca';

const { Search } = Input;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  onSearch = (value) => {
    search('butter', value).then(data => {
      this.setState({data: data.items})
    })
    getData();
  }

  render() {
    return (
      <div className="App">
        <div style={{margin: 'auto'}}>
          <h1>Enter your postal code to get started...</h1>
          <Search
            placeholder="Postal code"
            enterButton="Search"
            size="large"
            onSearch={value => this.onSearch(value)}
            style={{width: '20rem'}}
          />
        </div>
        { this.state.data &&
          <div>
            <GridView data={this.state.data} />
          </div>
        }
        
      </div>
    )
  }
}

// function App() {
//   console.log(search('butter', 'm5v4a9'));
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
