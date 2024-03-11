import React from 'react';
import navIcon1 from '../../assets/ilutration/linkedin-icon.svg'
import navIcon2 from '../../assets/ilutration/github-icon.svg'
import './Home.css'

const Home = () => {
    return (
        <section id="home">
            <div className="home-content js-scroll">
                <h1>Hello, I'm <br /> Thiago Marins <br /> <span>Front-end Developer</span></h1>
                <p>Hello, I'm Thiago, a front-end developer with skills in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and currently delving into <strong>React</strong>.</p>
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/thiagossmarins/" target='blank'>
                        <img src={navIcon1} alt="linkedin icon" />
                    </a>
                    <a href="https://github.com/thiagossmarins" target='blank'>
                        <img src={navIcon2} alt="github icon" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;