import React, { Component } from 'react';
import GridTable from './components/table';
import Modal from './components/modal';
import AddData from './components/add-button';
import { testAddRowData } from './tests';

class App extends Component {

  render() {
    //testAddRowData();

    return (
      <div >
        <header >
        </header>
        <div>
          <AddData />
          <GridTable />
          <Modal />
        </div>
      </div>
    );
  }
}

export default App;