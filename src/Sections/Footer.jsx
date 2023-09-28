import FooterElement from "./FooterElement"
import "../Sections/Styles/footer.css";
function Footer() {
    return(
        <div className="footer-main">
            <div className="topElement">
                <div className="topRight">
                    <img src="./src/assets/Header-Images/Sample-Logo.png" alt="LOGO" />
                </div>
                <div className="topLeft">
                    <FooterElement />
                    <FooterElement />
                    <FooterElement />
                    <FooterElement />
                </div>
            </div>
            <div className="bottomElement">
                <div className="bottomElement-top">
                    <img src="./src/assets/Header-Images/Sample-Logo.png" alt="LOGO" />
                </div>
                <div className="bottomElementbottom">
                    <img src="./src/assets/Social/logo-whatsapp.svg" alt="Social" />
                    <img src="./src/assets/Social/logo-instagram.svg" alt="Social" />
                    <img src="./src/assets/Social/logo-facebook.svg" alt="Social" />
                    <img src="./src/assets/Social/logo-mail.svg" alt="Social" />
                </div>
            </div>
        </div>
    )
}


export default Footer;
