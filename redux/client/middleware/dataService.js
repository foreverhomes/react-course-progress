import request  from 'superagent'
import * as actionTypes from '../actions/actionTypes'

const dataService = store => next => action => {
  console.log(action.type)
  next(action)
  switch (action.type) {
    case actionTypes.GET_ALL_PHOTO_DATA:
      request
        .get('/data/posts.json')
        .end((err, res) => {
          if (err) {
            return next({
              type: actionTypes.GET_ALL_PHOTO_DATA_ERROR,
              err
            })

          }
          const data = JSON.parse(res.text)
          console.log(data)
          return next({
            type: actionTypes.GET_ALL_PHOTO_DATA_RECEIVED,
            data
          })
        })
      break
    case actionTypes.GET_PHOTO_DATA:
      console.log('get single photo')

    case actionTypes.GET_ALL_PHOTO_DATA_RECEIVED:
      console.log('all data', action);

    default:
      break
  }

}

export default dataService
