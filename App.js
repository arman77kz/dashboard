import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store/index';
import AppContent from './src/AppContent';


const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};


export default React.memo(App)

