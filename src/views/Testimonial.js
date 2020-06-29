import React, { useState, useEffect, useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import Title from '../components/ui/Title';
import ReviewPerson from '../components/ui/ReviewPerson';
import ReviewComment from '../components/ui/ReviewComment';
import ButtonContainer from '../components/ui/ButtonContainer';
import BadgeContainer from '../components/ui/BadgeContainer';
import ArrowButtons from '../components/ui/ArrowsButtons';
import Loading from '../components/ui/Loading';
import { useSelector, useDispatch } from 'react-redux';
import * as pageActions from '../stores/actions/pages';
import testimonialStyles from '../constants/TestimonialStyles';

const Testimonial = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [numberReview, setNumberReview] = useState(0);
  const page = useSelector((state) => state.page.page);
  const dispatch = useDispatch();
  const loadPage = useCallback(async () => {
    try {
      await dispatch(pageActions.fetchPageOne());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
  useEffect(() => {
    loadPage().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadPage, page]);
  useEffect(() => {}, [numberReview]);

  const changeSlide = (operation) => {
    if (numberReview + operation === page.reviews.length) {
      return;
    }
    if (numberReview + operation >= 0) {
      setNumberReview((numberReview) => numberReview + operation);
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
    <div style={testimonialStyles.root}>
      <Grid
        container
        spacing={8}
        direction='row'
        justify='center'
        alignItems='center'
      >
        <Grid item xs={11}>
          <Title size={2} style={testimonialStyles.title}>
            {page.title}
          </Title>
        </Grid>
        <Grid item container xs={10} style={testimonialStyles.review}>
          <Grid item xs={4}>
            <ReviewPerson
              position={
                page.reviews
                  ? page.reviews[numberReview].position
                  : 'loading ...'
              }
              name={
                page.reviews ? page.reviews[numberReview].name : 'loading ...'
              }
            />
          </Grid>
          <Grid item xs={8}>
            <ReviewComment>
              {page.reviews
                ? page.reviews[numberReview].comment
                : 'loading ...'}
            </ReviewComment>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction='row-reverse'
          alignItems='center'
          xs={10}
          style={testimonialStyles.buttonGrid}
        >
          <ButtonContainer>
            <BadgeContainer>
              {numberReview + 1}/{page.reviews ? page.reviews.length : 0}
            </BadgeContainer>
            <ArrowButtons operation={changeSlide} arrow='back' />
            <ArrowButtons operation={changeSlide} />
          </ButtonContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default Testimonial;
