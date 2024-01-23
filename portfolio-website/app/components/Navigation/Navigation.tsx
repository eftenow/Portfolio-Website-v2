'use client';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const Navigation = ({ currentSection }: { currentSection: string }) => {
    const [isNavActive, setIsNavActive] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    const toggleNavigation = () => {
        setIsNavActive(!isNavActive);
    };

    const handleNavLinkClick = () => {
        setIsNavActive(false);
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
            setIsNavActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);


    return (
        <header className="header left-section">
            <nav className="primary-menu navbar-expand bg-dark" ref={navRef}>
                <div className="side-nav-top">
                    <div className="avatar-container">
                        <Image src="/images/resume-pic.jpg" alt="profile" />
                    </div>
                    <h2 className="name">Tsvetan Eftenov</h2>
                </div>

                <div className={`side-nav-mid ${isNavActive ? 'active-mobile-nav' : ''}`}>
                    <ul className="navbar-list">
                        <li className="nav-item">
                            <a className={`nav-link ${currentSection === "home" ? "text-primary" : ""}`} href="#home" onClick={handleNavLinkClick}>
                                <i className="uil uil-estate"></i> Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${currentSection == "about" && "text-primary"}`} href="#about" onClick={handleNavLinkClick}>
                                <i className="uil uil-user"></i> About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${currentSection == "services" && "text-primary"}`} href="#services" onClick={handleNavLinkClick}>
                                <i className="fa-regular fa-folder"></i> Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${currentSection == "experience" && "text-primary"}`} href="#experience" onClick={handleNavLinkClick}>
                                <i className="uil uil-file-alt"></i> Experience
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${currentSection == "tools" && "text-primary"}`} href="#tools" onClick={handleNavLinkClick}>
                                <i className="fa-solid fa-screwdriver-wrench"></i> Tools
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${currentSection == "portfolio" && "text-primary"}`} href="#portfolio" onClick={handleNavLinkClick}>
                                <i className="fa-regular fa-address-card"></i> Portfolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${currentSection == "contact" && "text-primary"}`} href="#contact" onClick={handleNavLinkClick}><i className="fa-regular fa-envelope"></i> Contact</a></li>
                    </ul>
                </div>

                <ul className="side-nav-bot">
                    <li>
                        <a href="https://github.com/eftenow" className="media-icon github" target="_blank">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://gitlab.com/eftenow" className="media-icon gitlab" target="_blank">
                            <i className="fa-brands fa-gitlab"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="media-icon facebook" target="_blank">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/tsvetan-eftenov/" className="media-icon linkedin" target="_blank">
                            <i className="uil uil-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:tsvetan.eftenov@gmail.com" className="media-icon message" target="_blank">
                            <i className="fa fa-envelope"></i>
                        </a>
                    </li>

                </ul>
                <button className={`burger-menu-button ${isNavActive ? 'close-nav' : ''}`} onClick={toggleNavigation} >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>

                </button>
            </nav>
        </header>
    )
}