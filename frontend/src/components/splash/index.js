import { Link } from 'react-router-dom'
import './index.css';

function Splash() {
  return (
    <>
      <div className="splash-main-div">
        <div className='splash-main-content'>
          <div>
            <h1>Welcome to Animagee</h1>
            <p>Share your anime images to our community!</p>
            <p>Demo user available on Login form (top right)</p>
          </div>
        </div>
      </div>
      <footer>
        <div>
          <a href="https://github.com/JayDrojas/animagee">Github Repo</a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/damian-rojas-076a571b8/" >LinkedIn</a>
        </div>
        <div>
          <p>2022 - Juan Damian Rojas</p>
        </div>
      </footer>
    </>
  )
}

export default Splash;
