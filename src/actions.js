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

export { addMenuItem, incrementRowItem };