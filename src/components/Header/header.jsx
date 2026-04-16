import "./header.css"
import logoImg from "../img/logo-icon.jpg"
import heroImg from "../img/hero-img.png"

function Logo() {
    return (
        <div className="container">
            <div className="topNav">
                <div className="leftside">
                    <img src={logoImg} alt="img" />
                    <div>
                        <p className="brandName">AnsorMed</p>
                    </div>
                </div>
                <div>
                    <ul className="lists">
                        <li><a href="#">Xizmatlar</a></li>
                        <li><a href="#">Dorilar</a></li>
                        <li><a href="#">Asal</a></li>
                        <li><a href="#">Kontaktlar</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <button className="btn">Qabulga yozdirish</button>
            </div>
        </div>
    )
}
export default Logo

function Hero() {
    return (
        <div className="hero-section">
            <div className="container">
                <div className="hero-decor">
                    <div className="hero-left">
                <p className="hero-left-firstText">Tabiiy davolash usullari yordamida kasalliklardan xalos bo’ling.</p>
                <p className="hero-left-secondText">Hijoma, manual terapiya, zuluk va turli tabiiy giyohlar eng ko’p uchraydigan kasalliklarni yengishda yordam beradi. Sog’ligingizni o’z ishining professionallariga ishonib topshiring.</p>
                <button className="btn">Qabulga yozilish</button>
            </div>
            <div className="hero-right">
            <img className="heroimg" src={heroImg} alt="img" />
            </div>
                </div>
            </div>
        </div>
    )
}
export {Hero}