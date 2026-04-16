import "./main.css"
import Hijoma from "../img/hijama.jpg"
import Zuluk from "../img/therapy-byzuluk.jpg"
import Terapy from "../img/manual-therapy.jpg"


function Main() {
    return(
        <div className="mainDiv">
        <p className="service">Xizmatlar</p>
        <div className="info">
            <img className="mainSecImg" src={Hijoma} alt="img" />
            <div className="mainTextInfo">
                <h3>Hijoma</h3>
                <p className="mainP">Imom Termiziy Abdulloh ibn Abbos raziyallohu anhumodan rivoyat qilgan hadisda rasululloh sallallohu alayhi va sallam dedilar: «Sizlar hijoma qiladigan kunlaringizning eng yaxshisi 17, 19 va 21-kunlardir» (bu kunlar hijrij-kamariy hisobdagi oylar kunlaridir).</p>
            </div>
        </div>
        <div className="info">
            <img className="mainSecImg" src={Terapy} alt="img" />
            <div className="mainTextInfo">
                <h3>Manual Terapiya</h3>
                <p className="mainP">Imom Termiziy Abdulloh ibn Abbos raziyallohu anhumodan rivoyat qilgan hadisda rasululloh sallallohu alayhi va sallam dedilar: «Sizlar hijoma qiladigan kunlaringizning eng yaxshisi 17, 19 va 21-kunlardir» (bu kunlar hijrij-kamariy hisobdagi oylar kunlaridir).</p>
            </div>
        </div>
        <div className="info">
            <img className="mainSecImg" src={Zuluk} alt="img" />
            <div className="mainTextInfo">
                <h3>Zuluk bilan davolash</h3>
                <p className="mainP">Imom Termiziy Abdulloh ibn Abbos raziyallohu anhumodan rivoyat qilgan hadisda rasululloh sallallohu alayhi va sallam dedilar: «Sizlar hijoma qiladigan kunlaringizning eng yaxshisi 17, 19 va 21-kunlardir» (bu kunlar hijrij-kamariy hisobdagi oylar kunlaridir).</p>
            </div>
        </div>
        <div className="info">
            <img className="mainSecImg" src={Hijoma} alt="img" />
            <div className="mainTextInfo">
                <h3>Tabiiy dori vositalari</h3>
                <p className="mainP">Imom Termiziy Abdulloh ibn Abbos raziyallohu anhumodan rivoyat qilgan hadisda rasululloh sallallohu alayhi va sallam dedilar: «Sizlar hijoma qiladigan kunlaringizning eng yaxshisi 17, 19 va 21-kunlardir» (bu kunlar hijrij-kamariy hisobdagi oylar kunlaridir).</p>
            </div>
        </div>
        <button className="btn">Qabulga Yozdirish</button>
        </div>
    )    
}
export default Main

function MainBottom() {
    return(
        <div className="mainBottomDiv">
            <h2>Qabulga ro'yxatdan o'ting</h2>
            <div className="btnBox">
                <button className="mainbtn">QO'NG'IROQ QILISH</button>
                <button className="mainbtn">TELEGRAMDAN YOZISH</button>
            </div>
        </div>
    )
}

export {MainBottom}