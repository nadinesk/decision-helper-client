import React from 'react';
import { render} from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import rootReducer from './reducers'
import {createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';


 const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)



render( 
	<Provider store={store} >
		<App /> 
	</Provider>, 
	document.getElementById('root')

)
