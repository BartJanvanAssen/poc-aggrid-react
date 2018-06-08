import React from 'react'
import { connect } from 'react-redux';
import { addMenuItem } from '../actions'

import RaisedButton from 'material-ui/RaisedButton';
import menuData from '../data/temp-data.json'

const AddRowData = (props) => {
    return (
        <div>
            <RaisedButton onClick={props.onClick} label="Add Demo Data" secondary={true} />
        </div>
    )
};

const mapStateToProps = (state) => ({
    rowData: state.rowDataReducer
})

const mapDispatchToProps = (dispatch) => {

    const dispatchAddRowData = (data) => {
        data.menu.forEach(item => dispatch(addMenuItem(item)));
    };

    return {
        onClick: (id) => {
            dispatchAddRowData(menuData)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRowData)
