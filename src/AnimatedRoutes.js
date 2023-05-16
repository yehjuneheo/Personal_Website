import React from "react";
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./style.css";

import HomePage from "./interactivecode";
import { ExperiencePage, ProjectsPage, ResumePage, ContactPage } from "./interactivecode";
import {AboutPage } from "./aboutpage"
import { EducationPage } from "./educationpage"

import { AnimatePresence } from "framer-motion"

function AnimatedRoutes(){
    const location = useLocation();
    return(
        <AnimatePresence>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/education" component={EducationPage} />
                <Route path="/experience" component={ExperiencePage} />
                <Route path="/projects" component={ProjectsPage} />
                <Route path="/resume" component={ResumePage} />
                <Route path="/contact" component={ContactPage} />
        </AnimatePresence>
    )
}

export default AnimatedRoutes