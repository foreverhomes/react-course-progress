import React from 'react'
import Photo from './Photo'

class PhotoGrid extends React.Component {

  render() {
    return (
      <div>
        <button onClick={(e) => this.props.getAllPhotos()}>Refresh Data</button>
        <div className="photo-grid">
          {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
        </div>
      </div>
    )
  }
}

export default PhotoGrid