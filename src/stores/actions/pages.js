export const SET_PAGE_ONE = 'SET_PAGE_ONE';
export const SET_PAGE_TWO = 'SET_PAGE_TWO';

export const fetchPageOne = () => {
    return async (dispatch,getState, { axios }) => {
      try {
        const response = await axios.get('/page1.json');
        const {data}=response
         if (!response.status===200) {
          throw new Error('Something went wrong');
        } 
  
        dispatch({ type: SET_PAGE_ONE, page: {...data.slider} });
      } catch (error) {
        throw error;
      }
    };
  };
  export const fetchPageTwo = () => {
    return async (dispatch,getState, { axios }) => {
      try { 
        const response = await axios.get('/page2.json');
       const {data}=response;
       const title=data.calculator.title.replace('Bellotero.io',', Bellotero.io').split(',')
       const loadPage={
         title,
         description:data.calculator.description
       }
       if (!response.status===200) {
        throw new Error('Something went wrong');
      } 
  
        dispatch({ type: SET_PAGE_TWO, page:loadPage });
      } catch (error) {
        throw error;
      }
    };
  };
  