import pic2 from '../assets/pictures/pic2.jpg' 
import pic3 from '../assets/pictures/pic3.jpg'  
import pic4 from '../assets/pictures/pic4.jpg' 
 
import React from 'react'


function Pictures() {

  return (
   <>
        <div className='container'>
            <div className='row'>
                <div className="col-sm-4">
                    <img src={pic2} alt="Imge 1" className="img-fluid img-thumbnail  " />
                </div>
                <div className="col-sm-4">
                    <img src={pic3} alt="Imge 2" className="img-fluid img-thumbnail " />
                </div>
                <div className="col-sm-4">
                    <img src={pic4} alt="Imge 3" className="img-fluid img-thumbnail " />
                </div>
            </div>
        </div> 
   </>
  )
}

export default Pictures