import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appendInput, removeInput, checkPin } from '../../store';

interface PasswordState {
  input: string;
  inputColor: string;
  authMessage: string;
}

interface RootState {
  simulator: PasswordState;
}

const ScreenKeyboard: React.FC = () => {
  const dispatch = useDispatch();

  const { input, inputColor, authMessage } = useSelector((state: RootState) => state.simulator);

  const handleClick = (symbol: string) => {
    if (symbol === '<') {
      dispatch(removeInput());
    } else if (symbol === 'E') {
      dispatch(checkPin());
    } else if (input.length < 4) {
      dispatch(appendInput(symbol));
    }
  };

  const renderPinButton = (symbol: string) => (
    <button
      key={symbol}
      onClick={() => handleClick(symbol)}
      className="btn btn-outline-success m-2 w-25 p-2"
    >
      {symbol}
    </button>
  );

  return (
    <div className="container w-25 mt-5 shadow p-5 mb-5 bg-body-tertiary rounded">
      <div
        className={`alert text-center p-3 ${inputColor === 'green' ? 'alert-success' : inputColor === 'red' ? 'alert-danger' : 'alert-light'}`}
        role="alert"
      >
        <h3>{input.replace(/./g, '*')}</h3>
      </div>

      <div className="message text-center mb-3">
        <p className="h5">{authMessage}</p>
      </div>

      <div className="row justify-content-center">
        {['7', '8', '9'].map(renderPinButton)}
      </div>
      <div className="row justify-content-center">
        {['4', '5', '6'].map(renderPinButton)}
      </div>
      <div className="row justify-content-center">
        {['1', '2', '3'].map(renderPinButton)}
      </div>
      <div className="row justify-content-center">
        {['<', '0', 'E'].map(renderPinButton)}
      </div>
    </div>
  );
};

export default ScreenKeyboard;
