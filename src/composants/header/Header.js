
import React from 'react';

export function Header() {
    return (
        <div className="header">
            <section id="topbar" className="d-flex align-items-center">
                <div className="container d-flex justify-content-center justify-content-md-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope-fill"></i>institutuniversitairesiantou@gmail.com
                        <i className="bi bi-phone-fill phone-icon"></i> +222 434 432 765
                    </div>
                    <div className="social-links d-none d-md-block">
                        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </section>
            <header id="header" className="d-flex align-items-center">
                <div className="container d-flex align-items-center">

                    <div className="logo me-auto">
                        <h1> <img src="assets/img/siantou.png" alt="" /></h1>
                    </div>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><span>Inscription</span> </li>

                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>
        </div>

    );
}
