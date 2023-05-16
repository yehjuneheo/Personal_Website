import React, { useState } from 'react';
import './aboutpage.css';

import { motion } from "framer-motion"

import frame_15 from '../images/assets(svg)/frame-15.svg'
import frame_16 from '../images/assets(svg)/frame-16.svg'
import frame_17 from '../images/assets(svg)/frame-17.svg'
import frame_18 from '../images/assets(svg)/frame-18.svg'
import frame_19 from '../images/assets(svg)/frame-19.svg'
import frame_20 from '../images/assets(svg)/frame-20.svg'
import frame_21 from '../images/assets(svg)/frame-21.svg'
import frame_22 from '../images/assets(svg)/frame-22.svg'
import frame_43 from '../images/assets(svg)/frame-43.svg'
import frame_48 from '../images/assets(svg)/frame-48.svg'
import frame_53 from '../images/assets(svg)/frame-53.svg'
import line_1 from '../images/assets(svg)/line-1.svg'
import line_2 from '../images/assets(svg)/line-2.svg'
import line_3 from '../images/assets(svg)/line-3.svg'
import python_logo from '../images/assets(svg)/python-logo.svg'
import c_plus_plus_logo from '../images/assets(svg)/c-plusplus-logo.svg'
import c_sharp_logo from '../images/assets(svg)/c-sharp-logo.svg'
import css_logo from '../images/assets(svg)/css-logo.svg'
import java_logo from '../images/assets(svg)/java-logo.svg'
import javascript_logo from '../images/assets(svg)/javascript-logo.svg'
import mysql_logo from '../images/assets(svg)/mysql-logo-logo.svg'
import html_logo from '../images/assets(svg)/html-logo.svg'
import django_logo from '../images/assets(svg)/django-logo.svg'
import react_logo from '../images/assets(svg)/react-original-wordmark-logo.svg'
import tensorflow_logo from '../images/assets(svg)/tensorflowlogo-logo.svg'
import angular_logo from '../images/assets(svg)/angular-logo.svg'
import nodejs_logo from '../images/assets(svg)/nodejs-logo.svg'
import git_logo from '../images/assets(svg)/git-logo.svg'
import aws_logo from '../images/assets(svg)/aws-logo.svg'
import google_logo from '../images/assets(svg)/google-logo.svg'
import jupyter_logo from '../images/assets(svg)/jupyter-original-wordmark-logo.svg'
import heroku_logo from '../images/assets(svg)/heroku-logo.svg'


function AboutPage() {
    return <AboutFrame {...frame2Data} />;
}

function AboutFrame(props) {
    const{about_text} = props;

    return (
        <div className='container-center-horizontal'>
        <div className='frame-1 screen'>
            <div className='overlap-group'>
                <div className='about'>
                    <p className='about-me-text'>About Me</p>
                </div>
                <div className="frame1 screen">
                    <div className="main_content">
                        <div className="about_content">
                            <div className='about_header'>
                                <h1 className="heading rubik-semi-bold-black-38px">
                                    About
                                </h1>
                                <img className="line_1" src={line_1} alt="Line 1"/>
                            </div>
                            <div className='about_context'>
                                <div className='profile_picture'></div>
                                <div className='about_text rubik-normal-black-25px'>
                                    <p className='about_me_text'>
                                        {about_text}
                                    </p>
                                    <div className='contact_me_button'>
                                        <div className='contact_me'>
                                            Contact Me!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='interests_content'>
                            <div className='interests_header'>
                                <div className='interests rubik-semi-bold-black-38px'>
                                    Interests
                                </div>
                                <img className="line_2" src={line_2} alt="Line 1"/>
                            </div>
                            <div className="interests_context">
                                <div className='interests_first_line'>
                                    <div className='interests_1'>
                                        <img className='icon1' src={frame_22} alt="Frame 22"/>
                                        <div className='software-engineering rubik-semi-bold-black-16px'>
                                            Software Engineering
                                        </div>
                                    </div>
                                    <div className='interests_1'>
                                        <img className='icon2' src={frame_21} alt="Frame 21"/>
                                        <div className='web-development rubik-semi-bold-black-16px'>
                                            Web Development
                                        </div>
                                    </div>
                                    <div className='interests_1'>
                                        <img className='icon3' src={frame_20} alt="Frame 20"/>
                                        <div className='data-science rubik-semi-bold-black-16px'>
                                            Data Science
                                        </div>
                                    </div>
                                    <div className='interests_1'>
                                        <img className='icon4' src={frame_19} alt="Frame 19"/>
                                        <div className='machine-learning rubik-semi-bold-black-16px'>
                                            Machine Learning
                                        </div>
                                    </div>
                                </div>
                                <div className='interests_second_line'>
                                    <div className='interests_1'>
                                        <img className='icon5' src={frame_18} alt="Frame 18"/>
                                        <div className='full-stack-development rubik-semi-bold-black-16px'>
                                            Full Stack Development
                                        </div>
                                    </div>
                                    <div className='interests_1'>
                                        <img className='icon6' src={frame_17} alt="Frame 17"/>
                                        <div className='computer-vision rubik-semi-bold-black-16px'>
                                            Computer Vision
                                        </div>
                                    </div>
                                    <div className='interests_1'>
                                        <img className='icon7' src={frame_16} alt="Frame 17"/>
                                        <div className='algorithms rubik-semi-bold-black-16px'>
                                            Algorithms
                                        </div>
                                    </div>
                                    <div className='interests_1'>
                                        <img className='icon8' src={frame_15} alt="Frame 16"/>
                                        <div className='image-processing rubik-semi-bold-black-16px'>
                                            Image Processing
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='skills_content'>
                            <div className='skills_header'>
                                <div className='skills rubik-semi-bold-black-38px'>
                                    Skills
                                </div>
                                <img className="line_3" src={line_3} alt="Line 1"/>
                            </div>
                            <div className='skills_context'>
                                <div className='skills_languages'>
                                    <div className='language-and-database rubik-medium-black-25px'>
                                        Langauge and Databases
                                    </div>
                                    <div className='skills_frame'>
                                        <div className='skills_icons'>
                                            <img className='icon_size' src={python_logo} alt="Python Logo"/>
                                            <img className='icon_size' src={c_plus_plus_logo} alt="Python Logo"/>
                                            <img className='icon_size' src={javascript_logo} alt="Python Logo"/>
                                            <img className='icon_size' src={java_logo} alt="Python Logo"/>
                                            <img className='icon_size' src={html_logo} alt="Python Logo"/>
                                            <img className='icon_size' src={css_logo} alt="Python Logo"/>
                                            <img className='icon_size' src={mysql_logo} alt="Python Logo"/>
                                            <img className='icon_size' src={c_sharp_logo} alt="Python Logo"/>
                                        </div>
                                        <div className='frame-5'>
                                            <div className='slidebar'></div>
                                            <div className='percent rubik-medium-black-25px'>
                                                10%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='skills_languages'>
                                    <div className='frameworks rubik-medium-black-25px'>
                                        Framework
                                    </div>
                                    <div className='skills_frame'>
                                        <div className='skills_icons'>
                                            <img className='icon_size' src={django_logo} alt="Python Logo"/>
                                            <img className='icon_size' src={react_logo} alt="Python Logo"/>
                                            <img className='icon_size' src={tensorflow_logo} alt="Python Logo"/>
                                            <img className='icon_size' src={angular_logo} alt="Python Logo"/>
                                            <img className='icon_size' src={nodejs_logo} alt="Python Logo"/>
                                        </div>
                                        <div className='frame-5'>
                                            <div className='slidebar'></div>
                                            <div className='percent rubik-medium-black-25px'>
                                                10%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='skills_languages'>
                                    <div className='tools rubik-medium-black-25px'>
                                        Tools
                                    </div>
                                    <div className='skills_frame'>
                                        <div className='skills_icons'>
                                            <img className='icon_size' src={git_logo} alt="Python Logo"/>
                                            <img className='icon_size' src={aws_logo} alt="Python Logo"/>
                                            <img className='icon_size' src={google_logo} alt="Python Logo"/>
                                            <img className='icon_size' src={jupyter_logo} alt="Python Logo"/>
                                            <img className='icon_size' src={heroku_logo} alt="Python Logo"/>
                                        </div>
                                        <div className='frame-5'>
                                            <div className='slidebar'></div>
                                            <div className='percent rubik-medium-black-25px'>
                                                10%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

const frame2Data = {
    about_text: "My name is Yehjune Heo and I am a software engineer. I have been working on web designing and web development for 2 years. Constantly updating the technologies I already master, but also looking to learn new technologies to enrich my skills and improve my good practices as a developer.",
};

export {AboutPage};