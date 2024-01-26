import { useState, useEffect } from "react";

import titles from "./../../data/titles.json";
import buttons from "./../../data/buttons.json";


const DELAY_BEFORE_TYPING = 800;
const DELAY_BEFORE_DELETING = 1200;
const INTERVAL_DELAY = 80;

export const Home = () => {
    const [currentMessage, setCurrentMessage] = useState<string>();

    useEffect(() => {
        const messages = ['Tsvetan Eftenov.', 'a Web Developer.'];
        setCurrentMessage(messages[0]);
        let messageIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const rotateText = () => {
            if (isDeleting) {
                charIndex = Math.max(0, charIndex - 1);
            } else {
                setTimeout(() => {
                    charIndex = Math.min(messages[messageIndex].length, charIndex + 1);
                }, DELAY_BEFORE_TYPING);
            }

            if (charIndex === 0 && isDeleting) {
                messageIndex = (messageIndex + 1) % messages.length;
                isDeleting = false;
            } else if (charIndex === messages[messageIndex].length && !isDeleting) {
                setTimeout(() => {
                    isDeleting = true;
                }, DELAY_BEFORE_DELETING);
            }

            updateMessage();
        };

        const updateMessage = () => {
            setCurrentMessage(messages[messageIndex].substring(0, charIndex));
        };

        const intervalId = setInterval(rotateText, INTERVAL_DELAY);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="home" id="home">
            <div className="home-wrapper">
                <div className="home-mask bg-dark"></div>
                <div className="home-background"></div>
                <div className="home-content">
                    <section className="home-text">
                        <h2>{titles.home.title}</h2>
                        <h1>{titles.home.subtitle} {currentMessage}<span className="cursor">|</span></h1>
                        <p>{titles.home.subtitle2}</p>
                        <a href="#contact" className="btn">{buttons.contact}</a>
                    </section>
                </div>
            </div>
            <a href="#about" className="scroll-down-arrow box">
                <span className="animated"></span>
                <span className="animated"></span>
            </a>
        </section>
    );
};

export default Home;
