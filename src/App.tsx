import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ScreenKeyboard from './components/ScreenKeyboard/ScreenKeyboard.tsx';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="text-center my-5">Enter PIN</h1>
        <ScreenKeyboard />
      </div>
    </Provider>
  );
};

export default App;