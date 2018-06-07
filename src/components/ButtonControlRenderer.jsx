import React, { Component } from 'react';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

const SupplyButtonControl = (params) => {

  console.log("params", params.value);

    return (
      <div>
        <Button mini color="primary" aria-label="add" onClick={params.onclick}>
          <AddIcon />
        </Button>
      </div>
    );
}

export { SupplyButtonControl };