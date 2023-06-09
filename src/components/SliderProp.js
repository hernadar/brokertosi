import React from "react";

import '../assets/css/slider.css';
import {animate, delay, motion, transform} from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBed, faToilet, faVectorSquare,faCar } from '@fortawesome/free-solid-svg-icons';



const SliderProp = ({propiedades}) => {

return(
   
    <motion.div className='slider-container'>
       <h2>Propiedades</h2>
        <motion.div className='slider'  drag='x' dragConstraints={{right:0, left:-propiedades.length*400}} >
        
        {propiedades.map(propiedad =>(
            <motion.div className='item card shadow'>
                
                    <img src={propiedad.image} alt="" />
                    <div className="modo">
                    <h2>{propiedad.mode}</h2>
                    </div>
                    <div className="id">
                    <h2># {propiedad.id}</h2>
                    </div>
                    <div className="info">
                        <div>
                            <h2>{propiedad.money} {propiedad.price}</h2>
                            <p>{propiedad.address}</p>
                            <p>{propiedad.location}-{propiedad.departament}-{propiedad.province}</p>
                        </div>
                        <div className='ametitis'>
                        <FontAwesomeIcon icon={faBed} />
                        <p>Dormitorios: {propiedad.bedroom}</p>
                        <FontAwesomeIcon icon={faToilet} />
                        <p>Baños: {propiedad.bathroom}</p>
                        </div>
                        <div className='ametitis'> 
                        <FontAwesomeIcon icon={faVectorSquare} />
                        <p>Sup: {propiedad.m2} m2</p>
                        {(propiedad.garage) &&
                        <>
                        <FontAwesomeIcon icon={faCar} />
                        <p>Cochera</p>
                        </>}
                        </div>
                      
                    </div>

            </motion.div>
        ))}
        </motion.div>
    </motion.div>

)

}

export default SliderProp;
