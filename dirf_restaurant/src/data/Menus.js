import React from 'react'
import mdec from "../assets/pictures/menus/m_decouverte.jpg";
import mdeg from "../assets/pictures/menus/m_degustation.jpg";
import mgou from "../assets/pictures/menus/m_gourmand.jpg";
import msig from "../assets/pictures/menus/m_signature.jpg";


function Menus() {
    const card = {
            width: '18rem',
            }
    const mb  = {marginBottom:'10px'}
  return (
    <>
                <div class="row text-center ">
                    <div class="col-lg-3 col-md-6 col-sm-6" style={mb}>
                        <div class="card" style={card}>
                            <img src={mdec} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">DÉCOUVERTE</h5>
                                <p class="card-text">Pour travailler les produits au rythme des saisons,</p>
                                <a href="#" class="btn btn-outline-primary">Découvrir ce menu</a>
                            </div>
                        </div>
                    </div>
                  
                    <div class="col-lg-3 col-md-6 col-sm-6" style={mb}>
                        <div class="card" style={card}>
                            <img src={mdeg} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">DÉGUSTATION</h5>
                                <p class="card-text">Le menu dégustation s’adapte à votre gourmandise.</p>
                                <a href="#" class="btn btn-outline-primary">Découvrir ce menu</a>
                            </div>
                        </div>
                    </div>
                
                
                    <div class="col-lg-3 col-md-6 col-sm-6" style={mb}>
                        <div class="card" style={card}>
                            <img src={msig} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">SIGNATURE</h5>
                                <p class="card-text">
                                    Ce menu est servi pour l’ensemble de la table.</p>
                                <a href="#" class="btn btn-outline-primary">Découvrir ce menu</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6" style={mb}>
                        <div class="card" style={card}>
                            <img src={mgou} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">GOURMAND</h5>
                                <p class="card-text">Un déjeuner gastronomique autour de produits de saison.</p>
                                <a href="#" class="btn btn-outline-primary">Découvrir ce menu</a>
                            </div>
                        </div>
                    </div>
    
                </div>

                
                     
    </>
  )
}

export default Menus