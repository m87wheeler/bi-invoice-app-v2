export const formReducer = (initialState, action) => {
  switch (action.type) {
    case "INPUT":
      let newInputState = initialState.map((input) =>
        input.name === action.name
          ? {
              ...input,
              value: action.value,
            }
          : input
      );
      return newInputState;
    case "ALERT":
      let newAlertState = initialState.map((input) =>
        input.name === action.name
          ? {
              ...input,
              alert: action.alert,
            }
          : input
      );
      return newAlertState;
    default:
      return initialState;
  }
};
