import React from "react";
import "./landingPage.css";



const PortfolioLandingPage = () => {
    return (
        <div className="portfolio-landing-page">
        <header className="header">
            <div className="header-info">
            
            <h3>I'm a Full Stack Web Developer</h3>
            <h4>And I Love to Code</h4>
            <button className="btn">What do I Know</button>
            </div>
        </header>

        <section className="section contact-sec">
            <div className="section-header" style={{ color: "#fff" }}>
            Recommendations
            </div>
            <div className="contact-container">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
                eros vel urna consectetur dictum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
                eros vel urna consectetur dictum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
                eros vel urna consectetur dictum.
            </p>
            </div>
        </section>

        <footer id="footer">
            <div className="container-fluid">
            <div className="social-icons mt-4">
                <a href="/" >
                <i class="fab fa-facebook"></i>
                </a>
                <a href="/" >
                <i class="fab fa-instagram"></i>
                </a>
                <a href="/" >
                <i class="fab fa-twitter"></i>
                </a>
                <a href="/" >
                <i class="fab fa-linkedin"></i>
                </a>
                <a href="/" >
                <i class="fab fa-twitch"></i>
                </a>
            </div>
            </div>
        </footer>
        </div>
    );
};

export default PortfolioLandingPage;