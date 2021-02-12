import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Navbar from './components/Navbar/Navbar';
import NavbarDesktop from './components/Navbar/NavbarDesktop';
import Logo from './components/Logo/Logo';
import SocialIcons from './components/SocialIcons/SocialIcons';
import Main from './components/Main/Main';
import Bio from './pages/Bio/Bio';
import Lab from './pages/Lab/Lab';
import ContactMe from './pages/ContactMe/ContactMe';

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-5 px-0">
          <Header>
            <div className="d-lg-flex justify-content-lg-center align-items-lg-center">
              <Logo />
              <NavbarDesktop>
                <Nav />
              </NavbarDesktop>
            </div>
            <SocialIcons />
          </Header>
        </div>
        <div className="col-12 col-lg-7 pe-lg-0">
          <Main>
            <Switch>
              <Route path="/" exact>
                <Bio />
              </Route>
              <Route path="/lab">
                <Lab />
              </Route>
              <Route path="/contact">
                <ContactMe />
              </Route>
              <Redirect to="/" />
            </Switch>
          </Main>
        </div>
      </div>
      <Navbar>
        <Nav />
      </Navbar>
    </div>
  );
};

export default App;
