import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { closeModal, addMenuItem } from '../actions';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';


class Modal extends Component {
    state = {
        childName: 'Soup',
        childIngredients: 'Tomatoes',
        childPrice: 19
    }

    render(){
        const actions = [
            <FlatButton
            label="Cancel"
            secondary={true}
            onClick={this.props.closeModal}
            />
        ];

        return !this.props.data ? null : (
        <div>
            <Dialog
            title={this.props.data.dataPath[this.props.data.dataPath.length -1]}
            actions={actions}
            modal={false}
            open={this.props.modalOpen}
            onRequestClose={this.props.closeModal}
            >
                {/* {this.props.data.ingredients && this.props.data.ingredients.split(' ').map(x => (
                    <Chip
                        key={x}
                    >
                    {x}
                    </Chip>
                ))}
                */}

                <TextField
                    defaultValue={this.state.childName}
                    floatingLabelText="Name of the child"
                    onChange={(e) => this.setState({childName: e.target.value})}
                />
                <TextField
                    defaultValue={this.state.childIngredients}
                    floatingLabelText="ingredients"
                    onChange={(e) => {
                        this.setState({childIngredients: e.target.value})
                    }}
                />
                <TextField
                    defaultValue={this.state.childPrice}
                    floatingLabelText="price"
                    type='number'
                    onChange={(e) => this.setState({childPrice: e.target.value})}
                />
                <br />
                <br />
                <RaisedButton
                    label="Add Child"
                    secondary={true}
                    onClick={() => {
                        console.log(this.state)
                        var name = this.state.childName
                        let dataPath = [...this.props.data.dataPath]
                        var ingredients = this.state.childIngredients
                        var price = this.state.childPrice
                        dataPath.push(name)
                        this.props.addMenuItem({
                            ...this.props.data,
                            dataPath,
                            ingredients,
                            price
                        })
                    }
                }
                />
            </Dialog>
            {/* <Dialog open={true}>
                <div>
                    <h2>Add Or Edit your row</h2>
                    {JSON.stringify(this.props.data)}
                </div>
            </Dialog> */}
        </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        data: state.rowDataReducer.find(x => x.id === state.modalReducer.editId ),
        modalOpen: state.modalReducer.modalOpen
    }
}

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
    addMenuItem: (item) => dispatch(addMenuItem(item))
})

const ConnectedModal = connect(mapStateToProps, mapDispatchToProps)(Modal);

export default ConnectedModal;