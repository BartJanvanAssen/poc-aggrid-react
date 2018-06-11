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
    case 'CLOSE_MODAL':
      return {
        ...state,
        modalOpen: false,
        editId: null
      }
    default:
      return state;
  }
};

const SideScreenReducer = (state = {
  open: false
}, action) => {
  switch (action.type) {
    case 'OPEN_SIDE_SCREEN':
      const id = action.id
      return {
        ...state,
        open: true
      }
    case 'CLOSE_SIDE_SCREEN':
      return {
        ...state,
        open: false
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
  itemControl,
  SideScreenReducer
});

export { rowDataReducer, agGridApp };