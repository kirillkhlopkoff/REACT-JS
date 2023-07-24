import p from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {

  let postsElements = props.posts.map((p) => <Post message={p.message} id={p.id} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className={p.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add new Post</button>
        </div>
      </div>
      <div className={p.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;