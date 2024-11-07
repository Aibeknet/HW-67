import { configureStore, createSlice } from '@reduxjs/toolkit';

const simulatorSlice = createSlice({
  name: 'simulator',
  initialState: {
    input: '',
    correctPinCode: '1337',
    isAuthorized: false,
    isPinInputLocked: false,
    authMessage: '',
    inputColor: 'white',
  },
  reducers: {
    appendInput(state, action) {
      if (state.input.length < 4) {
        state.input += action.payload;
      }
    },
    removeInput(state) {
      state.input = state.input.slice(0, -1);
    },
    checkPin(state) {
      if (state.input === state.correctPinCode) {
        state.isAuthorized = true;
        state.authMessage = 'Access Granted';
        state.inputColor = 'green';
      } else {
        state.isAuthorized = false;
        state.authMessage = 'Access Denied';
        state.inputColor = 'red';
      }
    },
    resetState(state) {
      state.input = '';
      state.isAuthorized = false;
      state.authMessage = '';
      state.inputColor = 'white';
    },
  },
});

const store = configureStore({
  reducer: {
    simulator: simulatorSlice.reducer,
  },
});

export const { appendInput, removeInput, checkPin, resetState } = simulatorSlice.actions;
export default store;