import React from 'react'
import { Link, Route, Router, useLocation} from 'react-router-dom';
import ReactDom from 'react-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Restaurant from './Restaurant';

import Pcadeau from "./pages/Pcadeau";
import Pchefs from "./pages/Pchefs";
import Pemporter from "./pages/Pemporter";
import Pgaleries from "./pages/Pgaleries";
import Pmenus from "./pages/Pmenus";



function Mynavbar() {
  // const location = useLocation()
  return (
    <>
      <Router>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">Dirf Restaurant</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '200px' }}
                navbarScroll
              >
                <Nav.Link  >Restaurant</Nav.Link>
                <Nav.Link >Chef</Nav.Link>
                <Nav.Link  >Menus</Nav.Link>
                <Nav.Link >Galeries</Nav.Link>
                <Nav.Link  >Cadeau</Nav.Link>
                <Nav.Link  >Emporter</Nav.Link>
                  
              </Nav>
              <Form className="d-flex mr-10">
                <Button variant="outline-success">Reservation</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

          {/* <switch>
            <Route exact path="/" component={Restaurant}/> 
            <Route path="/pages/Pcadeau.js" component={Pcadeau}/> 
            <Route path="/pages/Pchefs.js" component={Pchefs}/> 
            <Route path="/pages/Pemporter.js" component={Pemporter}/> 
            <Route path="/pages/Pgaleries.js"component={Pgaleries}/>  
            <Route path="/pages/Pmenus.js" component={Pmenus}/> 
          </switch> */}
      </Router>
    </>
  )
}

export default Mynavbar

// Nav.Link  as={Link} to={"/"}>Restaurant</Nav.Link>
//                 <Nav.Link as={Link} to={"/pages/Pchefs.js"}>Chef</Nav.Link>
//                 <Nav.Link as={Link} to={"/pages/Pmenus.js"} >Menus</Nav.Link>
//                 <Nav.Link as={Link} to={'/pages/Pgaleries.js'} >Galeries</Nav.Link>
//                 <Nav.Link as={Link} to={'/pages/Pcadeau.js'}  >Cadeau</Nav.Link>
//                 <Nav.Link as={Link} to={'/pages/Pemporter.js'} >Emporter</Nav.Link>





{/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid m-0">
                <a class="navbar-brand" href="#">
                <img src="https://th.bing.com/th/id/OIP.NE2zEeDwfsGKDte5HPgKfAAAAA?pid=ImgDet&rs=1" alt="" width="30" height="24"/>   
                    Dirf-Restaurant</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0  ">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Restaurant</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" to="./pages/Pchefs.js">Chef</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Menus</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Galerie</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Emporter</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Cadeau</a>
                        </li>
                        

                        {/* <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> 
                        
                    </ul>

                    <form class="d-flex" role="search">
                        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> 
                        <button class="btn btn-outline-success" type="submit">Reservation</button>
                    </form>
                </div>
            </div>
        </nav> */}