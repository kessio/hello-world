import { GET_RANDOM_GREETING } from '../actions/messages';

const initialState = {
  greeting: '',
};

const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RANDOM_GREETING:
      return { ...state, greeting: action.payload };
    default:
      return state;
  }
};

export default greetingsReducer;
