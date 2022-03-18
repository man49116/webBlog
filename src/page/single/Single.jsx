import './single.css'
import SideBar from '../../components/side/SideBar';
import SinglePost from "../../components/singlePosts/SinglePosts"

export default function Single() {
  return (
    <div className="single">
        <SinglePost />
        <SideBar />
    </div>  
  )
}
