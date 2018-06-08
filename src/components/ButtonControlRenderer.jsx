import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton';

const SupplyButtonControl = (params) => {

  console.log("params", params.value);

    return (
      <div>
        <FlatButton mini color="primary" aria-label="add" onClick={params.onclick}>
          +
        </FlatButton>
      </div>
    );
}

export { SupplyButtonControl };