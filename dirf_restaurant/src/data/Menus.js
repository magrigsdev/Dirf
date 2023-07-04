import React from 'react'
import mdec from "../assets/pictures/menus/m_decouverte.jpg";
import mdeg from "../assets/pictures/menus/m_degustation.jpg";
import mgou from "../assets/pictures/menus/m_gourmand.jpg";
import msig from "../assets/pictures/menus/m_signature.jpg";


function Menus() {
    const card = {width: '18rem',}
    const ecart = {marginTop:'30px'}
    const mb  = {marginBottom:'10px'}
  return (
    <>
        <div className='col'>
            <div class="container">

                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-10" style={mb}>
                        <div class="card" style={card}>
                            <img src={mdec} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">DÉCOUVERTE</h5>
                                <p class="card-text">Pour travailler les produits au rythme des saisons, Bernard Mariller imagine un menu à la fois raffiné et créatif pour vous étonner</p>
                                <a href="#" class="btn btn-primary">Découvrir ce menu</a>
                            </div>
                        </div>
                    </div>
                  
                    <div class="col-lg-4 col-md-4 col-sm-10" style={mb}>
                        <div class="card" style={card}>
                            <img src={mdeg} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">DÉGUSTATION</h5>
                                <p class="card-text">Le menu dégustation s’adapte à votre gourmandise.</p>
                                <a href="#" class="btn btn-primary">Découvrir ce menu</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-10" style={mb}>
                        <div class="card" style={card}>
                            <img src={msig} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">SIGNATURE</h5>
                                <p class="card-text">Envie de surprise ?
                                    Laissez-vous tenter par cette invitation en découvrant l’univers culinaire du chef grâce à quatre petits plats.
                                    Ce menu est servi pour l’ensemble de la table.</p>
                                <a href="#" class="btn btn-primary">Découvrir ce menu</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-10" style={mb}>
                        <div class="card" style={card}>
                            <img src={mgou} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">GOURMAND</h5>
                                <p class="card-text">Un déjeuner gastronomique autour de produits de saison.
                                Le vendredi  midi, Le chef Bernard Mariller vous accueille au restaurant pour un déjeuner étoilé ! </p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
    
                </div>

            </div>           
        </div>
    </>
  )
}

export default Menus