import profilePic from './assets/zacharyherberger.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='page home'>
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
          Check out some of my <Link to='/projects'>projects</Link>!
        </p>
    </div>
  );
}