import { INCREMENT, DECREMENT, RESET } from "./actions";

const initialState = {
  count: 0,
};

// reducer function
const counterReducer = (state = initialState, action) => {
  // switcth statement on the behalf of action.type
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    case RESET:
      return {
        count: 0,
      };
    default:
      return state;
  }
};
export default counterReducer;

// 3 things
// pure functions
// never mutate the state
// define the initialState
