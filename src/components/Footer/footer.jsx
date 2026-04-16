import "./footer.css"
import FooterLogo from "../img/logo-icon.jpg"

function Footer() {
    return (
        <div className="footerBox">
            <div className="container">
                <div className="boxFooter">
                    <div className="footerLeft">
                    <img className="img1" src={FooterLogo} alt="" />
                    <a className="footerText" href="#">AnsorMed</a>
                </div>
                <div>
                    <ul className="footerList">
                        <li><a className="footerLink" href="#">XIZMATLAR</a></li>
                        <li><a className="footerLink" href="#">DORILAR</a></li>
                        <li><a className="footerLink" href="#">ASAL</a></li>
                        <li><a className="footerLink" href="#">KONTAKTLAR</a></li>
                        <li><a className="footerLink" href="#">BLOG</a></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Footer