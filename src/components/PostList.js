import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

function PostList({ posts, fetchPostsAndUsers }) {

  const renderList = () => {
    return posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="descrition">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    })
  }

  useEffect(() => {
    fetchPostsAndUsers();
  }, []);
  console.log('posts: ', posts);
  return (
    <div className="ui relaxed divided list">
      {renderList()}
    </div>
  )
}

const mapStateToProps = state =>({
  posts: state.posts
})

export default connect(mapStateToProps,
  { fetchPostsAndUsers }
)(PostList);
