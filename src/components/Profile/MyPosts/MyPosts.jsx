import p from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
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
        <Post message='Hi! How are you?' like='3' />
        <Post message="It's my first post" like='1' />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default MyPosts;