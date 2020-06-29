import React, { useEffect, useCallback, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as routesActions from '../stores/actions/routes';
import Testimonial from '../views/Testimonial';
import Configurator from '../views/Configurator';
import Navbar from '../components/ui/Navbar';
import Loading from '../components/ui/Loading';

const Approuter = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const routes = useSelector((state) => state.routes);
  const dispatch = useDispatch();
  const loadRoutes = useCallback(async () => {
    try {
      await dispatch(routesActions.fetchRoutes());
    } catch (error) {
      console.log(error);
      
    }
  }, [dispatch]);
  useEffect(() => {
    loadRoutes().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadRoutes]);
  if (isLoading) {
    return (
     <>
       <Loading/>
     </>
    );
  }
  const divStyle = {
    root: {
      padding: '10rem',
    },
  };
  return (
    <Router>
      <Navbar menu={routes}/>
      <div style={divStyle.root}>
        <Switch>
          <Route exact path='/page-1' component={Testimonial} />
          <Route exact path='/' component={Testimonial} />
          <Route exact path='/page-2' component={Configurator} />
        </Switch>
      </div>
    </Router>
  );
};
export default Approuter;
