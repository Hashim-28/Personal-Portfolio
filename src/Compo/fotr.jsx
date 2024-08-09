import React from 'react';

const Footer = () => {
    return(
        <div id="last">
            <footer>
                <div id="f-h">
                    <h1>Hashim Ali</h1>
                    <ul>
                        <li><a href="#hero-sec">Home</a></li>
                        <li><a href="#About">About Me</a></li>
                        <li><a href="#project">Projects</a></li>
                    </ul>
                </div>
                <div id="fo-img">
                   <a href="https://www.facebook.com/profile.php?id=100077070127612"> <img src="/pics/facebook.png" alt="fa" /></a>
                    <a href="https://www.instagram.com/hashimali3305/"><img src="/pics/instagram.png" alt="fa" /></a>
                    <a href="https://www.linkedin.com/in/hashim-ali-055650279/"><img src="/pics/linkedin.png" alt="fa" /></a>
                </div>
                <br /><br />
                <hr />
               
                <h2 id="h2">Made by : <strong>Hashim Ali</strong></h2>
            </footer>
        </div>
    )
}

export default Footer;
