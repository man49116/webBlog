import "./sideBar.css"

export default function SideBar() {
  return (
    <div className="sideBar">
        <div className="sideBarItem">
            <span className="sideBarTitle">ABOUT ME</span>
            <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" className="sideBarImg" />
            <p>
            Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
            amet ex esse.Sunt eu ut nostrud id quis proident.
            </p>
        </div>
        <div className="sideBarItem">
            <span className="sideBarTitle">CATEGORIES</span>
            <ul className="sideBarList">
                <li className="sideBarListItem">Life</li>
                <li className="sideBarListItem">Music</li>
                <li className="sideBarListItem">Sport</li>
                <li className="sideBarListItem">Tech</li>
                <li className="sideBarListItem">Style</li>
                <li className="sideBarListItem">Ciniema</li>
            </ul>
        </div>
        <div className="sideBarItem">
          <span className="sideBarTitle">FOLLOW US</span>
            <div className="sideBarSocial">
                <i className=" sideBarSocialItem fa-brands fa-facebook-square"></i>
                <i className="sideBarSocialItem fa-brands fa-instagram-square"></i>
                <i className="sideBarSocialItem fa-brands fa-twitter-square"></i>
            </div>

        </div>
    </div>
  )
}
