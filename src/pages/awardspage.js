import React, { useState } from 'react';
import './awardspage.css';

function AwardsPage() {
    return (
      <div className='container-center-horizontal'>
        <div className='frame-1 screen'>
            <div className='overlap-group'>
                <div className='awards'>
                    <p className='about-me-text'>Awards</p>
                </div>
                <div className='frame-155'>
                    <div className='frame-14'>
                        <div className='frame-13'>
                            <div className='about'>
                                Awards
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

export {AwardsPage};