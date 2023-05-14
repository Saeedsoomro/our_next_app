import { createContext, useReducer } from "react";
import Cookies from "js-cookie";
export const Store = createContext();

const initialState = {
  order: Cookies.get("order")
    ? JSON.parse(Cookies.get("order"))
    : {
        userInfo: {},
        serviceInfo: {},
      },
};

function reducer(state, action) {
  switch (action.type) {
    case "USER_ADD_APPOINTMENT": {
      const newUser = action.payload;
      Cookies.set(
        "order",
        JSON.stringify({ ...state.order, userInfo: newUser })
      );
      return {
        ...state,
        order: { ...state.order, userInfo: newUser },
      };
    }
    case "SERVICE_ADD_APPOINTMENT": {
      const newSerive = action.payload;
      Cookies.set(
        "order",
        JSON.stringify({ ...state.order, serviceInfo: newSerive })
      );
      return {
        ...state,
        order: { ...state.order, serviceInfo: newSerive },
      };
    }

    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
