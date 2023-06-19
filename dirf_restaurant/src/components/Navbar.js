
import React, { Component } from 'react'

export class Navbar extends Component {

  render() {
    return (
      <>
      {/* //-- Image and text --> */}
     
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                <a class="navbar-brand" href="#">
                        <img src="https://cdn.dribbble.com/users/595/screenshots/14417863/media/8913cc1aae5de0cc7afdd1727e5582c0.png" alt="Bootstrap" width="30" height="24"/>
                </a>

                    <a class="navbar-brand" href="#">Le Gourmet de Sèze</a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>


                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Restaurant</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">chef</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">menus</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">galerie</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">emporter</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">cadeaux</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Accès</a>
                            </li>

                        
                            
                        </ul>
                    <form class="d-flex" role="search">
                        <button class="btn btn-outline-danger" type="submit">Reservation</button>
                    </form>
                    </div>
                </div>
            </nav>

      </>
    )
  }
}

export default Navbar


