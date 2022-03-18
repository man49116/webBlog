import "./home.css";
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import SideBar from "../../components/side/SideBar"
export default function Home(){
    return(
        <>
            < Header />
            <div className="home">
                <Posts ></Posts>
                <SideBar/>
            </div>
        </>
       
    )       
}