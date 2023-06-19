import React, { Component } from 'react'

export class Restaurant extends Component {
  render() {
    return (
      <>
        <div class="bloc">

            <video autoPlay loop muted playsInline  class="col-lg-12 col-md-12">
                <source src="assets/movies/LE GOURMET DE SEZE.mp4" type="video/mp4"></source>
            </video>

            <div class="container text-left">
                <div class="row">
                    <div class="col-lg-12">
                        <h1>Le Gourmet de Sèze</h1>
                        <p>Une cuisine proche du produit, inspirée par la nature et le terroir</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <button class="btn btn-outline-danger" type="submit">Reservation</button>
                    </div>
                </div>
                
            </div>
            
        </div>

      </>
    )
  }
}

export default Restaurant