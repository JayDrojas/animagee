import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import CreateImgModal from '../CreateImageModal';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div id="nav-div-createBttn">
          <CreateImgModal user={sessionUser} />
        </div>
        <div id="nav-div-profileBttn">
          <ProfileButton user={sessionUser} />
        </div>
      </>
    )
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div id='nav-div'>
      <div>
        <NavLink className="submit-bttn" exact to="/">Home</NavLink>
      </div>
      <div>
      <NavLink id="animage-logo" exact to="/">Animage</NavLink>
      </div>
      <div className="nav-div-create-profile-bttn">
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
