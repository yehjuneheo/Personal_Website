import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import logo from './image.jpg';

import {AboutPage } from "./aboutpage"
import { EducationPage } from "./educationpage"

import { motion, useAnimation } from "framer-motion"
import { useWindowScroll } from "react-use"



const Rectangle = ({ hovered, id_, locate, duration, content, handleMouseEnter, handleMouseLeave, startSequence, animationControls,clicked,show, setShow  }) => {

    async function sequence() {
        animationControls.start({
          y: 0,
          transition: {
            ease: "easeInOut",
            delay: 0.6,
            duration: duration,
          }
        });
      }

      const gotoBottom = () =>
          window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth"
          });

      useEffect(() => {
        sequence();
      }, []);

      

  return (
    <motion.div class="container" id={`container_${id_}`}
    animate={animationControls}
    >
        <motion.div
            className={`rectangle ${hovered ? 'upward' : ''}`}
            id={`rectangle_${id_}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
                startSequence();
                clicked();
                setShow(id_, true);
              }}
        >
        <div className="front" id={`front_${id_}`}>
            <div className="holder" id={`holder_${id_}`}>
                <div id="holder_text">{content}</div>
            </div>
            <div className="paper" id={`paper_${id_}`}>
                Hello World
            </div>
        </div>
        </motion.div>
    </motion.div>
  );
}
  
  function HomePage() {

      const [rectangles, setRectangles] = useState([
        { id: 1, header: "About Me", hovered: false, duration:2.3, animationControls: useAnimation() },
        { id: 2, header: "Education", hovered: false, duration:1.9, animationControls: useAnimation() },
        { id: 3, header: "Experience", hovered: false, duration:1.5, animationControls: useAnimation() },
        { id: 4, header: "Projects", hovered: false, duration:1.1, animationControls: useAnimation() },
        { id: 5, header: "Resume", hovered: false, duration: 0.7, animationControls: useAnimation() },
        { id: 6, header: "Contact", hovered: false,  duration: 0.3, animationControls: useAnimation() },
      ]);
  
      
      const [show, setShow] = useState({});
  
      const handleRectangleClick = (id, show) => {
        const updatedRectangles = rectangles.map((rectangle) => {
            if (rectangle.id === id) {
                setShow({ ...show, [id]: true });
            } else {
                setShow({ ...show, [id]: show });
            }
          });
          setRectangles(updatedRectangles);
      };
  
      const [currentRectangleId, setCurrentRectangleId] = useState(null);
    
      const handleMouseEnter = (id) => {
              setRectangles((prevRectangles) =>
                  prevRectangles.map((rectangle) =>
                  rectangle.id === currentRectangleId
                  ? { ...rectangle, hovered: false }
                  : rectangle.id < id
                  ? { ...rectangle, hovered: true }
                  : rectangle
                  )
              );
      };
    
      const handleMouseLeave = (id) => {
          setRectangles((prevRectangles) =>
              prevRectangles.map((rectangle) =>
              rectangle.id < id ? { ...rectangle, hovered: false } : rectangle
              )
          );
      };
  
      const startSequence = async (id) => {
          const clickedRectangle  = rectangles.find(rectangle => rectangle.id === id);
          const animationControls = clickedRectangle.animationControls;
          const rectangle_animationControls = clickedRectangle.rectangle_animationControls;
  
          if (currentRectangleId === id) {
              animationControls.start({
                y: 0,
                transition: {
                  ease: "easeInOut",
                  duration: 0.6,
                },
              });
              await animationControls.start({
                  x: 0,
                  transition: {
                    ease: "easeInOut",
                    duration: 0.6,
                    delay: 0.7,
                  },
                });
              setCurrentRectangleId(null);
            } else {
              // Otherwise, move the clicked rectangle and reset the previous one (if any)
              if (currentRectangleId !== null) {
                const previousRectangle = rectangles.find(
                  (rectangle) => rectangle.id === currentRectangleId
                );
                const previousAnimationControls = previousRectangle.animationControls;
                previousAnimationControls.start({
                  y: 0,
                  transition: {
                    ease: "easeInOut",
                    duration: 0.6,
                  },
                });
                  previousAnimationControls.start({
                    x: 0,
                    transition: {
                      ease: "easeInOut",
                      duration: 0.6,
                      delay: 0.7,
                    },
                  });
              }
          
              animationControls.start({
                x: -500,
                transition: {
                  ease: "easeInOut",
                  duration: 0.6,
                },
              });
              animationControls.start({
                  y: 1000,
                  transition: {
                    ease: "easeInOut",
                    duration: 0.6,
                    delay: 0.7,
                  },
                });
              setCurrentRectangleId(id);
            }
        };

    return (
        <div>
    <motion.div class="everything" 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    >
        <div className="intro">
            <p className="my_name_is">Hello! My name is...</p>
            <p className="my_name">Yehjune Heo</p>
            <div className="context">
                <img className="profile_pic" src={logo} alt="meeting"></img>
                <p className="texts">
                Lorem Ipsum is simply dummy text <br/>of the printing and typesetting industry.<br/>
                Lorem Ipsum has been the industry's standard <br/>dummy text ever since the 1500s,<br/> 
                when an unknown printer took a galley of <br/>type and scrambled it to make a type specimen book
                </p>
            </div>
        </div>
        <div className="App">
        <div className="container">
        {rectangles.map((rectangle) => (
          <Rectangle
            key={rectangle.id}
            hovered={rectangle.hovered}
            id_ = {rectangle.id}
            content = {rectangle.header}
            duration = {rectangle.duration}
            startSequence = {() =>startSequence(rectangle.id)}
            clicked = {() => handleRectangleClick(rectangle.id, true)}
            animationControls={rectangle.animationControls}
            rectangle_animationControls={rectangle.rectangle_animationControls}
            handleMouseEnter={() => handleMouseEnter(rectangle.id)}
            handleMouseLeave={() => handleMouseLeave(rectangle.id)}
            show={show[rectangle.id]}
            setShow={setShow}
          >
          </Rectangle>
        ))}
      </div>
        </div>
      </motion.div>
      {show[1] && (
        <AboutPage/>
      )}
      {show[2] && (
        <EducationPage/>
      )}
      </div>
    );
  }

  function ExperiencePage() {
    return (
      <div>
        <h1>Experience</h1>
        <p>I'm a software engineer</p>
      </div>
    );
  }

  function ProjectsPage() {
    return (
      <div>
        <h1>Projects</h1>
        <p>I'm a software engineer</p>
      </div>
    );
  }

  function ResumePage() {
    return (
      <div>
        <h1>Resume</h1>
        <p>I'm a software engineer</p>
      </div>
    );
  }

  function ContactPage() {
    return (
      <div>
        <h1>Contact</h1>
        <p>I'm a software engineer</p>
      </div>
    );
  }

  export default HomePage;
  export {ExperiencePage, ProjectsPage, ResumePage, ContactPage};