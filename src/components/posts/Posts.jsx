import "./posts.css";
import Post from "../post/Post";
import datas from '../../data/datas'


export default function Posts() {
  return (
    <div className="posts"> 
        {datas.map((data,index) => (<Post key={index} {...data} />))}
        
    </div>
  )
}
