import { createStore, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { browserHistory } from 'react-router'
import dataService from './middleware/dataService'

import rootReducer from './reducers/index'

import comments from './data/comments'
import posts from './data/posts'

const defaultState = {
  posts,
  comments
}

const store = createStore(rootReducer, defaultState, composeWithDevTools(
  applyMiddleware(dataService)
))

export const history = syncHistoryWithStore(browserHistory, store)

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store
