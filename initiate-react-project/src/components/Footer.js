import "../styles/Footer.css";
import ContactUs from "./ContactUs";


function Footer() {
    return (
        <div id="footer">
            <h3 className="footer-header">Contact Us</h3>

            <div id='footer-container'>
                <div className="send-message">
                    <h4>Send us a message:</h4>
                    <ContactUs></ContactUs>
                </div>
                
                <div className='info-container'>
                    <div className="company-info-footer">
                        <h4>
                            Info
                        </h4>
                        <ul className="company-info-list">
                            <li>Info 1</li>
                            <li>Info 2</li>
                            <li>Info 3</li>
                            <li>Info 4</li>
                        </ul>
                    </div>
                    <div className="company-info-footer">
                        <h4>
                            Resources
                        </h4>
                        <ul className="company-info-list">
                            <li>Resource 1</li>
                            <li>Resource 2</li>
                            <li>Resource 3</li>
                            <li>Resource 4</li>
                        </ul>
                    </div>

                </div>
             </div>
        </div>

    );
}

export default Footer;