// questo file si occuperà di creare il nostro Redux Store all'avvio dell'applicazione

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookSelectedReducer from "../reducers/bookSelectedReducer";
import cartReducer from "../reducers/cartReducer";
import userReducer from "../reducers/userReducer";
import booksReducer from "../reducers/booksReducer";
// import mainReducer from "../reducers";

// non avremo più un reducer principale,
// ma singoli reducers che verranno combinati insieme in un unico oggetto di stato anche grazie alla funzione combineReducers

const rootReducer = combineReducers({
  cart: cartReducer,
  books: booksReducer,
  bookSelected: bookSelectedReducer,
  user: userReducer
});

// questa funzione si occuperà di creare lo Store grazie ad una funzione esportata dal pacchetto @reduxjs/toolkit,
// la funzione ci chiede delle opzioni (tra cui il nostro reducer) e restituirà un oggetto di stato che avermo poi all'interno della variabile store.
const store = configureStore({
  reducer: rootReducer
});

export default store;
