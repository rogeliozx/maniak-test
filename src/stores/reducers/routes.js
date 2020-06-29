import { SET_ROUTES } from '../actions/routes';

const initialState = {
  routes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ROUTES:
      return {
        routes: action.routes,
      };
    default:
      return state;
  }
};
