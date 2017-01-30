import { ADD_COMMENT, REMOVE_COMMENT } from '../actions/actionTypes'

function postComments(state= [], action) {
  switch(action.type) {
    case ADD_COMMENT:
      console.log('added', state)
      return [...state,{ 
        user: action.author,
        text: action.comment
      }]
    case REMOVE_COMMENT:
      console.log('remove', state)
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    console.log(action)
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state
}

export default comments