import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignUpFormModal from "./components/SignupFormModal";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

import Images from './components/Images/Index'
import ImageDetail from "./components/Images/ImageDetail";
// <Route path="/signup">
//   <SignUpFormModal />
// </Route>

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Images />
          </Route>
          <Route exact path='/images/:imageId'>
            <ImageDetail />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
