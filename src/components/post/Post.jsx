import './post.css';
import { Link } from 'react-router-dom';

export default function Post(data) {
  return (
      
    <div className="post">  
       <img className="postImg" src={data.img} alt=""/>
       <span className="postDate" > {data.date} day ago </span>
      
       <span className="postTitle">
       <Link to={`post/${data.id}`} state={{data}} className="link">
            {data.title}
          </Link>
       </span>
       <p className="postDescription">
          {data.description}
       </p>
    </div>
  );
}
