import { combineReducers } from 'redux';

const same = (arr1, arr2) => {
  return arr1.toString() === arr2.toString()
}

const moveRowData = (exitingRows, pathToMove, targetPath) => {
  if (same(pathToMove, targetPath)) {
    return exitingRows
  }

  return exitingRows.slice()
    .map(row => same(row.dataPath.slice(0, pathToMove.length), pathToMove) ?
      ({
        ...row,
        dataPath: targetPath.concat(row.dataPath.slice(pathToMove.length - 1))
      }) : row
    );
};

const rowDataReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ROWDATA':
      const item = action.menuItem
      item.id = state.length
      return [
        ...state,
        item
      ];
    case 'MOVE_ROWDATA':
      return moveRowData(state, action.pathToMove, action.targetPath)
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