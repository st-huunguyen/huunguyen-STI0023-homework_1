import * as types from "../../types"

const initialState = {
  size: {},
  listTopping: [],
  orderValue: 0,
}
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_SIZE: {
      const sizeValue = action.payload.price;
      const toppingValue = state.listTopping.reduce((value, element) => value + element.price, 0);

      return {
        ...state,
        size: action.payload,
        orderValue: sizeValue + toppingValue,
      }
    }
    case types.SELECT_TOPPING: {
      const newList = [...state.listTopping];
      const index = newList.findIndex(item => item.id === action.payload.id);
      if (index < 0) {
        newList.push(action.payload)
      } else {
        newList.splice(index, 1);
      }
      const sizeValue = state.size.price || 0;
      const toppingValue = newList.reduce((value, element) => value + element.price, 0);
      return {
        ...state,
        listTopping: newList,
        orderValue: sizeValue + toppingValue,
      }
    }

    case types.CLEAR_STATE: {
      return {
        ...state,
        size: {},
        listTopping: [],
        orderValue: 0,
      }
    }
    default:
      return state;
  }
};
export default orderReducer;
