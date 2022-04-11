import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Splash from './components/splash'

import Images from './components/Images/Index'
import ImageDetail from "./components/Images/ImageDetail";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>

      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
          {sessionUser ? <Redirect to="/home" /> : <Splash />}
          </Route>
          <Route exact path="/home">
            {sessionUser ? <Images /> : <Redirect to="/"/>}
          </Route>
          <Route exact path='/images/:imageId'>
            {sessionUser ? <ImageDetail /> : <Redirect to="/"/>}
          </Route>
          <Route>
            <div className="error-container">
              <h1>Page not Found</h1>
              <img src="https://64.media.tumblr.com/758a7e6540aa7c7b3b66c05d4b038b1f/0e321595885f522b-82/s500x750/67d69487194df790436fc6b077b9a6edfa6b7711.gifv" alt="Anime GIF" />
            </div>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
