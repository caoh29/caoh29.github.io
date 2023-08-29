import reducer, { togglePanel, PanelState } from './panelSlice';

describe('panelSlice', () => {
  test('should return the initial state', () => {
    expect(reducer({isOpen: false}, {type: 'unknown'})).toEqual(
      { isOpen: false }
    );
  })

  test('should change the isOpen to true', () => {
    const previousState: PanelState = {
      isOpen: false
    };

    expect(reducer(previousState, togglePanel())).toEqual(
      { isOpen: true }
    );
  })

  test('should change the isOpen to false', () => {
    const previousState: PanelState = {
      isOpen: true
    };

    expect(reducer(previousState, togglePanel())).toEqual(
      { isOpen: false }
    );
  })
});