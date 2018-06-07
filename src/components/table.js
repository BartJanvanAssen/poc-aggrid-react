import React from 'react';

import { Component } from 'react';
import { connect } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';

import { incrementRowItem } from '../actions';
import { SupplyButtonControl } from './ButtonControlRenderer.jsx';

import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-material.css';

var columnDefs = [
  { headerName: "Course", field: "name", rowGroup: true },
  { headerName: "Control", cellRendererFramework: SupplyButtonControl, cellRendererParams: { value: 2, onclick: incrementRowItem} },
  { headerName: "Product Name", field: "productName" },
  { headerName: "Supply %", field: "markerSuppliesRemaining.black.remaining", cellRenderer: "agAnimateSlideCellRenderer" }
];

class AgGridTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowData: [],
      columnDefs: columnDefs
    };

    this.onGridReady = this.onGridReady.bind(this);
  };

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  componentWillReceiveProps(props) {
    this.setState({ rowData: props.menuItems });
  };

  render() {
    return (
      <div style={{ height: 500, width: 1500 }} className="ag-theme-material">
        <AgGridReact
          rowData={this.state.rowData}
          columnDefs={this.state.columnDefs}
          onGridReady={this.onGridReady}
          animateRows
          enableFilter
          enableSorting
          enableRangeSelection
        >
        </AgGridReact>
      </div>
    )
  }
}

const mapStateToAgGridProps = (state) => ({
  menuItems: state.rowDataReducer
})

const GridTable = connect(mapStateToAgGridProps, null)(AgGridTable);

export default GridTable