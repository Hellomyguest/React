import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { OrdersPage } from './pages/OrdersPage/OrdersPage';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <OrdersPage />
    </Provider>
  );
}

export default App;
