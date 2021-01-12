const { ADD_MESSAGE } = require("./message.action")

const initialState = {message: "Message 0 du store"}
const messageReducer = (state=initialState, action) => {
  if(action.type === ADD_MESSAGE) {
    return Object.assign({}, state, {message: action.payload})
  }
  return state;
}

export default messageReducer;