import './footer.css';

export default function Footer() {
  return (
    <div className="footer">
        <span className="footerTitle"> My Blog</span>        
        <ul className="footerList">
            <li className="footerListItem">ABout</li>
            <li className="footerListItem">Services</li>
            <li className="footerListItem">Press</li>
            <li className="footerListItem">Contact</li>
        </ul>
        <div className="footerSocail">
            <span> Stay it touch</span>
            <div className="footerSocailList">
                <i className=" footerSocailItem fa-brands fa-facebook-square"></i>
                <i className="footerSocailItem fa-brands fa-instagram-square"></i>
                <i className="footerSocailItem fa-brands fa-twitter-square"></i>
            </div>
        </div>
    </div>
  )
}
