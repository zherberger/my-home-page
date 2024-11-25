import React from 'react';
import profilePic from './assets/zacharyherberger.jpg';
import { Link } from 'react-router-dom';
import { Page } from './components';

export default function Home() {
  return (
    <Page>
        <div className="home">
          <img
              src={profilePic}
              alt='Zachary Herberger'
              className='profile-pic'
          />
          <p className="bio">
            Hi, I'm Zack!
            <br/><br/>
            Originally from Fairmont, WV, I moved to Pittsburgh in 2024 in order to advance my career in software development.
            <br/><br/>
            Check out some of my <Link className="link" to='/projects'>projects</Link>!
          </p>
        </div>
    </Page>
  );
}