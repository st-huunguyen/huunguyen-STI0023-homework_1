import * as types from "../../types"

export const selectSize = (payload) => {
  return {
    type: types.SELECT_SIZE,
    payload
  }
}

export const selectTopping = (payload) => {
  return {
    type: types.SELECT_TOPPING,
    payload
  }
}

export const clearState = () => {
  return {
    type: types.CLEAR_STATE,
  }
}
