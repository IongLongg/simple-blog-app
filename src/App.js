import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Row, Col,  } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import About from './components/About';
import BlogList from './components/BlogList';
import SearchWidget from './components/SearchWidget';
import SideWidget from './components/SideWidget';

function App() {
  return (
      <Router>
          <Navbar bg='dark' variant='dark' expand='lg'>
              <Container>
                  <Navbar.Brand href="#home">My Blog</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id='basic-navbar-nav'>
                      <Nav className='mx-auto'>
                          <Nav.Link as={Link} to='/'>
                              Home
                          </Nav.Link>
                          <Nav.Link as={Link} to='/blogs'>
                              Blogs
                          </Nav.Link>
                          <Nav.Link as={Link} to='/about'>
                              About
                          </Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
          
          <Container className='mt-3 mb-5'>
              <Row>
                  <Col md={8}>
                      <Switch>
                          <Route exact path='/'>
                              <h1>Welcome to my blog</h1>
                          </Route>
                          <Route path='/blogs'>
                              <BlogList/>
                          </Route>
                          <Route path='/about'>
                              <About/>
                          </Route>
                      </Switch>
                  </Col>
                  
                  <Col md={4}>
                      <SearchWidget/>
                      <SideWidget/>
                  </Col>
              </Row>
          </Container>

          <Navbar fixed='bottom' bg='dark' variant='dark'>
              <Navbar.Collapse className="py-4 justify-content-center">
                  <Navbar.Text>
                      Copyright © Your Website 2020
                  </Navbar.Text>
              </Navbar.Collapse>
          </Navbar>
      </Router>
  );
}

export default App;
