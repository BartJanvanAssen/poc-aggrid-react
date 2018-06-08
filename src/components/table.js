import React from 'react';

import { Component } from 'react';
import { connect } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';

import { setRowEditActive } from '../actions';
import { SupplyButtonControl } from './ButtonControlRenderer.jsx';

import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-material.css';

var columnDefs = [
  // { headerName: "Description", field: "description" },
  { headerName: "Ingredients", field: "ingredients" },
  { headerName: "Price", field: "price" }
];

class AgGridTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowData: [],
      columnDefs: columnDefs
    };

    this.onGridReady = this.onGridReady.bind(this);
    this.rowClicked = this.onRowClicked.bind(this);
  };

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  onRowClicked(e) {

    this.props.setRowEditActive(e.data.id)
  }

  componentWillReceiveProps(props) {
    this.setState({ rowData: props.menuItems });
  };

  render() {
    return (
      <div style={{ height: 1500, width: 1500 }} className="ag-theme-material">
        <AgGridReact
          rowData={this.state.rowData}
          columnDefs={this.state.columnDefs}
          onGridReady={this.onGridReady}
          onRowClicked={this.rowClicked}
          animateRows
          rowClicked={this.rowClicked}
          enableFilter
          enableSorting
          treeData
          getDataPath={data => data.dataPath}
          enableRangeSelection
          groupDefaultExpanded={-1}
          autoGroupColumnDef={{
            headerName: 'Courses',
            rowDrag: true,
            width: 250,
            cellRendererParams:{
              suppressCount: true,
            }
          }}
        >
        </AgGridReact>
      </div>
    )
  }
}

const mapStateToAgGridProps = (state) => ({
  menuItems: state.rowDataReducer
})

const mapDispatchToProps = (dispatch) => ({
  setRowEditActive: (id) => dispatch(setRowEditActive(id))
})

const GridTable = connect(mapStateToAgGridProps, mapDispatchToProps)(AgGridTable);

export default GridTable
