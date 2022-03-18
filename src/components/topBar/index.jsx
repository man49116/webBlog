import "./topbar.css"
import { Link } from "react-router-dom"

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <i className=" topItem fa-brands fa-facebook-square"></i>
                <i className="topItem fa-brands fa-instagram-square"></i>
                <i className="topItem fa-brands fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to = "/" >HOME</Link>
                    </li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem"><Link className="link" to = "/write" >WRITE</Link></li>
                </ul>
                
            </div>
            <div className="topRight">
                
                <Link className="link" to = "/setting" >
                   <img src="https://cdn-icons-png.flaticon.com/512/1752/1752735.png" alt="" className="topAvatar" />   
                </Link>
                       
            </div>
        </div>
    )
}