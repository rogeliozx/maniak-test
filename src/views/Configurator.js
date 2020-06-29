import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as pageActions from '../stores/actions/pages';
import Grid from '@material-ui/core/Grid';
import Title from '../components/ui/Title';
import ProducDesc from '../components/calculator/ProducDesc';
import SliderCalculator from '../components/calculator/SliderCalculator';
import Description from '../components/ui/Description';
import Amount from '../components/ui/Amount';
import Calculator from '../models/Calculator';
import configuratorStyles from '../constants/configuratorStyles';
import Loading from '../components/ui/Loading';

const Configurator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [foodCostSavingState, setFoodCostSavingState] = useState(0);
  const [annualSavingState, setAnaulSavingState] = useState(0);
  const page = useSelector((state) => state.page.page);
  const dispatch = useDispatch();
  const loadPage = useCallback(async () => {
    try {
      await dispatch(pageActions.fetchPageTwo());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
  useEffect(() => {
    if (isLoading) {
      loadPage().then(() => {
        setIsLoading(false);
      });
    }
  }, [dispatch, loadPage, page, isLoading]);
  useEffect(() => {}, [annualSavingState, foodCostSavingState]);
  const stimateFoodCostSaving = (mothIngredient) => {
    const calculate = new Calculator();
    if (calculate.isValidValue(mothIngredient)) {
      const result = calculate.foodCostSaving(mothIngredient);
      setFoodCostSavingState(result);
    }
  };
  const annualSavings = (employees) => {
    const calculate = new Calculator();
    if (calculate.isValidValue(employees)) {
      const result = calculate.annualSavings(employees, foodCostSavingState);
      setAnaulSavingState(result);
    }
  };
  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <div style={configuratorStyles.root}>
      <Grid
        container
        spacing={8}
        direction='row'
        justify='center'
        alignItems='center'
      >
        <Grid item xs={6}>
          {page.title.map((navItem, index) => (
            <Title size={2} key={index} style={configuratorStyles.title}>
              {navItem}
            </Title>
          ))}
        </Grid>
        <Grid item xs={6}>
          <SliderCalculator
            money
            min={10}
            max={100}
            calculate={stimateFoodCostSaving}
          />
        </Grid>
        <Grid item xs={6} style={configuratorStyles.descCotainer}>
          <ProducDesc>{page.description}</ProducDesc>
        </Grid>
        <Grid item xs={6}>
          <SliderCalculator min={1} max={10} calculate={annualSavings} />
        </Grid>
        <Grid
          item
          xs={12}
          container
          direction='row-reverse'
          alignItems='center'
        >
          <Grid item x={3}>
            <Amount>
              {annualSavingState ? annualSavingState.toFixed(3) : 0}
            </Amount>
            <Description style={{ width: '17rem' }}>
              Your estimated annual savings
            </Description>
          </Grid>
          <Grid item x={3}>
            <Amount>
              {foodCostSavingState ? foodCostSavingState.toFixed(3) : 0}
            </Amount>
            <Description style={{ width: '17rem' }}>
              Estimated cost food savings
            </Description>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Configurator;
