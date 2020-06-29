import { SET_PAGE_ONE, SET_PAGE_TWO } from '../actions/pages';

const initialState = {
  page: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE_ONE:
      return {
        page: action.page,
      };
    case SET_PAGE_TWO:
      return {
        page: action.page,
      };

    default:
      return state;
  }
};
