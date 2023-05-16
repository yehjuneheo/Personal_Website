import React, { useState } from 'react';
import './projectspage.css';

function ProjectsPage() {
    return (
      <div className='container-center-horizontal'>
        <div className='frame-1 screen'>
            <div className='overlap-group'>
                <div className='projects'>
                    <p className='about-me-text'>Projects</p>
                </div>
                <div className='frame-154'>
                    <div className='frame-14'>
                        <div className='frame-13'>
                            <div className='about'>
                                Projects
                            </div>
                            <h1 className="title">
                                Let Me Introduce Myself
                            </h1>
                            <div className='frame-10'>
                                <div className='rectangle-4'></div>
                                <p className='introduction-text'>
                                    Something
                                </p>
                            </div>
                        </div>
                        <div className="frame-12">
                            <h1 className='skills'>
                                Skills
                            </h1>
                            <div className='frame'>
                                <div className='rectangle-5'></div>
                                <div className='frame-7'>
                                    <div className='python poppins-medium-black-25px'>
                                        Python
                                    </div>
                                    <img className='rectangle-6' src="" alt="Image" />
                                </div>
                            </div>
                            <div className='frame'>
                                <div className='rectangle-5'></div>
                                <div className='frame-7'>
                                    <div className='python poppins-medium-black-25px'>
                                        Python
                                    </div>
                                    <img className='rectangle-6' src="" alt="Image" />
                                </div>
                            </div>
                            <div className='frame'>
                                <div className='rectangle-5'></div>
                                <div className='frame-7'>
                                    <div className='python poppins-medium-black-25px'>
                                        Python
                                    </div>
                                    <img className='rectangle-6' src="" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }

export {ProjectsPage};