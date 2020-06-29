export const SET_ROUTES = 'SET_ROUTES';

export const fetchRoutes = () => {
  return async (dispatch,getState, { axios }) => {
    try {
      const response = await axios.get('/app.json');
      const { menu } = response.data;
      const loadRoutes = menu.items;
      /*  if (!response.ok) {
        throw new Error('Something went wrong');
      } */

      dispatch({ type: SET_ROUTES, routes: loadRoutes });
    } catch (error) {
      throw error;
    }
  };
};
