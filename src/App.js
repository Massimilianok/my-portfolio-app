import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import NavPortfolio from './components/NavPortfolio/NavPortfolio';
import NavbarPortfolio from './components/NavbarPortfolio/NavbarPortfolio';
import NavbarDesktop from './components/NavbarPortfolio/NavbarDesktop';
import Logo from './components/Logo/Logo';
import SocialIcons from './components/SocialIcons/SocialIcons';
import Main from './components/Main/Main';
import Bio from './pages/Bio/Bio';
import Lab from './pages/Lab/Lab';
import ContactMe from './pages/ContactMe/ContactMe';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} lg={5} className="px-0">
          <Header>
            <div className="d-lg-flex justify-content-lg-center align-items-lg-center">
              <Logo />
              <NavbarDesktop>
                <NavPortfolio />
              </NavbarDesktop>
            </div>
            <SocialIcons />
          </Header>
        </Col>
        <Col xs={12} lg={7} className="pr-lg-0">
          <Main>
            <Switch>
              <Route path="/" exact>
                <Bio />
                <Footer />
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
        </Col>
      </Row>
      <NavbarPortfolio>
        <NavPortfolio />
      </NavbarPortfolio>
    </Container>
  );
};

export default App;
