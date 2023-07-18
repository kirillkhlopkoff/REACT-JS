import c from './Post.module.css';

const Post = (props) => {
  return (
    <div className={c.item}>
      <img className={c.avatar} src='https://abrakadabra.fun/uploads/posts/2022-03/1647943494_1-abrakadabra-fun-p-gomer-avatarka-1.jpg' />
      { props.message }
      
      <div>
        <span>like</span> {props.like}
      </div>
    </div>
  );
}

export default Post;