
import pic2 from '../assets/pictures/pic2.jpg' 
import React from 'react'


function Pictures() {

  return (
   <>
        <div class="container text-center">
            <div className='row'>
                <div className="col-sm-4">
                    <img src={pic2} alt="Imge 1" className="img-fluid img-thumbnail" />
                </div>
                <div className="col-sm-4">
                    <img src={pic2} alt="Imge 2" className="img-fluid img-thumbnail" />
                </div>
                <div className="col-sm-4">
                    <img src={pic2} alt="Imge 3" className="img-fluid img-thumbnail" />
                </div>
            </div> 
      </div>
   </>
  )
}

export default Pictures