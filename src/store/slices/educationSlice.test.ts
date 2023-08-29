import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';

import reducer, { toggleEducationForm, postTimelineData, fetchTimelineData, EducationState } from './educationSlice';

describe('educationSlice', () => {
    let store: ReturnType<typeof configureStore>;

    beforeEach(() => {
      // Create a Redux store with the reducer
      store = configureStore({
      reducer: {
        reducer,
      },
      });
    });

  test('should handle fetchTimelineData.fulfilled', async () => {
    await store.dispatch(fetchTimelineData('http://localhost:4000/api/educations'));
    const state = store.getState();
    expect(state.reducer.content).toEqual([
      {
        date: 2023,
        title: 'Computer Programming Diploma',
        text: 'Georgian College @ ILAC, Toronto, Canada',
      },
      {
        date: 2021,
        title: 'Bachelor in Mechanical Engineering',
        text: '\n' + '              Universidad Industrial de Santander, Bucaramanga, Colombia \n' + "              My thesis consisted of the creation of a Digital Learning Object based on Numerical Methods using eXe Learning under IEEE's compliance standards\n" + '            ',
      },
      {
        date: 2014,
        title: 'High School Degree',
        text: 'Colegio Franciscano del Virrey Solís, Bucaramanga, Colombia',
      },
    ]);
  });

  test('should handle fetchTimelineData.rejected', async () => {
    await store.dispatch(fetchTimelineData('http://localhost:4000/api/invalid'));
    const state = store.getState();
    expect(state.reducer.content).toEqual([]);
  })

  test('should handle postTimelineData.fulfilled', async () => {
    await store.dispatch(postTimelineData({apiURL: 'http://localhost:4000/api/educations', data:{ range: 70, name: 'React'}}));
    const state = store.getState();
    expect(state.reducer.content).toEqual([
      {
        range: 70,
        name: 'React',
      },
    ]);
  });

  test('should handle postTimelineData.rejected', async () => {
    await store.dispatch(postTimelineData({apiURL: 'http://localhost:4000/api/invalid', data:{ range: 70, name: 'React'}}));
    const state = store.getState();
    expect(state.reducer.content).toEqual([]);
  })

  test('should return the initial state', () => {
    const previousState: EducationState = {
      isFormOpen: false,
      content: [],
      isLoading: false,
      error: null
    };

    expect(reducer(previousState, {type: 'unknown'})).toEqual(
      {
        isFormOpen: false,
        content: [],
        isLoading: false,
        error: null
      }
    );
  })

  test('should change the isFormOpen to true', () => {
    const previousState: EducationState = {
      isFormOpen: false,
      content: [],
      isLoading: false,
      error: null
    };

    expect(reducer(previousState, toggleEducationForm())).toEqual(
      {
        isFormOpen: true,
        content: [],
        isLoading: false,
        error: null
      }
    );
  })

  test('should change the isFormOpen to false', () => {
    const previousState: EducationState = {
      isFormOpen: true,
      content: [],
      isLoading: false,
      error: null
    };

    expect(reducer(previousState, toggleEducationForm())).toEqual(
      {
        isFormOpen: false,
        content: [],
        isLoading: false,
        error: null
      }
    );
  })
});