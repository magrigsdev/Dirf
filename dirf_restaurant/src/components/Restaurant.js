import React from 'react'
import Header from './Header'
import Pictures from '../data/Pictures'

import pic5 from '../assets/pictures/pic5.png'
import Menus from '../data/Menus'
import person1 from '../assets/pictures/person1.jpg'




function Restaurant() {


  const mycol = {
    marginLeft:'20px'
  }

  const chef = {marginTop:'100px'}
  const ecartBasse = {marginBottom:'30px'}
  




  return (
    <>
      <Header/>
      <h1 class="display-4 text-center">Dirf Restaurant</h1>
        <p class="lead text-center">
        Restaurant gastronomique étoilé au guide Michelin depuis 2002
        </p>
      <Pictures/>

      <div class="container text-center">
        <div className='row my-10'>
        <p className='fs-5'><em>Situé au coeur du 6ème arrondissement de Lyon, le restaurant gastronomique Le Gourmet de Sèze vous accueille dans une ambiance sereine et intemporelle.
            Le temps d'un repas, laissez-vous transporter dans l'univers culinaire de Bernard Mariller.</em></p>
        </div>
      </div>

      <div class="container" style={chef}>
        <div class="row py-10">
          <div class="col-sm-5 col-md-6">
              <img src="https://images8.alphacoders.com/818/thumbbig-818929.webp" class="img-thumbnail" alt="..."/>
          </div>

          <div class="col-sm-4 col-md-4" style={mycol}>
            <h1 class="display-5">Nico kovnovitch</h1>
            <p class="lead">
              Chef étoilé depuis 2002 au guide Michelin, Nico Kovnovitch est également membre des Toques Blanches Lyonnaises.
              Le  chef et son équipe partageront avec vous leur passion pour leur métier.
              Avec un service soigné et discret, ils sauront faire de ce moment une expérience gastronomique unique.
            </p>            
            <button type="button" class="btn btn-outline-success d-flex justify-content-center">En savoir plus du chef</button>            
          </div>

        </div>
      </div>

      <div class="container" style={chef}>
        <div class="row py-10">
          
          <div class="col-sm-5 col-md-6">
            <h1 class="display-6">Notre chef recommande</h1>
            <p class="lead">
            Le poulet rôti est un plat classique et délicieux qui fait saliver les papilles. 
            Lorsqu'il est préparé avec soin, le poulet rôti est juteux à l'intérieur et croustillant à l'extérieur, ce qui en fait un repas réconfortant
             et savoureux pour de nombreuses personnes.
            </p>            
            <button type="button" class="btn btn-lg btn-outline-danger d-flex justify-content-center">Menus</button>            
          </div>

          <div class="col-sm-5 col-md-6">
            <img src= {pic5} class="img-thumbnail" alt="..."/>
          </div>

        </div>
      </div>

      <div class="container" style={chef}>
        <div className='row' style={ecartBasse}>
          <div class="col">
              <h1 class="display-6 text-success text-center">Nos Menus</h1>                
          </div> 
        </div>
        <Menus/>   
        
      </div>

      <div className='container' style={chef} >
        <div class="col">
              <h1 class="display-6 text-success text-center">Commentaire</h1>                
        </div>

        <div className='row d-flex justify-content-center'>
          <div className='col-sm-2'>
            <img src={person1} class="img-thumbnail" alt="..."/>
          </div>        
        </div>

        <div className='row text-center' style={ecartBasse}>
          <div className='col'>
            <figure>
              <blockquote class="blockquote">
                <p>Dirf Restaurant  offre une expérience culinaire exceptionnelle. </p>
              </blockquote>
              <figcaption class="blockquote-footer">
                IT Manager <cite title="Source Title"> Laureat Banzouzi</cite>
              </figcaption>
            </figure>

          </div>
        </div>

      </div>

    </>
    

  )
}

export default Restaurant