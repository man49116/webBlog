import './SinglePosts.css'
import {useEffect} from "react"
import { useLocation } from 'react-router-dom';
export default function SinglePosts() {


  useEffect(()=>{
    window.scrollTo(0,-document.body.scrollHeight);
  },[])
  const location = useLocation();
  const { data } = location.state;
  return (



    <div className="singlePost"> {console.log(data)}
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={data.img}
          alt=""
        />
        <h1 className="singlePostTitle">
           {data.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author: {data.author}
            <b className="singlePostAuthor">
              
            </b>
          </span>
          <span>{data.date} day ago</span>
        </div>
        <p className="singlePostDesc">
            {data.description}
        </p>  
      </div>
    </div>
  );
  
}
