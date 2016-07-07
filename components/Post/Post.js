import React, { PropTypes } from 'react';
// import Layout from '../Layout'

function Post () {

    // var post = this.params.post
    return (
      <div className='HELLO IM POST'>
        {/*<div
          className='mb4'
          dangerouslySetInnerHTML={{ __html: post.html }} />*/}
      </div>
    )
  }


Post.propTypes = {
  params: React.PropTypes.object,
  posts: React.PropTypes.array
}

export default Post
