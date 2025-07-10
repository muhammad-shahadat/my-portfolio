import React from 'react';
import heroLogo from "../assets/images/hero-logo.png";
import "./css/Home.css";


const Home = () => {

    
    
    

  return (
    <>
        <section id="hero">
            <div className="hero-container">
                <div className="hero-logo">
                    <img src={heroLogo} alt="#" />
                </div>
                <div className="hero-right">
                    <div className="hero-des">
                        <h1>Shahadat Hossain</h1>
                        <p>
                            Frontend Developer from Bangladesh with experience in building responsive and user-friendly websites.
                        </p>

                    </div>
                    <ul className="hero-menu-list">
                        <li>
                            <a href="https://www.linkedin.com/in/shahadatian/" target="_blank">LINKEDIN</a>
                        </li>
                        <li>
                            <a href="https://github.com/muhammad-shahadat" target="_blank">GITHUB</a>
                        </li>
                        <li>
                            <a href="#projects">PROJECTS</a>
                        </li>
                        <li>
                            <a href="#resume">RESUME</a>
                        </li>

                    </ul>

                </div>
            </div>

        </section>

        <section id="about-me">
            <div className="about-container">
                <div className="about-left">
                    <h2>ABOUT ME</h2>

                </div>
                <div className="about-right">
                    <p>
                        I'm a frontend developer and Software Engineering student at Daffodil International University, Bangladesh. I build responsive, user-friendly websites using React, JavaScript, HTML, CSS, Tailwind CSS and Bootstrap. I’ve completed several hands-on projects, all deployed on Netlify and hosted on GitHub. I’m working toward full-stack development and open to freelance and remote opportunities.
                    </p>
                </div>
            </div>

        </section>

        <section id="projects">
            <div className="projects-container">
                <div className="projects-left">
                    <h2>PROJECTS</h2>
                </div>
                <div className="projects-right">
                    <div className="e-commerce project-css">
                        
                        <h3 className="name">
                            <a className="name-link" href="https://frontend-ecommerce-project.netlify.app/" target="_blank" >
                                React E-Commerce Shop

                            </a>
                        </h3>
                        
                        <p className="description">
                            A modern and responsive e-commerce frontend built with React, Vite, and custom CSS. Features include add-to-cart, cart summary, promo code input UI, and reusable components using React Context API. Deployed on Netlify.
                        </p>
                        <h3 className="netlify">
                            <a href="https://frontend-ecommerce-project.netlify.app/" className="netlify-link" target="_blank" >
                                🔗 Live Demo
                            </a>
                        </h3>
                        <h3 className="github">
                            <a href="https://github.com/muhammad-shahadat/frontend-e-commerce" className="github-link" target="_blank" >
                                💻 GitHub Repository
                            </a>
                        </h3>
                    </div>

                    <div className="landing-page project-css">
                        
                        <h3 className="name">
                            <a className="name-link" href="https://react-landing-page-shahadatian.netlify.app/" target="_blank" >
                                React Landing Page

                            </a>
                        </h3>
                        
                        <p className="description">
                            A modern and responsive langing page built with React, Vite, Tailwind CSS and custom CSS. Coded from a figam file shared in a youtube tutorial also help of the tutor.Features include reusable components, slick carousel for card slider.
                        </p>
                        <h3 className="netlify">
                            <a href="https://react-landing-page-shahadatian.netlify.app/" className="netlify-link" target="_blank" >
                                🔗 Live Demo
                            </a>
                        </h3>
                        <h3 className="github">
                            <a href="https://github.com/muhammad-shahadat/react-landing-page" className="github-link" target="_blank" >
                                💻 GitHub Repository
                            </a>
                        </h3>
                        <p className="note" style={{color: "#0f172a"}} >
                            *Note: Design credit goes to the original Figma creator. This was a practice implementation.*
                        </p>
                    </div>

                    {/* <div className="upcoming-project">

                    </div> */}

                </div>
            </div>

        </section>

        <section id="skills">
            <div className="skills-container">
                <div className="skills-left">
                    <h2>SKILLS</h2>
                </div>
                <div className="skills-right">
                    <div className="skill-category">
                        <h3 className="skill-title">
                            Languages & Markup

                        </h3>
                        <ul className="skill-item">

                            <li className="item-list">
                                HTML
                            </li>
                            <li className="item-list">
                                CSS
                            </li>
                            <li className="item-list">
                                JavaScript 
                            </li>
                            <li className="item-list">
                                C
                            </li>
                            <li className="item-list">
                                C++
                            </li>
                        </ul>
                    </div>

                    <div className="skill-category">
                            <h3 className="skill-title">
                            Frameworks & Libraries

                        </h3>
                        <ul className="skill-item">

                            <li className="item-list">
                                React.js
                            </li>
                            <li className="item-list">
                                Tailwind CSS
                            </li>
                            <li className="item-list">
                                Bootstrap
                            </li>
                        </ul>
                    </div>

                    <div className="skill-category">
                        <h3 className="skill-title">
                            Tools & Platforms

                        </h3>
                        <ul className="skill-item">

                            <li className="item-list">
                                Git & GitHub
                            </li>
                            <li className="item-list">
                                Netlify
                            </li>
                            <li className="item-list">
                                Vite
                            </li>
                            <li className="item-list">
                                VS Code
                            </li>
                            <li className="item-list">
                                Figma
                            </li>
                        </ul>
                    </div>

                    <div className="skill-category">
                        <h3 className="skill-title">
                            Currently Learning

                        </h3>
                        <ul className="skill-item">

                            <li className="item-list">
                                SQL
                            </li>
                            <li className="item-list">
                                Node.js
                            </li>
                            <li className="item-list">
                                Express
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>

        <section id="resume">
            <div className="resume-container">
                <div className="resume-left">
                    <h2>RESUME</h2>
                </div>

                <div className="resume-right">

                    <ul className="resume-item">
                        <li className="item-list resume-list">
                            👁️
                            <a href="/resume/shahadat_hossain_resume.pdf" target="_blank" className="resume-link view-resume">
                                View Resume
                            </a>
                             
                        </li>
                        <li className="resume-list item-list">
                            📥
                            <a href="/resume/shahadat_hossain_resume.pdf" className="resume-link download-resume" download="md_shahadat_hossain_resume" rel="noopener noreferrer">  
                               Download Resume

                            </a>
                        </li>
                    </ul>
                </div>        

            </div>

        </section>

        <section id="contacts">
            <div className="contacts-container">
                <div className="contacts-left">
                    <h2>CONTACTS</h2>
                </div>
                <div className="contacts-right">
                    <p className="contact-desc">
                        I'm always open to exciting freelance or remote opportunities, project collaborations, or just a friendly tech chat. Feel free to reach out via email, phone, or WhatsApp. Let’s build something great together! 👇
                    </p>
                    <ul className="contact-item">
                        <li className="item-list">
                            📧 
                            <a href="mailto:shahadat6640@gmail.com" target="_blank" >
                                shahadat6640@gmail.com
                            </a>
                        </li>
                        <li className="item-list">
                            📱  
                            <a href="https://wa.me/8801811293727?text=Hello%20Shahadat%2C%20I%20visited%20your%20portfolio%20and%20was%20impressed%20with%20your%20projects.%20I'd%20like%20to%20connect%20with%20you%20regarding%20a%20freelance%20or%20remote%20opportunity." target="_blank" rel="noopener noreferrer" >
                                 WhatsApp: +880 1811-293727
                            </a>
                        </li>
                        <li className="item-list">
                            ☎️  
                            <a href="tel:+8801811293727">
                                Personal: +880 1811-293727

                            </a>
                        </li>

                    </ul>
                </div>
            </div>

        </section>
    
    </>
  )
}

export default Home;