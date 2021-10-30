
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import  rootReducer  from './reducer/index'


export const store = createStore(rootReducer,applyMiddleware(thunk))



// const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({});
export default function configureStore(preloadedState = {}) {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk, logger)),
  );
//   sagaMiddleware.run(rootWatchers);
  return store;
}