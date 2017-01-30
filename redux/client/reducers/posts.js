import * as actionTypes from '../actions/actionTypes'

function posts(state = [], action) {
  console.log(action)
  switch (action.type) {
    case actionTypes.INCREMENT_LIKES:
      console.log('add like')
      const i = action.index
      return [
        ...state.slice(0,i),
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1)
      ]
    case actionTypes.GET_ALL_PHOTO_DATA_RECEIVED:
      return [...action.data]
    default:
      return state
  }
  
}

export default posts