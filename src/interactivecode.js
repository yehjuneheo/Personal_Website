import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import logo from './image.jpg';

import { AboutPage } from "./pages/aboutpage"
import { EducationPage } from "./pages/educationpage"
import { ExperiencePage } from "./pages/experiencepage"
import { ProjectsPage } from "./pages/projectspage"
import { AwardsPage } from "./pages/awardspage"
import { ContactPage } from "./pages/contactpage"

import { motion, useAnimation } from "framer-motion"
import { disableBodyScroll,enableBodyScroll } from 'body-scroll-lock';

import image_1 from './images/1.jpg'
import image_2 from './images/2.jpg'
import image_3 from './images/3.jpg'
import image_4 from './images/4.jpg'
import image_5 from './images/5.jpg'
import image_6 from './images/6.jpg'



const Rectangle = ({ hovered, id_, duration, content, handleMouseEnter, handleMouseLeave, startSequence, animationControls, clicked, show, setShow  }) => {

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

      useEffect(() => {
        sequence();
      }, []);

      let imageSrc;

  if (id_ === 1) {
    imageSrc = image_1;
  } else if (id_ === 2) {
    imageSrc = image_2;
  } else if (id_ === 3) {
    imageSrc = image_3;
  } else if (id_ === 4) {
    imageSrc = image_4;
  } else if (id_ === 5) {
    imageSrc = image_5;
  } else if (id_ === 6) {
    imageSrc = image_6;
  }


  return (
    <motion.div class="container" id={`container_${id_}`}
    animate={animationControls}
    style={{ y: -2000 }}
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
              <img src={imageSrc} alt="image" />
            </div>
        </div>
        </motion.div>
    </motion.div>
  );
}


const MyComponent = ({ onRectangleClick }) => {
    
    const [rectangles, setRectangles] = useState([
      { id: 1, header: "About Me", hovered: false, duration:2.3, animationControls: useAnimation() },
      { id: 2, header: "Education", hovered: false, duration:1.9, animationControls: useAnimation() },
      { id: 3, header: "Experience", hovered: false, duration:1.5, animationControls: useAnimation() },
      { id: 4, header: "Projects", hovered: false, duration:1.1, animationControls: useAnimation() },
      { id: 5, header: "Awards", hovered: false, duration: 0.7, animationControls: useAnimation() },
      { id: 6, header: "Research", hovered: false,  duration: 0.3, animationControls: useAnimation() },
    ]);

    
    const [show, setShow] = useState({});

    const handleRectangleClick = (id) => {
        const updatedRectangles = rectangles.map((rectangle) => {
          if (rectangle.id === id) {
            return { ...rectangle, show: true };
          } else {
            return { ...rectangle, show: false };
          }
        });
        setRectangles(updatedRectangles);
        onRectangleClick(id, !show);
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
        const element = document.querySelector('.App');
        element.classList.add('no-mouse');
        setTimeout(() => {
            element.classList.remove('no-mouse');
          }, 1500);

        disableBodyScroll(document.body);
        setTimeout(() => {
            enableBodyScroll(document.body);
          }, 1000);
          
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            duration: 200,
          });
          
        const clickedRectangle  = rectangles.find(rectangle => rectangle.id === id);
        const animationControls = clickedRectangle.animationControls;

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
                  delay:0.2,
                },
              });
                previousAnimationControls.start({
                  x: 0,
                  transition: {
                    ease: "easeInOut",
                    duration: 0.6,
                    delay: 0.9,
                  },
                });
            }
        
            animationControls.start({
              x: -500,
              transition: {
                ease: "easeInOut",
                duration: 0.6,
                delay:0.2,
              },
            });
            animationControls.start({
                y: 1000,
                transition: {
                  ease: "easeInOut",
                  duration: 0.6,
                  delay: 0.9,
                },
              });
            setCurrentRectangleId(id);
          }
      };

    return (
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
            handleMouseEnter={() => handleMouseEnter(rectangle.id)}
            handleMouseLeave={() => handleMouseLeave(rectangle.id)}
            show={show[rectangle.id]}
            setShow={setShow}
          >
          </Rectangle>
        ))}
      </div>
    );
  };


  function ScrollToTopButton() {
    const [showButton, setShowButton] = useState(false);
  
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setShowButton(true)
        } else {
          setShowButton(false)
        }
      })
    }, []);
  
    const scrollUp = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  
    return (
      <div>
        {showButton && (
          <div className="scroll-button" onClick={scrollUp}>
              <div className="icon fas fa-chevron-up">^</div>
          </div>
        )}
      </div>
    );
  }
  
  function HomePage() {

    const [show, setShow] = useState({});

    const sectionNames = {
      1: "about",
      2: "education",
      3: "experience",
      4: "projects",
      5: "awards",
      6: "contact"
  };

    const handleRectangleClick = (id, show) => {
        setTimeout(() => {
          setShow((prevShow) => {
            if (prevShow[id]) {
              return { ...prevShow, [id]: !prevShow[id] };
            }
            return { ...show, [id]: true };
          });
        }, 1000);

        setTimeout(() => {
            window.scrollTo({
                top: document.body.scrollHeight/5,
                behavior: 'smooth',
                duration: 1000,
              });
              window.location.hash = `#${sectionNames[id]}`;
          }, 1300);

        
      };

      useEffect(() => {
        window.history.replaceState(null, "", window.location.pathname);

        const hash = window.location.hash;
        if (hash) {
          const id = hash.replace("#", "");
          setShow((prevShow) => ({...prevShow, [id]: true}));
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, []);

    return (<body>
        <div class="alll">
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
        <div className="something">
            <MyComponent onRectangleClick={handleRectangleClick}></MyComponent>
        </div>
      </motion.div>
      <div className='bottom_page'>
      {show[1] && (
        <div>
          <div className='indent'></div>
          <AboutPage/>
        </div>
      )}
      {show[2] && (
        <div>
        <div className='indent'></div>
        <EducationPage/>
      </div>
      )}
      {show[3] && (
        <div>
        <div className='indent'></div>
        <ExperiencePage/>
      </div>
      )}
      {show[4] && (
        <div>
        <div className='indent'></div>
        <ProjectsPage/>
      </div>
      )}
      {show[5] && (
        <div>
        <div className='indent'></div>
        <AwardsPage/>
      </div>
      )}
      {show[6] && (
        <div>
        <div className='indent'></div>
        <ContactPage/>
      </div>
      )}
      </div>
      </div>
      <ScrollToTopButton />
      </body>
    );
  }

  export default HomePage;
  export {MyComponent};