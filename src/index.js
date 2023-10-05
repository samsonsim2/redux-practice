import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
 

// Redux tool kit  
import {Provider} from 'react-redux'
// import createSagaMiddleware  from 'redux-saga'
import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware  from 'redux-saga'

//Reducer
import counterReducer from './counterState'
import cocktailReducer from './cocktailState'
import cocktailSaga from './cocktailSaga';
 


// Configure saga and store  
const saga = createSagaMiddleware();


const store = configureStore({
  reducer:{
    counter: counterReducer,
    cocktails : cocktailReducer,


  },
  middleware:[saga]

})
saga.run(cocktailSaga)


//run saga


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
    <App />
  </Provider>
);

 