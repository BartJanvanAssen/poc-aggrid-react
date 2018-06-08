import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';

const Modal = (props) => {
    return (
      <div>
        <Dialog open={props.modalOpen}>
            <div>
                <h2>Add Or Edit your row</h2>
            </div>
        </Dialog>
      </div>
    );
}


const mapStateToProps = (state) => {
    return {
        data: state.rowDataReducer.find(x => x.id === state.modalReducer.editId ),
        modalOpen: state.modalReducer.modalOpen
    }
}
  
const mapDispatchToProps = (dispatch) => ({
})
  
const ConnectedModal = connect(mapStateToProps, mapDispatchToProps)(Modal);
  
export default ConnectedModal;