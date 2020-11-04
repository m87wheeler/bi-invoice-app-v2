// takes initial state {reveal: false, confirm: false}

export const modalReducer = (initialState, action) => {
  switch (action.type) {
    case "REVEAL":
      let revealState = true;
      return revealState;
    case "HIDE":
      let hideState = false;
      return hideState;
    default:
      return initialState;
  }
};
