import React from 'react'

function Navbar() {
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
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
                            <a class="nav-link" href="#">Chef</a>
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
                        </li> */}
                        
                    </ul>

                    <form class="d-flex" role="search">
                        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
                        <button class="btn btn-outline-success" type="submit">Reservation</button>
                    </form>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar