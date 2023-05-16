import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./App.css";
import "./style.css";

import HomePage from "./interactivecode";

import { AnimatePresence } from "framer-motion"

function App() {

  useEffect(() => {
    window.scrollTo(0, 1); // Scroll to position (0,1) to hide the bookmarks bar
  }, []);

    return (
        
      <div className="App">
        <AnimatePresence>
                <HomePage>
                </HomePage>
        </AnimatePresence>
    </div> 
    );
  }

export default App;