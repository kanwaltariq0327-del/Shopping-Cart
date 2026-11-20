import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productsReducer, { productsFetch } from "./features/productsSlice.js";
import cartReducer, { getTotals } from './features/cartSlice.js';
import { productsApi } from './features/productsAPI.js';


const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  }
})

store.dispatch(productsFetch());
store.dispatch(getTotals());

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
