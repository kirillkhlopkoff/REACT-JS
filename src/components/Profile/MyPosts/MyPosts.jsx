import p from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let posts = [
    { id: 1, message: 'Hi! How are you?', like:'3' },
    { id: 2, message: "It's my first post", like:'12' }
  ];

  let postsElements = posts.map( (p) => <Post message={p.message} id={p.id} /> );

  return (
    <div className={p.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
        <textarea></textarea>
          </div>
          <div>
            <button>Add new Post</button>
          </div>
      </div>
      <div className={p.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;