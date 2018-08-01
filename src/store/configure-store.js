import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { createRouterMiddleware, initialRouterState } from 'connected-next-router'
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers';

export const configureStore = (initialState = {}, { isServer, asPath }) => {
  const routerMiddleware = createRouterMiddleware();
      
  if (isServer) {
    initialState.router = initialRouterState(asPath)
  }

  // Redux Configuration
  const middleware = [];
  const enhancers = [];
  
  middleware.push(ReduxThunk);
  
  if (process.env.NODE_ENV !== 'production') {
    // Logging Middleware
    const logger = createLogger({
      level: 'info',
      collapsed: true,
    });
  
    middleware.push(logger);
  }
  
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = typeof window !== 'undefined' ? 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose
    : compose;
  
  // Apply Middleware & Compose Enhancers
  enhancers.push(
    applyMiddleware(
      routerMiddleware,
      ...middleware
    )
  );
  
  const enhancer = composeEnhancers(...enhancers);
  
  return createStore(
    rootReducer,
    initialState,
    enhancer
  );
}
