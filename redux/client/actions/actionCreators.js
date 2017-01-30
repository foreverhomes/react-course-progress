import * as actionTypes from './actionTypes'

export function increment(index) {
  return {
    type: actionTypes.INCREMENT_LIKES,
    index
  }
}

export function addComment(postId, author, comment) {
  return {
    type: actionTypes.ADD_COMMENT,
    postId,
    author,
    comment
  }
}

export function removeComment(postId, index) {
  return {
    type: actionTypes.REMOVE_COMMENT,
    postId,
    index
  }
}

export function getAllPhotos() {
  console.log('gittin')
  return {
    type: actionTypes.GET_ALL_PHOTO_DATA,
    date: Date.now()
  }
}