import React from 'react'
import { connect } from 'react-redux';
import { addMenuItem } from '../actions'

import Button from 'material-ui/Button'
import menuData from '../data/temp-data.json'

const AddRowData = (props) => {
    return (
        <div>
            <Button onClick={props.onClick} variant='raised' color="primary">
                Add Demo Data
            </Button>
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
