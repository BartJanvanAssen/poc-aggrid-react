import { combineReducers } from 'redux';

const rowDataReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ROWDATA':
      const item = action.menuItem
      item.id = state.length
      return [
        ...state,
        item
      ];
    default:
      return state;
  }
};

const modalReducer = (state = {
  modalOpen: false,
  editId: null
}, action) => {
  switch (action.type) {
    case 'ACTIVATE_MODAL':
      const id = action.id
      return {
        ...state,
        modalOpen: true,
        editId: id
      }
    default:
      return state;
  }
};

const itemControl = (state = [], action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state;
    default:
      return state;
  }
};

const agGridApp = combineReducers({
  rowDataReducer,
  modalReducer,
  itemControl
});

export { rowDataReducer, agGridApp };