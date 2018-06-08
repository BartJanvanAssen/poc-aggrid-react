const addMenuItem = (menuItem) => {
  return {
    type: 'ADD_ROWDATA',
    menuItem
  }
};

const incrementRowItem = (row) => {
  var quantity = 123

  return {
    type: 'INCREMENT',
    id: row.id,
    quantity
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

export { addMenuItem, incrementRowItem, setRowEditActive, closeModal };