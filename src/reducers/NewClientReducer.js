import { v4 as uuidv4 } from "uuid";

export const clientState = {
  currentId: "",
  client: {
    id: "",
    client: "",
    type: "private",
    contact: "",
    phone: "",
    mobile: "",
    email: "",
    house_no: "",
    postcode: "",
    date_added: new Date(),
    active: true,
  },
};

export const clientReducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return {
        ...state,
        client: action.payload,
      };
    case "UPDATE_ID":
      let id = uuidv4();
      return {
        ...state,
        currentId: id,
        client: {
          ...state.client,
          id,
        },
      };
    case "INPUT":
      return {
        ...state,
        client: {
          ...state.client,
          [action.payload.key]: action.payload.value,
        },
      };
    case "RESET":
      return {
        ...state,
        client: {
          id: "",
          client: "",
          type: "private",
          contact: "",
          phone: "",
          mobile: "",
          email: "",
          house_no: "",
          postcode: "",
          date_added: new Date(),
          active: true,
        },
      };
    case "SET_ACTIVE":
      return {
        ...state,
        client: {
          ...state.client,
          active: action.payload,
        },
      };
    default:
      return state;
  }
};
