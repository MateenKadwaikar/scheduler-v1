import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import CreateEvent from './components/events/create-edit-event';
import Events from './components/events/event';
import Login from './components/login/login';
import NotFound from './components/NotFound';
import Reset from './components/reset/reset';
import Schedule from './components/schedule/schedule';
import SignUp from "./components/signup/signup";

const App = () => {
  const [userLogin, setLogin] = useState(false);

  const userLoggedInEvent = (success) => {
    setLogin(success);
  }

  useEffect(() => {
    getUserDetail();
  }, [])

  const getUserDetail = () => {
    let user = JSON.parse(sessionStorage.getItem('userDetail')) &&
      JSON.parse(sessionStorage.getItem('userDetail')).success;
    setLogin(user);
    console.log(userLogin);
  }

  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <Login userLoggedInEvent={userLoggedInEvent} />
        </Route>
        <Route path="/reset">
          <Reset />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        {
          userLogin ?
            <>
              <Route path="/event" exact>
                <Events />
              </Route>
              <Route path="/createevent">
                <CreateEvent data="Create" />
              </Route>
              <Route path="/event/:id">
                <CreateEvent data="Edit" />
              </Route>
              <Route path="/schedule">
                <Schedule />
              </Route>
            </> : <Redirect to="/" />
        }

        <Route component={NotFound} />
      </Switch>
    </main>
  );
}

export default App;
