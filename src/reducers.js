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
  itemControl
});

export { rowDataReducer, agGridApp };