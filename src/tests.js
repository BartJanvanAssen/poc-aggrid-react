import expect from 'expect';
import deepFreeze from 'deep-freeze';
import { rowDataReducer } from './reducers';

const testAddRowData = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_ROWDATA',
    id: "eb0a3c58-3632-45ab-923f-53dedd795e8b",
    row: {
      "makerName": "Fuji Xerox",
      "serialNoLink": {
        "serialNo": "104313",
        "deviceId": "eb0a3c58-3632-45ab-923f-53dedd795e8b"
      },
      "markerSuppliesRemaining": {
        "cyan": {
          "key": null,
          "colorName": "C:",
          "remaining": 36,
          "toolTipDisplay": "Cyan: 36%"
        },
        "magenta": {
          "key": null,
          "colorName": "M:",
          "remaining": 52,
          "toolTipDisplay": "Magenta: 52%"
        },
        "yellow": {
          "key": null,
          "colorName": "Y:",
          "remaining": 48,
          "toolTipDisplay": "Yellow: 48%"
        },
        "black": {
          "key": null,
          "colorName": "K:",
          "remaining": 88,
          "toolTipDisplay": "Black: 88%"
        }
      }
    }
  }
  const stateAfter = [
    {
      id: "eb0a3c58-3632-45ab-923f-53dedd795e8b",
      row: {
        "makerName": "Fuji Xerox",
        "serialNoLink": {
          "serialNo": "104313",
          "deviceId": "eb0a3c58-3632-45ab-923f-53dedd795e8b"
        },
        "markerSuppliesRemaining": {
          "cyan": {
            "key": null,
            "colorName": "C:",
            "remaining": 36,
            "toolTipDisplay": "Cyan: 36%"
          },
          "magenta": {
            "key": null,
            "colorName": "M:",
            "remaining": 52,
            "toolTipDisplay": "Magenta: 52%"
          },
          "yellow": {
            "key": null,
            "colorName": "Y:",
            "remaining": 48,
            "toolTipDisplay": "Yellow: 48%"
          },
          "black": {
            "key": null,
            "colorName": "K:",
            "remaining": 88,
            "toolTipDisplay": "Black: 88%"
          }
        }
      }
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(stateAfter);

  expect(rowDataReducer(stateBefore, action)).toEqual(stateAfter);

  console.log("Success!");
};

export { testAddRowData };