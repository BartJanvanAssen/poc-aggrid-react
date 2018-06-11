import React from 'react';

import { Component } from 'react';
import { connect } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';

import { setRowEditActive, moveRowData } from '../../actions';
import { SupplyButtonControl } from '../ButtonControlRenderer.jsx';

import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-material.css';
import './table.css'

var columnDefs = [
  { headerName: "Ingredients", field: "ingredients" },
  { headerName: "Price", field: "price" }
];

class AgGridTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: columnDefs
    }

    this.rowClicked = this.onRowClicked.bind(this);
  }

  onRowClicked(e) {
    this.props.setRowEditActive(e.data.id)
  }

  onRowDragEnd = (event) => {
    if(!event.overNode) {
      return
    }

    const movingFilePath = event.node.data.dataPath;
    const targetPath = event.overNode.data.dataPath;

    this.props.moveRowData(movingFilePath, targetPath);
  }

  render() {
    return (
      <div style={{ height: 1000, width: 1100 }} className="ag-theme-material">
        <AgGridReact
          frameworkComponents={{
            menuCellRenderer: MenuItemCellRender
          }}
          rowData={this.props.menuItems}
          columnDefs={this.state.columnDefs}
          onGridReady={params => params.api.sizeColumnsToFit()}
          onRowClicked={this.rowClicked}
          onRowDragEnd={this.onRowDragEnd}
          animateRows
          treeData
          getDataPath={data => data.dataPath}
          getRowNodeId={data => data.id}
          groupDefaultExpanded={-1}
          rowDragManaged={true}
          animateRows={true}
          enableSorting={true}
          enableFilter={true}
          autoGroupColumnDef={{
            headerName: 'Courses',
            rowDrag: true,
            width: 250,
            cellRendererParams:{
              suppressCount: true,
              innerRenderer: "menuCellRenderer"
            }
          }}
        >
        </AgGridReact>
      </div>
    )
  }
}

class MenuItemCellRender extends Component {
  render() {
    return (
      <span>
        {this.props.data && <img className='icon' src={this.props.data.icon} />}
        {this.props.value}
      </span>
    )
  }
}


const mapStateToAgGridProps = (state) => ({
  menuItems: state.rowDataReducer
})

const mapDispatchToProps = (dispatch) => ({
  setRowEditActive: (id) => dispatch(setRowEditActive(id)),
  moveRowData: (movingFilePath, targetPath) => dispatch(moveRowData(movingFilePath, targetPath))
})

export default connect(mapStateToAgGridProps, mapDispatchToProps)(AgGridTable)
