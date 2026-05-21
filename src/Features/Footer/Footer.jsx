import "./Footer.css";

function Footer() {
    return (
        <footer>
            <div className="about">
                <h3>About</h3>
                <p>
                    <ul>
                        <li>Agbaje</li>
                        <li>Simon</li>
                        <li>Eddie</li>
                         <li>Wali David</li>
                         <li>Keke Otis</li>
                         <li>Olanrewaju Ogunkoya</li>
                    </ul>
                </p>
            </div>

            <hr />

            <div className="copyright">
                <p>
                    ©2026 Design by <a href="https://github.com/Anurella" target="_blank" rel="noopener noreferrer"> Amaka </a> & <a href="https://www.linkedin.com/in/ifeomaokocha" target="_blank" rel="noopener noreferrer"> Ifeoma A.</a>
                    <br className="first_br" />
                    Built by <a href="https://github.com/simonigba/CAPSTONE-PROJECT-14.git" target="_blank" rel="noopener noreferrer">Capstone Project Group 14. </a>
                    <br className="second_br" />
                    All rights reserved
                </p>
                <a href="https://tsacademyonline.com">
                    <p className="tsa">TSAcademy</p>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
