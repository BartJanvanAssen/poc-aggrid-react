import React, { Component } from 'react'
import { connect } from 'react-redux';

// Components
import GridTable from './components/data-grid/table'
import Modal from './components/modal'
import AddDataButton from './components/add-button'
import AppWrapper from './components/app-wrapper/index'
import DesktopSideScreen from './components/desktop-side-screen/index'

// Misc
import './style.css'

// Tests
// import { testAddRowData } from './tests';

class App extends Component {
  render() {
    //testAddRowData();

    return (
      <div >
        <header >
        </header>
        <div>
          <AppWrapper>
            <GridTable />
            <AddDataButton />
            <Modal />
          </AppWrapper>
          {this.props.sideScreenOpen && <DesktopSideScreen />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sideScreenOpen: true
})

export default connect(mapStateToProps)(App)
