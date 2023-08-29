import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';

import reducer, { toggleSkillsForm, postSkillsData, fetchSkillsData, SkillsState } from './skillsSlice';

describe('skillsSlice', () => {
    let store: ReturnType<typeof configureStore>;

    beforeEach(() => {
      // Create a Redux store with the reducer
      store = configureStore({
      reducer: {
        reducer,
      },
      });
    });

  test('should handle fetchSkillsData.fulfilled', async () => {
    await store.dispatch(fetchSkillsData('http://localhost:4000/api/skills'));
    const state = store.getState();
    expect(state.reducer.data).toEqual([
      {
        range: 70,
        name: 'React',
      },
      {
        range: 60,
        name: 'JavaScript',
      },
      {
        range: 30,
        name: 'SASS',
      },
    ]);
  });

  test('should handle fetchSkillsData.rejected', async () => {
    await store.dispatch(fetchSkillsData('http://localhost:4000/api/invalid'));
    const state = store.getState();
    expect(state.reducer.data).toEqual([]);
  })

  test('should handle postSkillsData.fulfilled', async () => {
    await store.dispatch(postSkillsData({apiURL: 'http://localhost:4000/api/skills', data:{ range: 70, name: 'React'}}));
    const state = store.getState();
    expect(state.reducer.data).toEqual([
      {
        range: 70,
        name: 'React',
      },
    ]);
  });

  test('should handle postSkillsData.rejected', async () => {
    await store.dispatch(postSkillsData({apiURL: 'http://localhost:4000/api/invalid', data:{ range: 70, name: 'React'}}));
    const state = store.getState();
    expect(state.reducer.data).toEqual([]);
  })

  test('should return the initial state', () => {
    const previousState: SkillsState = {
      isFormOpen: false,
      data: [],
      isLoading: false,
      error: null
    };

    expect(reducer(previousState, {type: 'unknown'})).toEqual(
      {
        isFormOpen: false,
        data: [],
        isLoading: false,
        error: null
      }
    );
  })

  test('should change the isFormOpen to true', () => {
    const previousState: SkillsState = {
      isFormOpen: false,
      data: [],
      isLoading: false,
      error: null
    };

    expect(reducer(previousState, toggleSkillsForm())).toEqual(
      {
        isFormOpen: true,
        data: [],
        isLoading: false,
        error: null
      }
    );
  })

  test('should change the isFormOpen to false', () => {
    const previousState: SkillsState = {
      isFormOpen: true,
      data: [],
      isLoading: false,
      error: null
    };

    expect(reducer(previousState, toggleSkillsForm())).toEqual(
      {
        isFormOpen: false,
        data: [],
        isLoading: false,
        error: null
      }
    );
  })
});