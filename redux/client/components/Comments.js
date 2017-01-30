import React from 'react'

class Comments extends React.Component {

  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderComment = this.renderComment.bind(this)
  }

  renderComment(comment, i) {
    const { postId } = this.props.params
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment" onClick={() => this.props.removeComment(postId, i)}>&times;</button>
        </p>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault()

    const { postId } = this.props.params
    const author = this.refs.author.value
    const text = this.refs.text.value

    console.log(postId, author, text)

    this.props.addComment(postId, author, text)
    this.refs.commentForm.reset()
  }

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author "/>
          <input type="text" ref="text" placeholder="text "/>
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
}

export default Comments