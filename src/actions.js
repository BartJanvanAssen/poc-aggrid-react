const addMenuItem = (menuItem) => {
  return {
    type: 'ADD_ROWDATA',
    menuItem
  }
};

const moveRowData = (pathToMove, targetPath) => {
  return {
    type: 'MOVE_ROWDATA',
    pathToMove,
    targetPath
  }
};

const setRowEditActive = (id) => {
  return {
    type: 'ACTIVATE_MODAL',
    id
  }
};

const closeModal = (id) => {
  return {
    type: 'CLOSE_MODAL'
  }
};

export { addMenuItem, moveRowData, setRowEditActive, closeModal };